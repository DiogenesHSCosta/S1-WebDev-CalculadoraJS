let result = document.getElementById('resultado')

function getDate(){
    num1 = parseFloat(document.getElementById("numero1").value)
    num2 = parseFloat(document.getElementById("numero2").value)
}

document.getElementById("btnSoma").addEventListener("click", () =>{
    getDate()
    let valor = num1 + num2;
    result.innerText = valor
})

document.getElementById("btnSubtracao").addEventListener("click", () => {
    getDate()
    let valor = num1 - num2;
    result.innerHTML = valor
})

document.getElementById("btnMultiplicacao").addEventListener("click", () =>{
    getDate()
    let valor = num1 * num2;
    result.innerHTML = valor
})

document.getElementById("btnDivisao").addEventListener("click", () =>{
    getDate()
    let valor = num1 / num2;
    result.innerHTML = valor
})
