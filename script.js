let result = document.getElementById('resultado')

function pegarDados(){
    num1 = parseInt(document.getElementById("numero1").value)
    num2 = parseInt(document.getElementById("numero2").value)
}

document.getElementById("btnSoma").addEventListener("click", () =>{
    pegarDados()
    let valor = num1 + num2;
    result.innerText = valor
})

document.getElementById("btnSubtracao").addEventListener("click", () => {
    pegarDados()
    let valor = num1 - num2;
    result.innerHTML = valor
})

document.getElementById("btnMultiplicacao").addEventListener("click", () =>{
    pegarDados()
    let valor = num1 * num2;
    result.innerHTML = valor
})

document.getElementById("btnDivisao").addEventListener("click", () =>{
    pegarDados()
    let valor = num1 / num2;
    result.innerHTML = valor
})
