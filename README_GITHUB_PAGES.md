# PC-12 NG Flightdeck Study — GitHub Pages / PWA

Este pacote contém o app de estudo, os bancos de questões, as traduções, o checklist e os arquivos para instalação como PWA e uso offline.

## Publicar no GitHub Pages

1. Extraia o ZIP no computador.
2. Copie o conteúdo extraído para a pasta raiz do repositório que publica o site. Preserve os caminhos: `index.html`, `questions/` e `icons/` devem permanecer nessas posições.
3. Envie as alterações para a mesma branch e pasta já usadas pelo GitHub Pages. Mantenha a configuração de publicação existente.
4. Aguarde o GitHub Pages atualizar o site.

O app usa caminhos relativos e funciona em um endereço de projeto no formato `https://usuario.github.io/nome-do-repositorio/`. O pacote não inclui PDFs, arquivos de trabalho nem conteúdo da pasta `sources/`.

Se o repositório já tiver `images/pc12.png`, mantenha essa pasta ao copiar o pacote: a página usa essa imagem no cabeçalho.

## Instalar e preparar para uso offline no iPhone

1. Abra o site publicado no Safari enquanto estiver conectado à internet.
2. Aguarde o rodapé indicar que os arquivos de estudo foram salvos no aparelho.
3. No Safari, toque em **Compartilhar → Adicionar à Tela de Início**.
4. Ative **Abrir como App da Web**, se a opção aparecer, e toque em **Adicionar**.
5. Abra o ícone Flightdeck Study pela tela inicial. As perguntas, traduções e checklist ficam guardados pela PWA para uso offline.

## Publicar atualizações futuras

Quando alterar perguntas, traduções, interface ou outros arquivos guardados offline, atualize a versão `pc12-flightdeck-v1` no início de `service-worker.js` (por exemplo, para `pc12-flightdeck-v2`) antes de publicar. Isso faz os aparelhos instalados substituírem o cache anterior.

O app ainda não salva respostas ou progresso da sessão depois que é fechado ou recarregado.
