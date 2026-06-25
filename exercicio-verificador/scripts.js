function verificar() {
    var data = new Date()
    var ano = data.getFullYear() /*full pega os 4 digitos do ano*/
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (formAno.value.length ==  0 || formAno.value.length != 4 || Number(formAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img') /*cria um elemento imagem*/
        img.setAttribute('id', 'foto') /*da a esse elemento o id="foto" */
        
        if (formSex[0].checked) {
            genero = 'masculino'
            if (idade >= 0 && idade < 12) {
                // crianca
                img.setAttribute('src', 'imagens/menino.jpeg')
            } else if (idade < 30) {
                // jovem
                img.setAttribute('src', 'imagens/rapaz.jpeg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/homem.jpeg')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/senhor.jpeg')
            }
        } else {
            genero = 'feminino'
            if (idade >= 0 && idade < 12) {
                // crianca
                img.setAttribute('src', 'imagens/menina.jpeg')
            } else if (idade < 25) {
                // jovem
                img.setAttribute('src', 'imagens/moca.jpeg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/mulher.jpeg')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/senhora.jpeg')
            }
        }
        res.innerHTML = `Detectamos que você é do sexo ${genero} e tem ${idade} anos.`
        res.appendChild(img) /*adiciona um elemento abaixo*/


    }
}