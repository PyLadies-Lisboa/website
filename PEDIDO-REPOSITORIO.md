# Pedido à PyLadies global (domínio lisboa.pyladies.com)

Texto para abrir um *issue* em <https://github.com/pyladies/chapter-websites/issues/new/choose>.
Está em inglês porque é dirigido à equipa global (Tech + Infra).

O site vive no nosso repositório `PyLadies-Lisboa/website` (GitHub Pages), por isso não
precisamos que criem um repositório: só o DNS e, opcionalmente, o submódulo em
`chapter-websites`.

Antes de abrir o issue:

1. Registar o capítulo no [Chapter Directory](https://docs.google.com/forms/d/e/1FAIpQLSf43R4FbiIE4z76k5z42UU4HKMKJnTr2ldh4KecE4WRTJZLUw/viewform).
2. ~~Completar os handles do GitHub~~ (feito).

---

**Title:** Custom domain for PyLadies Lisboa: lisboa.pyladies.com

Hi Tech + Infra team! 👋

We're the organizers of **PyLadies Lisboa** (Lisbon, Portugal) and we'd like to request the
`lisboa.pyladies.com` subdomain for our chapter website.

- **Chapter name:** PyLadies Lisboa
- **Registered in the chapter directory:** yes
- **Organizers' GitHub handles:** @084intheImpala (Ana Sofia Sousa), @amsptm-coder (Ana Machado), @Artemis-star-5 (Diana Geirinhas), @TCCutelo (Teresa Cutelo)
- **Chapter email:** lisboa@pyladies.com
- **Requested domain:** `lisboa.pyladies.com`
- **Website repository:** https://github.com/PyLadies-Lisboa/website
- **Current URL:** https://pyladies-lisboa.github.io/website/

The site is a static HTML/CSS site (based on the `netlify-website-template` layout, no build
step) hosted on GitHub Pages from our chapter's GitHub organization. We only need a DNS record,
and we'll set the custom domain in GitHub Pages as soon as it exists:

```
lisboa.pyladies.com.  CNAME  pyladies-lisboa.github.io.
```

We're also happy to open a PR adding the repo as a submodule in `chapter-websites` if you'd
like it listed there.

Thank you!
