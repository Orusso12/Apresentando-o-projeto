# Entrega — criandoObjetos()

Este projeto foi revisado para a atividade **“Uma missão com estilo”**. A página mantém os exemplos de objetos JavaScript e as interações existentes, mas apresenta uma nova organização visual.

| Arquivo | Função |
| --- | --- |
| `index.html` | Estrutura, textos e botões da página. |
| `css/style.css` | Cores, tipografia, margens, alinhamentos, responsividade e efeitos visuais. |
| `js/app.js` | Objetos JavaScript e interações de execução. |

## O que foi melhorado

O projeto recebeu uma composição editorial clara, com fundo creme para leitura, áreas de código em azul-tinta e cor coral para ações importantes. Também foram aprimorados títulos, textos explicativos, espaçamentos, cartões de objetos e a apresentação do laboratório de testes.

As funções de executar o objeto `mensagem`, executar o objeto `contato` e marcar a mensagem como lida foram mantidas e testadas.

Para a atividade **“Função mostra pergunta”**, foi acrescentado o objeto `perguntas`, a função `mostraPergunta(pergunta)` e as funções de apoio `verificarResposta()` e `proximaPergunta()`. A pergunta, as alternativas e o feedback são criados dinamicamente no DOM com JavaScript.

A nova seção permite escolher uma alternativa, informa se a resposta está correta e alterna para outra pergunta pelo botão **“mostrar outra pergunta”**. O botão agora usa `addEventListener("click", trocarPerguntaAoClicar)`, com o evento `click` e a função responsável pela troca.

Para o novo desafio, foi criado um campo para o nome do usuário. Ao finalizar, o quiz apresenta uma saudação personalizada, a quantidade de acertos e uma mensagem de incentivo. A página também muda de tema: fica verde quando o desempenho é igual ou superior a 50% e recebe um tom de atenção quando o resultado fica abaixo desse valor.

Também foi adicionado o estado CSS `:active`: enquanto um botão é pressionado, ele recebe fundo vermelho, texto branco e uma pequena redução visual, mantendo o estilo de hover existente.

## Como abrir

Extraia o arquivo `.zip` e abra o arquivo `index.html` em um navegador. Para enviar à plataforma solicitada, envie a pasta extraída ou o arquivo compactado, conforme a orientação da professora.



## Atualização para publicação

Como pequena atualização do projeto, a cor do título do resultado final foi alterada para `#8d3b31`, criando um destaque visual diferente na versão publicada.
