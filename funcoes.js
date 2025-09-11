let questoesSorteadas = [];
let indiceAtual = 0;
let timeAtual = null;
let pontuacao1 = 0;
let pontuacao2 = 0;

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const timeEl = document.getElementById("timeAtual");
const pontuacao1El = document.getElementById("pontuacao1");
const pontuacao2El = document.getElementById("pontuacao2");

const btnIniciar = document.getElementById("btnIniciar");
const btnResetar = document.getElementById("btnResetar");
const btnTime1 = document.getElementById("btnTime1");
const btnTime2 = document.getElementById("btnTime2");

// Função embaralhar
function embaralhar(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function mostrarPergunta() {
  if (indiceAtual >= questoesSorteadas.length) {
    perguntaEl.innerText = "Fim do jogo!";
    opcoesEl.innerHTML = "";
    timeEl.innerText = `Placar final - Time 1: ${pontuacao1} | Time 2: ${pontuacao2}`;
    return;
  }

  const q = questoesSorteadas[indiceAtual];
  perguntaEl.innerText = q.pergunta;
  opcoesEl.innerHTML = "";

  // embaralha alternativas
  const opcoesEmbaralhadas = embaralhar(q.opcoes);

  opcoesEmbaralhadas.forEach(opcao => {
    const btn = document.createElement("button");
    btn.classList.add("button", "is-link", "option-button");
    btn.innerText = opcao;
    btn.onclick = () => verificarResposta(opcao);
    opcoesEl.appendChild(btn);
  });

  if (timeAtual) {
    timeEl.innerText = `🎯 Vez do Time ${timeAtual}`;
  } else {
    timeEl.innerText = `Escolha qual time vai responder`;
  }
}

function verificarResposta(resposta) {
  if (!timeAtual) {
    alert("Escolha primeiro o time que vai responder!");
    return;
  }

  const q = questoesSorteadas[indiceAtual];

  if (resposta === q.correta) {
    if (timeAtual === 1) pontuacao1++;
    else pontuacao2++;
  }

  atualizarPontuacao();
  indiceAtual++;
  timeAtual = null;
  mostrarPergunta();
}

function atualizarPontuacao() {
  pontuacao1El.innerText = pontuacao1;
  pontuacao2El.innerText = pontuacao2;
}

btnIniciar.addEventListener("click", () => {
  questoesSorteadas = embaralhar(questoes);
  indiceAtual = 0;
  pontuacao1 = 0;
  pontuacao2 = 0;
  timeAtual = null;
  atualizarPontuacao();
  mostrarPergunta();
});

btnResetar.addEventListener("click", () => {
  indiceAtual = 0;
  pontuacao1 = 0;
  pontuacao2 = 0;
  timeAtual = null;
  atualizarPontuacao();
  perguntaEl.innerText = "Clique em 'Iniciar' para começar!";
  opcoesEl.innerHTML = "";
  timeEl.innerText = "";
});

btnTime1.addEventListener("click", () => {
  timeAtual = 1;
  timeEl.innerText = `🎯 Vez do Time 1`;
});

btnTime2.addEventListener("click", () => {
  timeAtual = 2;
  timeEl.innerText = `🎯 Vez do Time 2`;
});
