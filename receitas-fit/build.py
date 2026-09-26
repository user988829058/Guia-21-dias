#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Gera o PDF "Receitas fit de dar água na boca" a partir do conteúdo em
src/content.py, do template src/template.html e da folha de estilo
src/style.css.

Uso:
    python3 build.py

Saída:
    output/receitas-fit-de-dar-agua-na-boca.pdf
"""

import random
import re
import sys
from pathlib import Path

from jinja2 import Environment, FileSystemLoader
from PIL import Image
from weasyprint import HTML

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "src"
OUTPUT = ROOT / "output"
NOISE_PATH = SRC / "noise.png"

sys.path.insert(0, str(SRC))
import content as c  # noqa: E402


BOLD_RE = re.compile(r"\*\*(.+?)\*\*")


def md(text: str) -> str:
    """Converte a marcação leve **negrito** usada no conteúdo em HTML."""
    return BOLD_RE.sub(r"<strong>\1</strong>", text)


def ensure_noise_texture(path: Path, size: int = 160, opacity: float = 0.045) -> None:
    """Gera (uma vez) um ladrilho de ruído de papel bem sutil, só para os fundos bege."""
    if path.exists():
        return
    random.seed(21)
    alpha = round(255 * opacity)
    img = Image.new("RGBA", (size, size))
    pixels = img.load()
    for y in range(size):
        for x in range(size):
            gray = random.randint(0, 255)
            pixels[x, y] = (gray, gray, gray, alpha)
    img.save(path)


def validate_content() -> list[str]:
    """Checagens leves de consistência estrutural do conteúdo (não do texto em si)."""
    warnings = []
    expected_numbers = list(range(1, len(c.CHAPTERS) + 1))
    actual_numbers = [chapter["number"] for chapter in c.CHAPTERS]
    if actual_numbers != expected_numbers:
        warnings.append(
            f"Numeração de capítulos fora de sequência: {actual_numbers}"
        )

    for chapter in c.CHAPTERS:
        if not chapter["recipes"]:
            warnings.append(f"Capítulo {chapter['number']} não tem receitas.")
        for recipe in chapter["recipes"]:
            if not recipe.get("ingredient_groups"):
                warnings.append(f"Receita sem ingredientes: {recipe['title']}")
            if not recipe.get("steps"):
                warnings.append(f"Receita sem modo de preparo: {recipe['title']}")
            for group in recipe.get("ingredient_groups", []):
                if not group.get("lines"):
                    warnings.append(
                        f"Grupo de ingredientes vazio em: {recipe['title']} "
                        f"({group.get('label')})"
                    )
    return warnings


def render_html() -> str:
    env = Environment(loader=FileSystemLoader(str(SRC)))
    env.globals["md"] = md
    template = env.get_template("template.html")
    return template.render(
        book_title=c.BOOK_TITLE,
        book_subtitle=c.BOOK_SUBTITLE,
        intro=c.INTRO,
        chapters=c.CHAPTERS,
        trades=c.TRADES,
        disclaimer=c.DISCLAIMER,
    )


def main() -> None:
    OUTPUT.mkdir(exist_ok=True)
    ensure_noise_texture(NOISE_PATH)

    warnings = validate_content()

    html_string = render_html()
    pdf_path = OUTPUT / "receitas-fit-de-dar-agua-na-boca.pdf"
    HTML(string=html_string, base_url=str(SRC)).write_pdf(str(pdf_path))

    try:
        from pypdf import PdfReader

        page_count = len(PdfReader(str(pdf_path)).pages)
    except Exception:
        page_count = None

    recipe_count = sum(len(chapter["recipes"]) for chapter in c.CHAPTERS)
    print(f"PDF gerado em: {pdf_path}")
    if page_count is not None:
        print(f"Total de páginas: {page_count}")
    print(f"Capítulos: {len(c.CHAPTERS)} · Receitas: {recipe_count}")

    if warnings:
        print("\nInconsistências encontradas no conteúdo:")
        for w in warnings:
            print(f"  - {w}")
    else:
        print("\nNenhuma inconsistência estrutural encontrada no conteúdo.")


if __name__ == "__main__":
    main()
