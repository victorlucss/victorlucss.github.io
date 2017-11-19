/*
    Author: Victor Lucas
    Author website: victorlucss.com
*/
let paginaAtual = document.getElementsByClassName('pagina-atual')[0];
let carregando = `<div class="fa fa-circle-o-notch fa-spin fa-3x"></div>`;

function carregarPagina(pagina){
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 1){
            //Abriu o arquivo agr
        }else if(xhr.readyState === 2){
            //Recebeu os headers
            if(xhr.status != 200){
                carregarPagina('404');
                //É importante a criação de um arquivo 404.html para evitar um loop infinito!
            }
        }else if(xhr.readyState === 3){
            //fazendo download do arquivao
            paginaAtual.innerHTML = carregando;
        }else if(xhr.readyState === 4){
            //Recebeu o arquivo
            paginaAtual.innerHTML = xhr.responseText;
        }
        
    };
    xhr.open('GET', `assets/views/${pagina}.html`);
    xhr.send();
}

window.onload = () => {
    let goPagina = document.getElementsByClassName('go-pagina');

    carregarPagina('sobre');

    for (i = 0; i < goPagina.length; i++) {
        goPagina[i].addEventListener("click", e => {

        for (i = 0; i < goPagina.length; i++) {
            if(goPagina[i].classList.contains('active'))
                goPagina[i].classList.remove('active');
        }


        e.target.classList.add('active')

       carregarPagina(e.target.dataset.page);

        });
    }

};