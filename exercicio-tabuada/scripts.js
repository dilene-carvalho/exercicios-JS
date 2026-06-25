function gerar(){
    let num = document.getElementById('txtnum')
    let res = document.getElementById('res')

    if (num.value.length == 0){
        alert('[ERRO] Informe um número!')
    } else{
        res.innerHTML = '' //limpa o resultado anterior em caso de um novo clique no botão

        let n = Number(num.value)
        let c = 0
        while (c <= 10){
            let item = document.createElement('p')
            item.innerHTML = `${n} x ${c} = ${n*c}`
            res.appendChild(item)
            c++
        }
        item.style.text


    }


}