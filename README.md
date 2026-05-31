# ReconheSER 💙

> *"O sistema se adapta ao indivíduo — e não o contrário."*

**ReconheSER** é um protótipo de aplicativo mobile voltado a indivíduos neurodivergentes e pessoas com dificuldades cognitivas, sensoriais e sociais. Seu objetivo é promover **acolhimento, inclusão, acessibilidade e autoconhecimento** através da tecnologia — sem qualquer caráter diagnóstico ou clínico.

---

## Identidade do projeto

| Atributo | Descrição |
|---|---|
| **Público** | Pessoas neurodivergentes, com dificuldades cognitivas, sensoriais ou sociais |
| **Objetivo** | Acolhimento, autoconhecimento e adaptação individual |
| **Caráter** | **Não clínico**, não diagnóstico |
| **Tecnologia** | Python (Flask) + HTML + CSS + JavaScript |
| **Estilo** | Mobile-first, minimalista, emocionalmente inteligente |

---

## Telas do protótipo

| Rota | Tela | Descrição |
|---|---|---|
| `/` | Onboarding | Boas-vindas em slides, perguntas de preferência |
| `/adaptacao` | Adaptação | Brilho, fonte, contraste, modo sensorial, áudio |
| `/home` | Dashboard | Frase do dia, humor, acesso rápido, sugestões |
| `/autorreflexao` | Autorreflexão | Diário emocional, perguntas guiadas, exercícios |
| `/organizacao` | Organização | Linha do tempo da rotina, lembretes gentis |
| `/conteudos` | Conteúdos | Cards adaptativos sobre autoestima e inclusão |

---

## Paleta de cores

```css

--blue-50:  #f0f6ff   /* fundo suave /
--blue-200: #b8d9f8   / bordas /
--blue-400: #5ca3e6   / destaques /
--blue-500: #3a87d4   / primária /
--blue-700: #1a4f8a   / profundo */
---

## Tipografia

- **Títulos:** [Fraunces](https://fonts.google.com/specimen/Fraunces) — elegante, humana, com personalidade
- **Corpo:** [DM Sans](https://fonts.google.com/specimen/DM+Sans) — moderna, legível, acessível

---

## Funcionalidades implementadas

- ✅ Onboarding em 4 slides com coleta de preferências
- ✅ Adaptação em tempo real (brilho, fonte, contraste via CSS variables)
- ✅ Modo sensorial reduzido (desativa animações)
- ✅ Dashboard com verificação de humor e frase motivacional via API
- ✅ Diário emocional com contador de palavras
- ✅ Exercício de respiração guiada (técnica 4-7-8) com animação CSS
- ✅ Linha do tempo de rotina com timeline interativa
- ✅ Cards de conteúdo com filtros por categoria
- ✅ Navegação bottom nav em todas as telas internas
- ✅ Botões com área de toque acessível (mínimo 44px)
- ✅ API `/api/get-phrase` para frases acolhedoras

---

## Estrutura do projeto
reconheser/
├── app.py                    # Back-end Flask
├── requirements.txt
├── .gitignore
├── static/
│   ├── css/
│   │   └── style.css         # Sistema de design completo
│   └── js/
│       └── adaptacao.js      # Controles adaptativos em tempo real
└── templates/
├── onboarding.html        # Tela 1 — Boas-vindas
├── adaptacao.html         # Tela 2 — Ajustes de experiência
├── home.html              # Tela 3 — Dashboard principal
├── autorreflexao.html     # Tela 4 — Diário emocional
├── organizacao.html       # Tela 5 — Rotina e lembretes
└── conteudos.html         # Tela 6 — Conteúdos adaptativos
