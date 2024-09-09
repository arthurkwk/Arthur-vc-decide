const caixaPrincipal = document.querySelector(".caixa-princpal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector("caixa-alterntivas");
const caixaResultado = document.querySelector("caixa-resultado");
const caixaResultado = document.querySelector("caixa-resultado");

constpergunta = [
  {
    enunciado: "Pergunta 1",
    alternativa [
  "Alternativa 1",
  "Alternativa 2"
   ]
  },
 {
    enunciado: "Pergunta 2",
    alternativa [
  "Alternativa 1",
  "Alternativa 2"
   ]
  },
 {
    enunciado: "Pergunta 3",
    alternativa [
  "Alternativa 1",
  "Alternativa 2"
   ]
  },
 {
    enunciado: "Pergunta 4",
    alternativa [
  "Alternativa 1",
  "Alternativa 2"
   ]
  },
 {
    enunciado: "Pergunta 5",
    alternativa [
  "Alternativa 1",
  "Alternativa 2"
   ]
  },

  let atual = 0;
  let perguntaAtual;

function mostraPergunt() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();

function mostraAlternativa() {
 for() {} 
}

   function mostraPergunta() {
    perguntaAtual = perguntas[atual];
   }