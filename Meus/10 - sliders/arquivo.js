var radio = document.querySelector('.manual-btn') /* para mudar de imagem de forma manual */
var cont = 1 //contador comeca no numero 1


document.getElementById('radio1').checked = true /* a primeira imagem sera sempre a primeira imagem a ser carregada */

setInterval(() => { //intervalo de tempo entre as imagens
    proximaImg()
}, 5000)

function proximaImg(){ //funçao que faz com que altere de imagem
    cont++

    if(cont > 3){ //se o cont for maior que 3 entao ele volta a ser 1
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true //muda a cor do fundo das bolinhas dinamicamente
}
