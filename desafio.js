
function calcular(){
    const doc = document.querySelector("#valor-hora")
    const doc2 = document.querySelector("#horas-projeto")
    const resposta = document.querySelector("#resposta")
    resposta.innerHTML += doc.value * doc2.value

}