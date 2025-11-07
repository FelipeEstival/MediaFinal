

const nota1 = document.getElementById('nota_usuario1')
const nota2 = document.getElementById('nota_usuario2')

function calcular(){

    media = (Number(nota1.value) + Number((nota2.value) * 2)) / 3

    const p = document.getElementById('resultado')
    p.textContent = `A sua média final é ${media.toFixed(1)}`
}