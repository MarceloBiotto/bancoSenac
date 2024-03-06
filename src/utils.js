import { arrayTodasContas } from './acessarConta.js';

let verSaldo = document.querySelector('#btn-verSaldo');
verSaldo.addEventListener('click', () => {

    let saldoTotal = "";
    

    arrayTodasContas.forEach(conta => {
   
        saldoTotal += `R$ ${conta.saldo} <br>`;
    });

    verSaldo.innerHTML = saldoTotal;
});


