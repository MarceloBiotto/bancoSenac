document.addEventListener('DOMContentLoaded', function() {

    let menuPrincipal = document.querySelector('.menuPrincipal');
    let sairBtn = document.querySelector('#sair');
    let acessarContaBtn = document.querySelector('#acessarConta');

    menuPrincipal.addEventListener('click', (e)=>{
        e.preventDefault();
        window.location.href = "./menuPrincipal.html";
    })

    sairBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        window.location.href = "./index.html";
        
    });

    acessarContaBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        console.log('tentaram me acessar!')
    })

});
