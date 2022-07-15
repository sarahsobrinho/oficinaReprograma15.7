
function calcularValorHora(){
const doc = document.querySelector("#ganho-mes")
const doc2 = document.querySelector("#horas-dia")
const resposta = document.querySelector("#resposta")
resposta.innerHTML = "R$" + doc.value / (doc2.value*22)
}
