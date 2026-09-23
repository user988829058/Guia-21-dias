const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "fbclid",
  "gclid",
] as const;

const STORAGE_KEY = "p21_utm_params";

function readStoredParams(): Record<string, string> {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeStoredParams(params: Record<string, string>) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
  } catch {
    // sessionStorage indisponível (modo privado etc.) — segue sem persistir
  }
}

/** Captura os parâmetros de UTM/click id da URL atual e mescla com os já salvos na sessão. */
export function captureUtmParams(): void {
  if (typeof window === "undefined") return;

  const url = new URL(window.location.href);
  const found: Record<string, string> = {};

  TRACKED_PARAMS.forEach((key) => {
    const value = url.searchParams.get(key);
    if (value) found[key] = value;
  });

  if (Object.keys(found).length > 0) {
    writeStoredParams({ ...readStoredParams(), ...found });
  }
}

/** Retorna a URL de destino com os parâmetros de UTM da sessão anexados. */
export function withUtmParams(destinationUrl: string): string {
  const stored = readStoredParams();
  if (Object.keys(stored).length === 0) return destinationUrl;

  try {
    const url = new URL(
      destinationUrl,
      typeof window !== "undefined" ? window.location.href : undefined
    );
    Object.entries(stored).forEach(([key, value]) => {
      if (!url.searchParams.has(key)) url.searchParams.set(key, value);
    });
    return url.toString();
  } catch {
    // destinationUrl é um placeholder sem protocolo válido (ex.: "CHECKOUT_URL")
    const query = new URLSearchParams(stored).toString();
    return destinationUrl.includes("?")
      ? `${destinationUrl}&${query}`
      : `${destinationUrl}?${query}`;
  }
}
