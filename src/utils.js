

import  {arrayTodasContas} from './acessarConta.js'


let verSaldo = document.querySelector('#btn-verSaldo');
verSaldo.addEventListener('click', () => {
    arrayTodasContas.forEach(e => {        
    
    

    verSaldo.innerHTML = ("R$",e.saldo);

    });

});