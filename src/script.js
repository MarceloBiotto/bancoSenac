let todasContas = new Array();

document.addEventListener('DOMContentLoaded', function() {

    let menuPrincipal = document.querySelector('.menuPrincipal');

    menuPrincipal.addEventListener('click', (e)=>{
        e.preventDefault();
        
        window.location.href = "./menuPrincipal.html";
    })


});

export { todasContas }