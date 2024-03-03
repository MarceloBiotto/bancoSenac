document.addEventListener('DOMContentLoaded', function() {

let menuPrincipal = document.querySelector('.menuPrincipal');
let sairBtn = document.querySelector('#sair'); //não funciona






menuPrincipal.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href = "./menuPrincipal.html";
})

sairBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    // window.location.href = "./index.html";
    console.log("fui clicado")
});

});