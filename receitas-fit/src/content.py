# -*- coding: utf-8 -*-
"""
Conteudo final do livro "Receitas fit de dar agua na boca".

Nao reescrever, resumir ou alterar nenhum texto aqui — o conteudo segue
restricoes de publicidade e de posicionamento definidas pelo cliente.
Marcacao leve de markdown (**negrito**) e mantida onde aparece no
original e e convertida para HTML em build.py.
"""

BOOK_TITLE = "Receitas fit de dar água na boca"
BOOK_SUBTITLE = "Comida de verdade para quem não quer dieta chata"

INTRO = {
    "heading": "Antes das receitas",
    "paragraphs": [
        "A maior parte das dietas não falha por ser difícil. Falha por ser chata.",
        'Ninguém aguenta muito tempo comendo frango com batata-doce em potinho, olhando '
        'para o prato dos outros. Umas semanas depois vem a saturação, depois o exagero, '
        'e junto a conclusão de sempre: "eu não tenho força de vontade".',
        "Tem, sim. O que faltava era comida que você quisesse comer.",
        "Este receituário existe para isso. São receitas de coisas que você já gosta — "
        "pastel, coxinha, hambúrguer, pão de queijo, brigadeiro — em versões caseiras, "
        "feitas no forno ou na airfryer, com ingredientes de supermercado comum.",
    ],
    "rules_heading": "Três coisas que você não vai encontrar aqui:",
    "rules": [
        "Não há contagem de calorias. Nenhuma receita tem tabela nutricional, porque o "
        "método deste material nunca foi contar nada.",
        "Não há cardápio. Ninguém vai te dizer o que comer na terça de manhã. Isto é um "
        "repertório: você escolhe o que quiser, quando quiser.",
        "Não há alimento proibido. Comida proibida é comida que vira compulsão.",
    ],
    "closing_lead": "Uma coisa que você vai encontrar em toda receita:",
    "closing_text": 'um bloco chamado "para completar o prato". É onde a receita se conecta '
    "com o que o guia ensina — garantir proteína e fibra na refeição. Uma linha, em cada "
    "página, para você não precisar pensar muito.",
    "sign_off": "Boa cozinha.",
}

