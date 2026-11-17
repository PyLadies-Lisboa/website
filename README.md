# PyLadies Lisboa — site

Código do site [lisboa.pyladies.com](https://lisboa.pyladies.com): HTML e CSS simples, sem
passo de compilação, no formato do
[modelo oficial da PyLadies](https://github.com/pyladies/netlify-website-template).

## Ver localmente

```bash
python3 -m http.server 8000
```

E abre <http://localhost:8000>.

## Estrutura

```
index.html              a página (tudo em pt-PT)
style.css               estilos; cores e fontes do kit de marca
images/                 logótipo, mascote, skyline, azulejos, favicons, og-image
fonts/                  Libre Baskerville, DM Sans, JetBrains Mono (SIL OFL)
favicon.ico
scripts/sync-brand.sh   volta a copiar os ficheiros do kit de marca
```

## Tarefas comuns

- **Anunciar um encontro:** em `index.html`, na secção `#encontros`, há um bloco
  `<article class="event">` comentado. Descomenta-o, preenche-o e apaga o parágrafo
  "Estamos a preparar o primeiro encontro".
- **Atualizar a marca:** se o kit de identidade visual mudar, corre
  `scripts/sync-brand.sh ../pyladies-lisboa-design`.
- **Contactos:** estão no rodapé (`#contactos`).
- **Equipa:** cada pessoa é um `<li class="person">` na secção `#equipa`. A foto vai para
  `images/equipa/<nome-apelido>.jpg` (cerca de 640 px de largura) e o enquadramento
  ajusta-se com `style="object-position: x% y%"`. Os textos vêm da campanha "Quem coordena".

## Publicação

O repositório é [PyLadies-Lisboa/website](https://github.com/PyLadies-Lisboa/website) e o
site é servido pelo **GitHub Pages** a partir do ramo `main` (Settings → Pages → *Deploy from
a branch* → `main` / raiz).

O DNS de `lisboa.pyladies.com` é da PyLadies global: a equipa *Tech + Infra* tem de criar um
registo `CNAME lisboa → pyladies-lisboa.github.io` (ver `PEDIDO-REPOSITORIO.md`). Até lá, o site
fica em <https://pyladies-lisboa.github.io/website/>.

**Só depois** de o DNS estar criado: Settings → Pages → *Custom domain* → `lisboa.pyladies.com`
(o GitHub cria o ficheiro `CNAME`) e ativar *Enforce HTTPS*. Se o `CNAME` for adicionado antes,
o endereço github.io passa a redirecionar para um domínio que ainda não existe.

## Fotos e dados pessoais

As fotos e biografias em `images/equipa/` e na secção `#equipa` só estão aqui com o
consentimento de cada pessoa. Quem sair da equipa ou pedir para ser retirada deve ser
removida do HTML **e** da pasta `images/equipa/`.

## Licença

Código: MIT. Fontes: SIL Open Font License (ver `fonts/*/OFL.txt`).
Logótipo e mascote: © PyLadies Lisboa.
