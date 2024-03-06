const botoes = document.querySelectorAll(".botao");
const textos = document.querySelector(".aba-conteudo");
const contadores = document.querySelector(".contador");
const tempoObjetivo1 = new Date("2024-03-06T00:00:00");
let tempoAtual = new Date();
contadores[0].textContent = tempoObjetivo1 - tempoAtual;
for(let i=0;i <botoes.length;i++){ 
    botoes[i].onclick = function() {

         for(let j=0;j<botoes.length;j++) { 
            botoes[j].classList.remove("ativo");
         }
         botoes[i].classList.add("ativo");
         textos[i].classList.add("ativo");
         textos[j].classList.remove("ativo");
    }
}