CHAPTERS = [
    {
        "number": 1,
        "title": "Salgados e petiscos",
        "recipes": [
            {
                "title": "Pastel de forno de frango",
                "tagline": "O pastel da feira, assado e feito em casa, com massa de batata-doce.",
                "time": "60 minutos",
                "yield_": "rende cerca de 10 unidades",
                "ingredient_groups": [
                    {
                        "label": "Ingredientes da massa",
                        "lines": [
                            "1 xícara e meia de chá de batata-doce cozida",
                            "1 xícara de chá de farinha de aveia",
                            "1 colher de chá de sal",
                            "1 colher de sopa de azeite",
                        ],
                    },
                    {
                        "label": "Ingredientes do recheio",
                        "lines": [
                            "Frango cozido e desfiado a gosto",
                            "Requeijão a gosto",
                        ],
                    },
                    {
                        "label": "Para finalizar",
                        "lines": [
                            "1 ovo",
                            "Azeite e orégano",
                        ],
                    },
                ],
                "steps": [
                    "Numa tigela, junte a batata-doce, a farinha de aveia, o sal e o azeite.",
                    "Misture até formar uma massa que desgrude das mãos.",
                    "Embrulhe no plástico-filme e leve à geladeira por 20 minutos.",
                    "Enquanto isso, misture o frango desfiado com o requeijão.",
                    "Abra a massa gelada com o rolo e corte círculos.",
                    "Coloque o recheio no centro de cada um e feche em meia-lua.",
                    "Aperte as bordas com os dentes de um garfo para selar.",
                    "Disponha numa assadeira untada, pincele com o ovo batido e salpique orégano.",
                    "Asse em forno preaquecido a 200 °C por cerca de 35 minutos, até dourar.",
                ],
                "callouts": [
                    {"label": "Para completar o prato",
                     "text": "Uma salada de folhas ao lado fecha a refeição."},
                    {"label": "Nota de preparo",
                     "text": "A geladeira não é opcional: massa morna gruda no rolo e rasga "
                     "na hora de fechar."},
                ],
            },
            {
                "title": "Coxinha fit de airfryer",
                "tagline": "Massa de batata com frango, sem farinha de trigo e sem fritura.",
                "time": "40 minutos",
                "yield_": "rende cerca de 8 unidades",
                "ingredient_groups": [
                    {
                        "label": "Ingredientes",
                        "lines": [
                            "400 g de batata inglesa",
                            "150 g de frango desfiado",
                            "1 colher de aveia",
                            "Queijo a gosto para rechear",
                        ],
                    },
                ],
                "steps": [
                    "Cozinhe as batatas com casca até ficarem bem macias.",
                    "Amasse com um amassador, ainda quentes.",
                    "Junte o frango desfiado e a aveia e misture até virar uma massa que dê "
                    "para modelar.",
                    "Pegue uma porção, abra na palma da mão, coloque o queijo no centro e "
                    "feche no formato de coxinha.",
                    "Leve à airfryer a 200 °C por cerca de 15 minutos, até dourar.",
                ],
                "callouts": [
                    {"label": "Para completar o prato",
                     "text": "Como petisco, funciona sozinha. Como refeição, acompanhe com salada."},
                    {"label": "Se você não tem airfryer",
                     "text": "Forno a 200 °C por cerca de 25 minutos, virando na metade do tempo."},
                ],
            },
            {
                "title": "Bolinha de queijo fit",
                "tagline": "Petisco crocante de três ingredientes, sem glúten, para a vontade de beliscar.",
                "time": "20 minutos",
                "yield_": "1 a 2 porções",
                "ingredient_groups": [
                    {
                        "label": "Ingredientes",
                        "lines": [
                            "2 ovos inteiros",
                            "2 colheres de sopa de goma de tapioca",
                            "40 g de queijo ralado, mussarela ou parmesão",
                            "Sal e orégano a gosto",
                        ],
                    },
                ],
                "steps": [
                    "Misture os ovos, a tapioca, o queijo e os temperos numa tigela até "
                    "ficar homogêneo.",
                    "Despeje numa frigideira untada e doure dos dois lados.",
                    "Espere esfriar e corte em quadradinhos.",
                    "Leve à airfryer a 200 °C por cerca de 8 minutos, até ficarem crocantes.",
                ],
                "callouts": [
                    {"label": "Nota de preparo",
                     "text": "Precisa esfriar antes de cortar, senão a massa desmancha na faca."},
                ],
            },
            {
                "title": "Pão de queijo fit",
                "tagline": "O clássico da tarde, feito numa tigela só e sem sujeira.",
                "time": "40 minutos",
                "yield_": "rende cerca de 12 unidades",
                "ingredient_groups": [
                    {
                        "label": "Ingredientes",
                        "lines": [
                            "Meia xícara de chá de polvilho doce",
                            "Meia xícara de chá de polvilho azedo",
                            "Meia xícara de chá de mussarela ralada",
                            "Meia xícara de chá de parmesão ralado",
                            "1 xícara de chá de creme de ricota, requeijão ou creme de leite",
                            "Sal a gosto",
                        ],
                    },
                ],
                "steps": [
                    "Numa vasilha, junte os dois polvilhos, os dois queijos, o creme de "
                    "ricota e o sal.",
                    "Misture até formar uma massa homogênea que não gruda nas mãos.",
                    "Modele bolinhas médias e disponha numa forma untada.",
                    "Asse em forno preaquecido a 200 °C por cerca de 30 minutos, até dourarem.",
                ],
                "callouts": [
                    {"label": "Nota de preparo",
                     "text": "Se a massa ficar mole demais para modelar, acrescente polvilho "
                     "doce aos poucos até dar o ponto."},
                ],
            },
            {
                "title": "Batata frita na airfryer",
                "tagline": "Crocante por fora, macia por dentro, com uma colher de azeite.",
                "time": "50 minutos, contando o molho",
                "yield_": "2 porções",
                "ingredient_groups": [
                    {
                        "label": "Ingredientes",
                        "lines": [
                            "4 batatas inglesas",
                            "1 colher de sopa de azeite",
                            "Sal e pimenta-do-reino a gosto",
                            "Páprica e alho em pó, se quiser",
                        ],
                    },
                ],
                "steps": [
                    "Lave bem as batatas. A casca pode ficar ou sair, como você preferir.",
                    "Corte em palitos finos — quanto mais finos, mais crocantes ficam.",
                    "Deixe de molho em água por 30 minutos. Esse passo é o que garante a "
                    "crocância.",
                    "Escorra e seque muito bem com um pano limpo.",
                    "Tempere regando o azeite e salpicando os temperos, misturando até "
                    "todos os palitos ficarem cobertos.",
                    "Leve à airfryer preaquecida a 200 °C por 15 a 20 minutos, sacudindo o "
                    "cesto a cada 5 minutos para dourar por igual.",
                ],
                "callouts": [
                    {"label": "Para completar o prato",
                     "text": "Sozinha é acompanhamento. Vire refeição completa com a receita "
                     "do Capítulo 2."},
                    {"label": "Nota de preparo",
                     "text": "Uma colher de bicarbonato na água do molho deixa ainda mais "
                     "crocante. E secar bem antes de temperar faz mais diferença que "
                     "qualquer tempero."},
                ],
            },
        ],
    },
    {
        "number": 2,
        "title": "Refeições completas",
        "recipes": [
            {
                "title": "Batata frita na airfryer com carne moída e cheddar",
                "tagline": "Refeição completa num prato só, para quando bate vontade de "
                "comida de lanchonete.",
                "time": "30 minutos",
                "yield_": "1 porção generosa",
                "ingredient_groups": [
                    {
                        "label": "Ingredientes",
                        "lines": [
                            "200 g de batata cortada em palitos",
                            "100 g de patinho moído",
                            "Sal, alho, cebola e pimenta-do-reino",
                            "Meio pote de iogurte natural",
                            "1 colher de sopa cheia de requeijão sabor cheddar",
                        ],
                    },
                ],
                "steps": [
                    "Tempere os palitos de batata com sal e páprica.",
                    "Leve à airfryer preaquecida a 180 °C por 20 a 25 minutos, sacudindo o "
                    "cesto na metade do tempo.",
                    "Enquanto assa, refogue cebola e alho picados numa frigideira "
                    "antiaderente.",
                    "Junte a carne moída, tempere e mexa até secar bem.",
                    "Misture o iogurte com o requeijão e aqueça por 20 a 30 segundos no "
                    "micro-ondas, só para ficar homogêneo.",
                    "Monte: batatas no prato, carne por cima, creme por último.",
                ],
                "callouts": [
                    {"label": "Para completar o prato",
                     "text": "Uma salada de folhas ao lado resolve a fibra que falta aqui."},
                    {"label": "Se você não tem airfryer",
                     "text": "Forno a 220 °C por cerca de 35 minutos, virando os palitos na "
                     "metade do tempo."},
                ],
            },
            {
                "title": "Hambúrguer fit com cebola caramelizada",
                "tagline": "Lanche de sexta feito em casa, com carne magra e cebola dourada "
                "devagar.",
                "time": "20 minutos",
                "yield_": "1 porção",
                "ingredient_groups": [
                    {
                        "label": "Ingredientes",
                        "lines": [
                            "100 g de patinho ou músculo moído",
                            "1 pão de hambúrguer",
                            "Cebola à vontade, em tiras ou cubinhos",
                            "1 fatia de queijo mussarela",
                            "Alface, tomate e picles a gosto",
                        ],
                    },
                ],
                "steps": [
                    "Modele o hambúrguer e grelhe na frigideira quente, do jeito que você "
                    "prefere o ponto.",
                    "Coloque a fatia de mussarela por cima no fim do cozimento e tampe por "
                    "alguns segundos, só para derreter.",
                    "Na mesma frigideira, refogue a cebola.",
                    "Vá acrescentando um pouco de água e um fio de azeite aos poucos, "
                    "mexendo, até a cebola dourar e ficar macia.",
                    "Sele o pão na frigideira quente por cerca de 15 segundos de cada lado.",
                    "Monte na ordem que preferir e coma sem pressa.",
                ],
                "callouts": [
                    {"label": "Para completar o prato",
                     "text": "O alface e o tomate já trazem fibra. Se quiser deixar mais "
                     "completo, uma salada ao lado ou a batata frita na airfryer do "
                     "Capítulo 1."},
                    {"label": "Nota de preparo",
                     "text": "Músculo moído costuma sair mais barato que patinho e fica "
                     "macio, com pouca gordura. Vale pedir ao açougueiro para moer na hora."},
                ],
            },
        ],
    },
    {
        "number": 3,
        "title": "Café da manhã e lanches",
        "recipes": [
            {
                "title": "Crepioca cremosa com cottage",
                "tagline": "Café da manhã salgado, pronto antes de o café ficar frio.",
                "time": "10 minutos",
                "yield_": "1 porção",
                "ingredient_groups": [
                    {
                        "label": "Ingredientes",
                        "lines": [
                            "2 ovos",
                            "2 colheres de sopa de goma de tapioca",
                            "2 colheres de sopa de queijo cottage",
                            "Sal e temperos a gosto",
                        ],
                    },
                ],
                "steps": [
                    "Bata os ovos numa tigela e misture a tapioca e o cottage até ficar "
                    "homogêneo.",
                    "Aqueça uma frigideira antiaderente untada em fogo baixo.",
                    "Despeje a mistura e deixe firmar.",
                    "Doure dos dois lados e dobre ao meio para servir.",
                ],
                "callouts": [
                    {"label": "Para completar o prato",
                     "text": "Tomate picado ou folhas dentro do recheio resolvem a fibra. "
                     "Fora da frigideira, uma fruta ao lado faz o mesmo."},
                ],
            },
            {
                "title": "Panqueca de banana com aveia",
                "tagline": "Doce no café da manhã, com proteína suficiente para segurar até "
                "o almoço.",
                "time": "15 minutos",
                "yield_": "1 porção",
                "ingredient_groups": [
                    {
                        "label": "Ingredientes",
                        "lines": [
                            "1 ovo e 2 claras",
                            "1 banana madura",
                            "2 colheres de sopa de aveia",
                            "1 dose de whey, se tiver",
                        ],
                    },
                ],
                "steps": [
                    "Amasse a banana num prato fundo até virar purê.",
                    "Junte o ovo, as claras, a aveia e o whey.",
                    "Misture com o garfo até a massa ficar uniforme.",
                    "Leve a frigideira antiaderente ao fogo baixo e cozinhe, virando para "
                    "dourar dos dois lados.",
                ],
                "callouts": [
                    {"label": "Se você não tem whey",
                     "text": "Dobre a aveia e acrescente uma colher de leite em pó. Fica "
                     "menos proteica, mas continua funcionando."},
                ],
            },
            {
                "title": "Iogurte batido com fruta",
                "tagline": "Cinco minutos, para os dias em que nem cozinhar dá tempo.",
                "time": "5 minutos",
                "yield_": "1 porção",
                "ingredient_groups": [
                    {
                        "label": "Ingredientes",
                        "lines": [
                            "200 ml de iogurte natural",
                            "Meia xícara de morangos picados",
                            "1 colher de sopa de aveia ou chia",
                            "1 dose de whey, se tiver",
                        ],
                    },
                ],
                "steps": [
                    "Bata o iogurte com a chia e o whey no liquidificador até ficar cremoso.",
                    "Coloque os morangos picados no copo ou na tigela.",
                    "Despeje o creme por cima.",
                ],
                "callouts": [
                    {"label": "Se você não tem whey",
                     "text": "Use iogurte grego natural no lugar do comum, que já vem com "
                     "mais proteína, e acrescente castanhas picadas por cima."},
                ],
            },
        ],
    },
    {
        "number": 4,
        "title": "Para a vontade de doce",
        "recipes": [
            {
                "title": "Brigadeiro fit de colher, sem leite condensado",
                "tagline": "Cinco minutos e três ingredientes, para a vontade de doce que "
                "aparece do nada.",
                "time": "5 minutos",
                "yield_": "1 porção",
                "ingredient_groups": [
                    {
                        "label": "Ingredientes",
                        "lines": [
                            "4 colheres de sopa de leite em pó",
                            "1 colher de sopa de cacau em pó",
                            "2 a 3 colheres de sopa de água morna ou leite",
                            "Adoçante culinário a gosto",
                            "1 colher de chá de óleo de coco ou manteiga, opcional",
                        ],
                    },
                ],
                "steps": [
                    "Misture o leite em pó, o cacau e o adoçante numa tigela pequena.",
                    "Acrescente a água morna aos poucos, mexendo sem parar, até virar uma "
                    "pasta lisa e brilhante.",
                    "Se quiser de colher na hora, já está pronto.",
                    "Para um ponto mais firme, leve ao micro-ondas por 15 a 30 segundos ou "
                    "à geladeira por 15 minutos.",
                ],
                "callouts": [
                    {"label": "Nota de preparo",
                     "text": "O líquido entra devagar, colher por colher. É mais fácil "
                     "acertar o ponto acrescentando do que corrigindo depois."},
                ],
            },
            {
                "title": "Brownie fit de iogurte",
                "tagline": "Sobremesa sem farinha que rende alguns dias.",
                "time": "30 minutos",
                "yield_": "4 porções",
                "ingredient_groups": [
                    {
                        "label": "Ingredientes",
                        "lines": [
                            "1 pote de iogurte natural, cerca de 160 g",
                            "2 ovos inteiros",
                            "6 colheres de sopa de cacau em pó",
                            "4 colheres de sopa de mel ou adoçante de sua preferência",
                            "Nozes picadas ou gotas de chocolate amargo, opcional",
                        ],
                    },
                ],
                "steps": [
                    "Bata os ovos com o iogurte numa tigela.",
                    "Junte o cacau e o mel e misture até a massa ficar lisa e homogênea.",
                    "Se quiser, incorpore as nozes ou as gotas de chocolate, ou guarde para "
                    "salpicar por cima.",
                    "Despeje numa forma pequena untada, ou forrada com papel-manteiga.",
                    "Asse em forno preaquecido a 180 °C por 20 a 25 minutos.",
                ],
                "callouts": [
                    {"label": "Para completar o prato",
                     "text": "Servido com uma fruta ao lado, vira sobremesa completa."},
                ],
            },
            {
                "title": "Brownie fit de caneca em dois minutos",
                "tagline": "Para quando a vontade bate à noite e você não vai ligar o forno.",
                "time": "4 minutos",
                "yield_": "1 porção",
                "ingredient_groups": [
                    {
                        "label": "Ingredientes",
                        "lines": [
                            "1 banana madura",
                            "1 ovo",
                            "2 colheres de sopa de cacau em pó",
                            "1 colher de chá rasa de fermento",
                        ],
                    },
                ],
                "steps": [
                    "Amasse bem a banana numa caneca ou potinho.",
                    "Junte o ovo, o cacau e o fermento e misture até ficar uniforme.",
                    "Leve ao micro-ondas por 2 minutos.",
                    "Espere um minuto antes de comer, porque sai muito quente.",
                ],
                "callouts": [
                    {"label": "Nota de preparo",
                     "text": "Quanto mais madura a banana, mais doce fica — e menos "
                     "adoçante você precisa."},
                ],
            },
            {
                "title": "Banoffee de pão na airfryer",
                "tagline": "Sobremesa de cinco minutos, para quando a vontade de doce "
                "aparece à noite.",
                "time": "8 minutos",
                "yield_": "1 porção",
                "ingredient_groups": [
                    {
                        "label": "Ingredientes",
                        "lines": [
                            "1 fatia de pão",
                            "1 colher de café de doce de leite com açúcar reduzido",
                            "Meia dose de whey da sua preferência",
                            "50 ml de leite",
                            "Meia banana",
                        ],
                    },
                ],
                "steps": [
                    "Misture o doce de leite, o whey e o leite até ficar homogêneo e sem "
                    "grumos.",
                    "Espalhe a mistura sobre a fatia de pão.",
                    "Distribua a banana picada por cima.",
                    "Leve à airfryer preaquecida até dourar, de olho nos últimos minutos.",
                ],
                "callouts": [
                    {"label": "Se você não tem whey",
                     "text": "Substitua por uma colher de leite em pó ou aumente um pouco o "
                     "doce de leite. A receita funciona igual, só fica com menos proteína."},
                    {"label": "Se você não tem airfryer",
                     "text": "Forno a 200 °C até a banana dourar, cerca de 10 minutos."},
                ],
            },
        ],
    },
]

