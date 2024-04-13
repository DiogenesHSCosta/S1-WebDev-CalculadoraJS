let num1 = parseInt(document.getElementById("numero1").value)
let num2 = parseInt(document.getElementById("numero2").value)
let result = document.getElementById('resultado')


document.getElementById("btnSoma").addEventListener("click", () =>{
    let num1 = parseInt(document.getElementById("numero1").value)
    let num2 = parseInt(document.getElementById("numero2").value)

    let valor = num1 + num2;
    result.innerText = valor
})

document.getElementById("btnSubtracao").addEventListener("click", () => {
    let num1 = parseInt(document.getElementById("numero1").value)
    let num2 = parseInt(document.getElementById("numero2").value)

    let valor = num1 - num2;
    result.innerHTML = valor
})
document.getElementById("btnMultiplicacao").addEventListener("click", () =>{
    let num1 = parseInt(document.getElementById("numero1").value)
    let num2 = parseInt(document.getElementById("numero2").value)

    let valor = num1 * num2;
    result.innerHTML = valor
})
document.getElementById("btnDivisao").addEventListener("click", () =>{
    let num1 = parseInt(document.getElementById("numero1").value)
    let num2 = parseInt(document.getElementById("numero2").value)

    let valor = num1 / num2;
    result.innerHTML = valor
})
