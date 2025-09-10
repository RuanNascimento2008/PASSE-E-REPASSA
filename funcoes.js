let indiceAtual = 0;
let timeAtual = 1;
let pontuacao1 = 0;
let pontuacao2 = 0;
let tempoRestante = 10;
let timer;
let questoesSorteadas = [];

const coresTimes = { 1: "#00d1b2", 2: "#ff872c" };

// Elementos
const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const timeEl = document.getElementById("timeAtual");
const pontuacao1El = document.getElementById("pontuacao1");
const pontuacao2El = document.getElementById("pontuacao2");
const progressBar = document.getElementById("progressBar");
const cardEl = document.getElementById("game");
const btnProxima = document.getElementById("btnProxima");
const btnResetar = document.getElementById("btnResetar");
const telaInicial = document.getElementById("telaInicial");
const btnComecar = document.getElementById("btnComecar");
const telaEscolhaTime = document.getElementById("telaEscolhaTime");
const btnTime1 = document.getElementById("btnTime1");
const btnTime2 = document.getElementById("btnTime2");

// Embaralhar array
function embaralhar(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Iniciar jogo (embaralha perguntas e zera pontuação)
function iniciarJogo() {
    questoesSorteadas = embaralhar(questoes);
    indiceAtual = 0;
    pontuacao1 = 0;
    pontuacao2 = 0;
    atualizarPontuacao();
    mostrarTelaEscolhaTime();
}

// Mostrar tela de escolha de time
function mostrarTelaEscolhaTime() {
    cardEl.style.display = "none";
    telaEscolhaTime.style.display = "flex";
}

// Iniciar rodada com o time escolhido
function iniciarRodada(timeSelecionado) {
    timeAtual = timeSelecionado;
    telaEscolhaTime.style.display = "none";
    cardEl.style.display = "block";
    mostrarPergunta();
}

// Timer
function iniciarTimer() {
    clearInterval(timer);
    tempoRestante = 10;
    progressBar.style.width = "100%";
    progressBar.style.backgroundColor = coresTimes[timeAtual];
    timer = setInterval(() => {
        tempoRestante -= 0.1;
        if (tempoRestante <= 0) {
            clearInterval(timer);
            progressBar.style.width = "0%";
            trocarTime();
            indiceAtual++;
            mostrarTelaEscolhaTime();
        } else {
            progressBar.style.width = `${(tempoRestante / 10) * 100}%`;
        }
    }, 100);
}

// Mostrar pergunta
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
    cardEl.style.border = `5px solid ${coresTimes[timeAtual]}`;

    const opcoesEmbaralhadas = embaralhar(q.opcoes);
    opcoesEmbaralhadas.forEach(opcao => {
        const btn = document.createElement("button");
        btn.classList.add("button","is-link","option-button");
        btn.innerText = opcao;
        btn.style.borderColor = coresTimes[timeAtual];
        btn.onclick = () => verificarResposta(opcao, q.correta);
        opcoesEl.appendChild(btn);
    });

    iniciarTimer();
}

// Verificar resposta
function verificarResposta(resposta, correta) {
    clearInterval(timer);
    const botoes = document.querySelectorAll(".option-button");
    botoes.forEach(btn => btn.disabled = true);

    if (resposta === correta) {
        document.querySelector(`button.option-button:contains('${resposta}')`)?.classList.add("is-success");
        timeAtual === 1 ? pontuacao1++ : pontuacao2++;
    } else {
        document.querySelector(`button.option-button:contains('${resposta}')`)?.classList.add("is-danger");
        trocarTime();
    }

    atualizarPontuacao();
    indiceAtual++;
    setTimeout(() => mostrarTelaEscolhaTime(), 500);
}

// Trocar time
function trocarTime() { timeAtual = timeAtual === 1 ? 2 : 1; }

// Atualizar placar
function atualizarPontuacao() {
    pontuacao1El.innerText = pontuacao1;
    pontuacao2El.innerText = pontuacao2;
}

// Botões
btnProxima.addEventListener("click", () => {
    clearInterval(timer);
    mostrarTelaEscolhaTime();
});

btnResetar.addEventListener("click", () => iniciarJogo());
btnComecar.addEventListener("click", () => {
    telaInicial.style.display = "none";
    mostrarTelaEscolhaTime();
});
btnTime1.addEventListener("click", () => iniciarRodada(1));
btnTime2.addEventListener("click", () => iniciarRodada(2));

// Inicializa jogo
iniciarJogo();
