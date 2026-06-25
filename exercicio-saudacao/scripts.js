function carregar() {

var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
const titulo = document.getElementById('titulo')
var agora = new Date()
var hora = agora.getHours()
var min = String(agora.getMinutes()).padStart(2,'0') /*garante 2 digitos completando com 0 a esquerda*/
msg.innerHTML = `Agora são ${hora}:${min}, `

if (hora >= 0 && hora < 6){
    img.src = 'imagens/madrugada.jpeg'
    document.body.style.background = 'rgb(31, 24, 24)'
    msg.innerHTML += 'boa madrugada!'
} else if (hora < 12){
    img.src = 'imagens/manha.jpeg'
    document.body.style.background = '#8fc1dc'
    titulo.style.color = 'rgb(20, 36, 85)'
    msg.innerHTML += 'bom dia!'
} else if (hora <= 18){
    img.src = 'imagens/tarde.jpeg'
    document.body.style.background = '#a89276'
    titulo.style.color = 'rgb(16, 22, 42)'
    msg.innerHTML += 'boa tarde!'
} else {
    img.src = 'imagens/noite.jpeg'
    document.body.style.background = '#22223b'
    msg.innerHTML += 'boa noite!'
}


}