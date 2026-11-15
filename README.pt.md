<p align="center"><img src="icons/icon-192.png" width="96" alt="Búho"></p>

<h1 align="center">Búho</h1>

<p align="center">
Registro do bebê: sono, mamadas e fraldas<br>
<b>Funciona sem internet</b>
</p>

<p align="center">
<a href="README.md">Español</a> ·
<a href="README.en.md">English</a> ·
<a href="README.zh-CN.md">简体中文</a> ·
<a href="README.hi.md">हिन्दी</a> ·
<b>Português</b> ·
<a href="README.ja.md">日本語</a> ·
<a href="README.de.md">Deutsch</a> ·
<a href="README.id.md">Bahasa Indonesia</a> ·
<a href="README.ru.md">Русский</a> ·
<a href="README.fr.md">Français</a> ·
<a href="README.it.md">Italiano</a>
</p>

<p align="center"><b>▶ App: <a href="https://outsidestructure787.github.io/buho/">outsidestructure787.github.io/buho</a></b> · versão 0.5.1</p>

---

## O que é o Búho
O Búho ("coruja" em espanhol) é um app para anotar a rotina do bebê com um toque: quando dorme e acorda, as mamadas (peito, mamadeira ou bomba), as fraldas e coisas como peso, temperatura ou remédios. Foi pensado para ser usado meio dormindo às 3 da manhã, com botões grandes, modo escuro e uma mão só.

Funciona sem sinal: tudo o que você anota fica salvo no celular na hora. Se duas pessoas forem usar, cada uma no seu celular, dá para conectar o app a uma planilha do Google, e os celulares se atualizam sozinhos quando houver sinal. Funciona no Android, no iPhone e no computador, não precisa de loja de apps e é grátis.

Os dados são seus. O Búho não tem servidores próprios: o que você anota fica no celular e, se ativar a sincronização, numa planilha da sua conta do Google.

O app está disponível em português, espanhol, inglês, francês, italiano, alemão e catalão. Ele segue o idioma do celular; você pode trocar em *Definições → Configuração → Idioma*.

## Do que você precisa
- **Para usar em um celular só:** só o celular. Dois minutos (passo 1).
- **Para usar em dois ou mais celulares:** uma conta do Google (Gmail serve) e um computador por uns 15 minutos, uma única vez (passo 2). Dá para fazer pelo celular, mas o editor de scripts do Google é desconfortável em tela pequena.
- **Para ver as consultas e receber avisos de remédio:** o mesmo do passo 2 e um Google Agenda. Mais 5 minutos (passo 3).

Não precisa saber programar. É copiar e colar um texto e apertar alguns botões, e cada um está explicado aqui.

## Passo 1. Instalar o app no celular
1. Abra este endereço no celular: **https://outsidestructure787.github.io/buho/** No Android, use o Chrome. No iPhone, use o Safari.
2. Adicione à tela inicial:
   - **Android (Chrome):** toque nos três pontinhos (⋮) no canto superior direito e escolha *Instalar app* ou *Adicionar à tela inicial*. Confirme.
   - **iPhone (Safari):** toque no botão de compartilhar (o quadrado com uma seta para cima, embaixo), role um pouco e escolha *Adicionar à Tela de Início*. Toque em *Adicionar*.
3. Feche o navegador e abra o Búho pelo ícone, o olho verde. A partir de agora, abra sempre por ali: ele roda em tela cheia, como um app normal, e funciona sem sinal.
4. Toque na engrenagem no canto superior direito (Definições) e preencha *Dados do bebé*: nome, data de nascimento e sexo. Em *Configuração*, escreva quem usa esse celular (por exemplo, "Mãe" ou "Pai"). Toque em *Guardar*.

Pronto. Se só uma pessoa vai usar, não precisa de mais nada.

> A interface em português foi escrita em português de Portugal (por exemplo, "Guardar" em vez de "Salvar"). Ela é perfeitamente compreensível no Brasil.

## Passo 2 (opcional). Compartilhar o registro entre celulares
O Búho guarda os dados numa planilha do Google criada por você. Cada celular manda para lá o que anota e traz o que os outros anotaram. Para a planilha e o app se entenderem, você cola na planilha um pequeno programa (um "script") que está neste repositório. Isso se faz uma vez só.

