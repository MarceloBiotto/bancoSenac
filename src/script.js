let todasContas = new Array();

const init = () => {
    document.addEventListener('DOMContentLoaded', function() {

        let menuPrincipal = document.querySelector('.menuPrincipal');
        
    
        if(menuPrincipal){
            menuPrincipal.addEventListener('click', (e)=>{
                e.preventDefault();
                
                window.location.href = "./menuPrincipal.html";
            })
        }
    
    });
    
}

init();

export { todasContas }