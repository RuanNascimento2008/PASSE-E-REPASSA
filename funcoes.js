let indiceAtual = 0;
let timeAtual = 1; // 1 ou 2
let pontuacao1 = 0;
let pontuacao2 = 0;
let tempoRestante = 10;
let timer;

let questoesSorteadas = [];

// Cores dos times
const coresTimes = {
  1: "#00d1b2", // verde
  2: "#ff872c"  // laranja
};

// Embaralhar perguntas
function embaralhar(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Inicializa jogo
function iniciarJogo() {
  questoesSorteadas = embaralhar(questoes);
  indiceAtual = 0;
  timeAtual = 1;
  pontuacao1 = 0;
  pontuacao2 = 0;
  atualizarPontuacao();
  mostrarPergunta();
}

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const timeEl = document.getElementById("timeAtual");
const pontuacao1El = document.getElementById("pontuacao1");
const pontuacao2El = document.getElementById("pontuacao2");
const progressBar = document.getElementById("progressBar");
const cardEl = document.getElementById("game");
const btnProxima = document.getElementById("btnProxima");
const btnResetar = document.getElementById("btnResetar");

function iniciarTimer() {
  clearInterval(timer);
  tempoRestante = 10;
  progressBar.style.width = "100%";
  progressBar.style.backgroundColor = coresTimes[timeAtual]; // barra muda conforme o time
  timer = setInterval(() => {
    tempoRestante -= 0.1;
    if (tempoRestante <= 0) {
      clearInterval(timer);
      progressBar.style.width = "0%";
      trocarTime();
      indiceAtual++;
      mostrarPergunta();
    } else {
      progressBar.style.width = `${(tempoRestante / 10) * 100}%`;
    }
  }, 100);
}

function mostrarPergunta() {
  if (indiceAtual >= questoesSorteadas.length) {
    perguntaEl.innerText = "Fim do jogo!";
    opcoesEl.innerHTML = "";
    timeEl.innerText = "";
    cardEl.style.border = "none";
    alert(`Jogo encerrado!\nTime 1: ${pontuacao1} pontos\nTime 2: ${pontuacao2} pontos`);
    return;
  }

  const q = questoesSorteadas[indiceAtual];
  perguntaEl.innerText = q.pergunta;
  opcoesEl.innerHTML = "";
  timeEl.innerText = `Time ${timeAtual} joga agora`;

  // Muda cor do card conforme o time
  cardEl.style.border = `5px solid ${coresTimes[timeAtual]}`;

  const opcoesEmbaralhadas = embaralhar(q.opcoes);

  opcoesEmbaralhadas.forEach(opcao => {
    const btn = document.createElement("button");
    btn.classList.add("button", "is-link", "option-button");
    btn.innerText = opcao;
    btn.style.borderColor = coresTimes[timeAtual]; // leve destaque da cor do time
    btn.setAttribute("aria-label", `Opção: ${opcao}`);
    btn.onclick = () => verificarResposta(opcao, btn);
    opcoesEl.appendChild(btn);
  });

  iniciarTimer();
}

function verificarResposta(resposta, btn) {
  clearInterval(timer);
  const q = questoesSorteadas[indiceAtual];

  if (resposta === q.correta) {
    btn.classList.add("is-success");
    if (timeAtual === 1) pontuacao1++;
    else pontuacao2++;
  } else {
    btn.classList.add("is-danger");
    trocarTime();
  }

  atualizarPontuacao();
  indiceAtual++;
  setTimeout(() => mostrarPergunta(), 300);
}

function trocarTime() {
  timeAtual = timeAtual === 1 ? 2 : 1;
}

function atualizarPontuacao() {
  pontuacao1El.innerText = pontuacao1;
  pontuacao2El.innerText = pontuacao2;
}

// Botão Próxima Pergunta
btnProxima.addEventListener("click", () => {
  clearInterval(timer);
  indiceAtual++;
  mostrarPergunta();
});

// Botão Resetar Jogo
btnResetar.addEventListener("click", () => {
  clearInterval(timer);
  iniciarJogo();
});

// Inicializa o jogo
iniciarJogo();