### 2.1. Crie a planilha
No computador, entre em [sheets.new](https://sheets.new) com sua conta do Google. Abre uma planilha em branco. No canto superior esquerdo aparece *Planilha sem título*: clique e dê um nome, por exemplo *Búho*.

Não precisa escrever nada nela. A aba onde ficam os registros é criada sozinha na primeira sincronização.

### 2.2. Cole o script
1. Em outra aba, abra [o script em texto puro](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Code.gs). Vai aparecer uma página cheia de código. Selecione tudo com `Ctrl + A` (`Cmd + A` no Mac) e copie com `Ctrl + C` (`Cmd + C`).
2. Volte para a planilha. No menu de cima, clique em *Extensões* e depois em *Apps Script*. O editor de scripts do Google abre numa aba nova.
3. O editor vem com um arquivo chamado `Código.gs` com algumas linhas de exemplo (`function myFunction() { }`). Clique dentro dele, selecione tudo (`Ctrl + A`) e apague até ficar vazio.
4. Cole o código copiado (`Ctrl + V`). A primeira linha começa com `/**` e a última é uma chave: `}`.
5. No canto superior esquerdo aparece *Projeto sem título*. Se quiser, troque por *Búho*.
6. Salve com o ícone do disquete ou com `Ctrl + S`.

Se *Apps Script* não aparecer no menu *Extensões*, provavelmente você está numa conta de trabalho ou de escola que bloqueia essa opção. Use uma conta pessoal do Gmail.

### 2.3. Crie sua chave
A chave é uma senha que só os seus celulares vão conhecer. Sem ela, ninguém mais consegue ler nem escrever na planilha. Ela fica num arquivo separado para não se perder quando você atualizar o script.

1. Na coluna da esquerda do editor, ao lado de *Arquivos*, clique em **+** e escolha *Script*. Digite `Config` e aperte Enter.
2. Apague o que vier no arquivo novo e cole o conteúdo de [`Config.gs`](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Config.gs), que são poucas linhas.
3. Procure a linha `const CLAVE = 'CAMBIA-ESTA-CLAVE';` e troque só o texto `CAMBIA-ESTA-CLAVE` por uma chave longa inventada por você. O mais fácil é juntar quatro palavras aleatórias: `girafa-segunda-torrada-nuvem`. Não apague as aspas nem o ponto e vírgula.
4. Salve (`Ctrl + S`). Na coluna da esquerda devem aparecer dois arquivos: `Código.gs` e `Config.gs`.

Anote a chave em algum lugar: você vai precisar dela no celular.

### 2.4. Publique o script
Publicar dá ao script um endereço na internet para onde os celulares mandam os dados.

1. No canto superior direito, clique no botão azul *Implantar* (Deploy) e escolha *Nova implantação*.
2. Ao lado de *Selecionar tipo* há uma engrenagem. Clique nela e escolha *App da Web*.
3. Preencha assim:
   - *Descrição:* o que quiser, por exemplo "Búho".
   - *Executar como:* **Eu** (aparece o seu e-mail).
   - *Quem pode acessar:* **Qualquer pessoa**. Isso permite que os celulares se conectem sem entrar no Google. A chave do passo anterior é o que impede outras pessoas de entrar.
4. Clique em *Implantar*. O Google vai pedir permissões:
   1. Clique em *Autorizar acesso* e escolha sua conta.
   2. Vai aparecer uma tela dizendo que o Google não verificou o app. É normal: você mesmo colou o script e ele não passou pela revisão do Google. Clique em *Avançado* e depois em *Acessar Búho (não seguro)*.
   3. Confira as permissões (ver e editar suas planilhas e suas agendas) e clique em *Permitir*. O script roda com a sua conta e só faz o que o Búho pede: guardar registros nesta planilha e, se você ativar, ler e criar eventos na agenda.
5. Aparece o *URL do app da Web*, um endereço longo que começa com `https://script.google.com/macros/s/` e termina em `/exec`. Clique em *Copiar* e guarde. Depois clique em *Concluído*.

Para levar o endereço e a chave para o celular, o mais prático é mandar para você mesmo por e-mail ou num chat.

### 2.5. Conecte o primeiro celular
1. No Búho, toque na engrenagem e abra *Configuração*.
2. Em *Sincronização com o Google Sheets*, cole o endereço no primeiro campo e digite a chave em *Chave de acesso*.
3. Toque em *Guardar e testar a ligação*. Se der tudo certo, aparece "Ligação correta" e, ao lado do título, "Sincronizado".

Volte para a planilha no computador: vai ter uma aba nova com o que você já tinha anotado.

### 2.6. Conecte os outros celulares
No celular que já funciona, vá em *Definições → Configuração* e toque em *Partilhar a configuração com outro telemóvel*. Mande o link para a outra pessoa por WhatsApp, Telegram ou e-mail. O link leva o endereço e a chave, então compartilhe só com quem vai anotar.

- **Se o outro celular for Android:** instale o Búho (passo 1) e abra o link. O app se conecta sozinho.
- **Se o outro celular for iPhone:** instale o Búho (passo 1), copie o link e cole em *Definições → Configuração*, no campo *…ou cole aqui um link de configuração*. Depois, *Guardar e testar a ligação*. No iPhone tem que ser assim porque o app instalado não compartilha dados com o Safari.

Cada pessoa deve escrever o próprio nome em *Quem usa este telemóvel?*. Assim, no registro aparece quem anotou cada coisa.

### Como fica a planilha
Cada registro é uma linha da aba `eventos`: data, hora de início e fim, duração (em sonos e mamadas no peito), tipo, detalhe, nota e quem anotou. Dá para filtrar, ordenar ou fazer gráficos como em qualquer planilha. As colunas cinzas do final são usadas pelo app: não mexa nelas. Se você apagar algo no app, a linha não some; fica marcada na coluna *borrado* (apagado).

## Passo 3 (opcional). Consultas da agenda e avisos de remédio
Com a sincronização funcionando, o Búho pode mostrar as próximas consultas (pediatra, obstetra, vacinas) de um Google Agenda, adicionar consultas novas e criar avisos com alarme para a próxima dose de um remédio.

1. **Escolha a agenda.** Pode ser a sua agenda principal ou uma compartilhada só para o bebê, que é o mais prático se vocês são dois. Para criar uma: no [Google Agenda](https://calendar.google.com), na coluna da esquerda, ao lado de *Outras agendas*, clique em **+** → *Criar nova agenda*. Compartilhe com a outra pessoa se os dois quiserem ver.
2. **Copie o ID** (não precisa se for a principal). No Google Agenda, passe o mouse sobre a agenda, clique nos três pontinhos → *Configurações e compartilhamento* e desça até *Integrar agenda*. O *ID da agenda* é um texto longo que termina em `@group.calendar.google.com`.
3. **Ative no Búho:** *Definições → Calendário*.
   - Marque *Mostrar as próximas consultas do Google Calendar*.
   - Em *Calendário*, deixe `primary` se for a sua agenda principal, ou cole o ID.
   - *Mostrar só eventos que contenham* serve para não ver toda a sua agenda pessoal. Por exemplo: `pediatra, vacina, consulta`. Vazio mostra todos os eventos.
   - Toque em *Guardar*. Na tela principal aparece o cartão *Próximas consultas*. Ao tocar, você vê a lista completa ou adiciona uma consulta.
4. **Avisos de remédio:** em *Definições → Medicação*, adicione o remédio (nome, dose, de quantas em quantas horas e, se quiser, por quantos dias), ative *Mostrar a medicação no ecrã principal* e marque *Criar um aviso no Google Calendar para a próxima toma*. Cada vez que você tocar em *Dada*, é criado na agenda um evento "💊 nome do remédio" no horário da próxima dose, com alarme. Para tocar, a agenda precisa ter as notificações ativadas no app do Google Agenda do celular.

O script lê a agenda com a conta do Google dona da planilha. Se você usar a agenda de outra pessoa, ela precisa estar compartilhada com essa conta. Se você montou a sincronização antes da versão 0.3.0, atualize o script primeiro (veja abaixo) e depois, no editor, escolha a função `autorizar` no menu de cima, clique em *Executar* e aceite as permissões da agenda. Por fim, publique uma versão nova.

## Se algo não funcionar
- **Aparece "A chave não coincide com a da folha".** A chave no celular não é exatamente a do `Config.gs`. Maiúsculas e minúsculas contam, e um espaço a mais também.
- **Aparece "Não foi possível ligar".** Não tem sinal, ou o endereço foi copiado errado. Ele tem que terminar em `/exec`.
- **Aparece "Atualize o script do Google para usar o calendário".** O app pede a agenda, mas o script publicado é uma versão antiga. Siga *Atualizar o script do Google*, abaixo.
- **Aparece "Falta autorizar el calendario"** (mensagem do script, em espanhol: falta autorizar a agenda). No editor do script, escolha `autorizar` no menu de funções, clique em *Executar* e aceite. Depois publique uma versão nova.
- **Aparece "No encuentro el calendario"** (também do script: agenda não encontrada). O ID foi copiado errado, ou a agenda não está compartilhada com a conta dona da planilha.
- **O app não atualiza.** Abra com internet e espere alguns segundos: ele recarrega sozinho. Se não, feche totalmente (tire dos apps recentes) e abra de novo. Também dá para tocar em *Procurar atualizações*, no fim das Definições, ao lado do número da versão.
- **No iPhone, o link de configuração abre no Safari e não no app.** É normal. Copie o link e cole em *Definições → Configuração* dentro do app instalado.

## Atualizar o script do Google
O app se atualiza sozinho, mas o script da planilha não. Só é preciso quando uma versão nova disser na [lista de mudanças](../../commits/main) ou quando o app avisar.

1. Na planilha: *Extensões → Apps Script*.
2. Abra `Código.gs`, apague todo o conteúdo e cole o novo [`Code.gs`](https://raw.githubusercontent.com/outsidestructure787/buho/main/apps-script/Code.gs). Salve. Não mexa no `Config.gs`: sua chave está lá.
3. *Implantar → Gerenciar implantações*. Clique no lápis, em *Versão* escolha *Nova versão* e clique em *Implantar*.

O endereço `/exec` continua o mesmo, então não precisa mudar nada nos celulares. Se a versão nova acrescentar colunas à planilha, elas aparecem sozinhas na próxima sincronização.

## Perguntas frequentes
**E se não tiver sinal?** Você anota normalmente. No topo aparece quantos registros faltam enviar, e eles são enviados sozinhos quando o sinal voltar.

**E se duas pessoas anotarem ao mesmo tempo sem internet?** Quando o sinal voltar, os registros das duas se juntam. Se as duas editarem o mesmo registro, fica a última edição.

**É seguro?** A planilha é privada e fica na sua conta do Google. O script só responde se receber a chave certa. Quem tiver o link de configuração (ou o endereço e a chave) pode ler e escrever no registro e ver os eventos da agenda que passarem pelo filtro, então compartilhe só com quem deve anotar.

**Onde ficam os dados?** No celular e, se você ativar a sincronização, na sua planilha do Google. Se usar o Búho sem sincronizar e apagar os dados do navegador ou trocar de celular, eles se perdem. Nesse caso, exporte o CSV de vez em quando em *Definições → Exportar CSV*.

**Custa alguma coisa?** Não. GitHub Pages, Google Sheets, Apps Script e Google Agenda são gratuitos para esse uso.

## Usar sua própria cópia
Se preferir ter sua própria versão do app, faça um *fork* deste repositório e ative *Settings → Pages → Deploy from a branch → main / (root)*. São arquivos estáticos, sem compilação nem dependências: `index.html`, `i18n.js`, `sw.js`, `manifest.webmanifest` e `icons/`. Para adicionar um idioma ao app, copie um bloco do `i18n.js`.

## Sobre o projeto
Vou ser pai em breve e procurava um app para anotar mamadas, sonos e fraldas que se ajustasse ao que precisamos em casa: que funcione sem sinal, que nós dois possamos usar em celulares diferentes e que os dados sejam nossos. Testei vários e nenhum servia, então decidi fazer um sob medida.

Não sou programador. Fiz o Búho com a ajuda de uma IA ([Claude](https://claude.ai)), por isso peço desculpas de antemão aos desenvolvedores profissionais por me meter no território de vocês. Se virem algo malfeito ou que dá para melhorar, abram uma [issue](../../issues). Vou agradecer, e com certeza vou aprender alguma coisa.

---

<p align="center"><sub>Licença MIT · veja <a href="LICENSE">LICENSE</a></sub></p>