TRADES = {
    "title": "Trocas que valem a pena",
    "intro": "Pequenas substituições que mudam o conjunto do prato sem tirar o sabor.",
    "lines": [
        {"lead": "Suco por fruta inteira.",
         "text": "A fruta traz fibra, enche mais e sacia por mais tempo. É a troca de maior "
         "impacto e menor esforço."},
        {"lead": "Fritura por airfryer ou forno.",
         "text": "Mesma crocância, sem o óleo da imersão."},
        {"lead": "Creme de leite por iogurte natural.",
         "text": "Funciona em molhos e cremes quentes, desde que você não deixe ferver."},
        {"lead": "Farinha de trigo por aveia ou polvilho.",
         "text": "Em massas de pastel, panqueca e bolinho, a troca passa despercebida."},
        {"lead": "Metade do arroz por legumes picados.",
         "text": "Enche o mesmo espaço no prato com mais fibra. Não precisa cortar o arroz "
         "— só dividir o lugar."},
    ],
    "not_worth_lead": "E uma troca que não vale a pena:",
    "not_worth_text": "substituir comida de verdade por barrinha ou shake “proteico” "
    "por praticidade. Resolve um dia corrido, não resolve a rotina, e sai bem mais caro que "
    "ovo, iogurte e feijão.",
}

DISCLAIMER = (
    "Material educativo. Não substitui avaliação médica ou nutricional. Receitas são "
    "sugestões de preparo; ajuste ingredientes conforme sua tolerância, suas restrições e "
    "a orientação do seu profissional de saúde."
)
