// ============================================
// criandoObjetos() — lógica dos objetos
// ============================================

// Objeto 1: mensagem
const mensagem = {
  remetente: "Luiz",
  texto: "Oi! Como vai?",
  horaEnvio: "15:30",
  lida: false,
  exibirStatus() {
    return this.lida ? "Mensagem lida" : "Mensagem entregue";
  },
};

// Objeto 2: contato
const contato = {
  nome: "Fernanda Mascheti",
  online: true,
  apresentar() {
    return this.online ? `${this.nome} está online agora` : `${this.nome} ficou online hoje`;
  },
};

// Função: executar o objeto mensagem e mostrar no console da página
function rodarMensagem() {
  const painel = document.getElementById("console-mensagem");
  painel.classList.remove("hidden");
  painel.innerHTML = `
    <div class="console-header">Terminal — saída do console</div>
    <div class="out-line">Remetente: ${mensagem.remetente}</div>
    <div class="out-line">Texto: "${mensagem.texto}"</div>
    <div class="out-line">Hora: ${mensagem.horaEnvio}</div>
    <div class="out-line">${mensagem.exibirStatus()}</div>
  `;
}

// Função: executar o objeto contato e mostrar no console da página
function rodarContato() {
  const painel = document.getElementById("console-contato");
  painel.classList.remove("hidden");
  painel.innerHTML = `
    <div class="console-header">Terminal — saída do console</div>
    <div class="out-line">${contato.apresentar()}</div>
  `;
}

// Interação: alternar a propriedade lida da mensagem
function alternarLida() {
  mensagem.lida = !mensagem.lida;

  const btn = document.getElementById("btn-lida");
  const resultado = document.querySelector(".result-box code");

  if (mensagem.lida) {
    btn.textContent = "✓ Mensagem lida";
    btn.classList.add("done");
  } else {
    btn.textContent = "▶ Marcar como lida";
    btn.classList.remove("done");
  }

  // Atualiza a caixa de resultado (estilo de editor)
  resultado.innerHTML = `<span class="var">mensagem</span>.lida = <span class="bool">${mensagem.lida}</span> → <span class="ok">"${mensagem.exibirStatus()}"</span>`;
}


// Objeto 3: perguntas para a atividade "Função mostra pergunta"
const perguntas = [
  {
    texto: "Qual propriedade indica se uma mensagem já foi lida?",
    alternativas: ["remetente", "horaEnvio", "lida", "texto"],
    correta: "lida",
  },
  {
    texto: "Qual método apresenta o nome de um contato?",
    alternativas: ["exibirStatus()", "apresentar()", "mostrarTexto()", "enviar()"],
    correta: "apresentar()",
  },
];

let perguntaAtual = 0;
let acertos = 0;
let nomeUsuario = "Estudante";
let quizFinalizado = false;

// Função: criar a pergunta e suas alternativas diretamente no DOM
function mostraPergunta(pergunta) {
  const titulo = document.getElementById("texto-pergunta");
  const lista = document.getElementById("alternativas");
  const feedback = document.getElementById("feedback-pergunta");
  const contador = document.getElementById("contador-pergunta");

  if (!titulo || !lista || !feedback || !contador) return;

  titulo.textContent = pergunta.texto;
  contador.textContent = `${perguntaAtual + 1} / ${perguntas.length}`;
  feedback.textContent = "Escolha uma alternativa para testar a função.";
  feedback.className = "question-feedback";
  document.getElementById("resultado-final")?.classList.add("hidden");
  // Remove os botões da pergunta anterior antes de criar os novos.
  // Assim, a lista nunca acumula alternativas no DOM.
  lista.replaceChildren();

  const novosBotoes = pergunta.alternativas.map((alternativa, indice) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "alternative";
    botao.dataset.value = alternativa;
    botao.innerHTML = `<span>${String.fromCharCode(65 + indice)}</span>${alternativa}`;
    botao.addEventListener("click", () => verificarResposta(botao, pergunta.correta));
    return botao;
  });

  novosBotoes.forEach((botao) => lista.appendChild(botao));
}

function verificarResposta(botao, respostaCorreta) {
  const feedback = document.getElementById("feedback-pergunta");
  const botoes = document.querySelectorAll(".alternative");
  const acertou = botao.dataset.value === respostaCorreta;
  if (acertou) acertos += 1;
  atualizarTema();

  botoes.forEach((item) => {
    item.disabled = true;
    if (item.dataset.value === respostaCorreta) item.classList.add("correct");
  });

  if (acertou) {
    botao.classList.add("correct");
    feedback.textContent = "Acertou! A alternativa corresponde à propriedade ou método correto.";
    feedback.className = "question-feedback success";
  } else {
    botao.classList.add("wrong");
    feedback.textContent = `Quase! A resposta correta é ${respostaCorreta}.`;
    feedback.className = "question-feedback error";
  }
}

function atualizarTema() {
  document.body.classList.remove("theme-good", "theme-attention");
  const desempenho = acertos / perguntas.length;
  document.body.classList.add(desempenho >= 0.5 ? "theme-good" : "theme-attention");
}

function mostrarResultadoFinal() {
  quizFinalizado = true;
  const resultado = document.getElementById("resultado-final");
  const titulo = document.getElementById("resultado-titulo");
  const texto = document.getElementById("resultado-texto");
  const percentual = Math.round((acertos / perguntas.length) * 100);

  resultado?.classList.remove("hidden");
  if (titulo) titulo.textContent = `${nomeUsuario}, missão concluída!`;
  if (texto) texto.textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas (${percentual}%). ${percentual >= 50 ? "Continue explorando e criando." : "Revise os conceitos e tente novamente."}`;
  document.getElementById("btn-proxima-pergunta").textContent = "↻ reiniciar missão";
}

function proximaPergunta() {
  if (quizFinalizado) {
    perguntaAtual = 0;
    acertos = 0;
    quizFinalizado = false;
    document.body.classList.remove("theme-good", "theme-attention");
    document.getElementById("btn-proxima-pergunta").textContent = "↻ mostrar outra pergunta";
    mostraPergunta(perguntas[perguntaAtual]);
    return;
  }

  if (perguntaAtual < perguntas.length - 1) {
    perguntaAtual += 1;
    mostraPergunta(perguntas[perguntaAtual]);
  } else {
    mostrarResultadoFinal();
  }
}

function salvarNome() {
  const campo = document.getElementById("nome-usuario");
  const saudacao = document.getElementById("saudacao-usuario");
  nomeUsuario = campo.value.trim() || "Estudante";
  saudacao.textContent = `Boa missão, ${nomeUsuario}! Escolha uma alternativa para começar.`;
}

document.addEventListener("DOMContentLoaded", () => {
  mostraPergunta(perguntas[perguntaAtual]);
});


// Evento ouvinte: o botão troca a pergunta quando recebe um clique.
// addEventListener recebe o tipo de evento e a função que será executada.
const botaoProximaPergunta = document.getElementById("btn-proxima-pergunta");

function trocarPerguntaAoClicar(evento) {
  evento.currentTarget.classList.add("clicado");
  proximaPergunta();
}

botaoProximaPergunta.addEventListener("click", trocarPerguntaAoClicar);

document.getElementById("btn-salvar-nome").addEventListener("click", salvarNome);
