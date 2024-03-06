import { arrayTodasContas } from './acessarConta.js';

let verSaldo = document.querySelector('#btn-verSaldo');
verSaldo.addEventListener('click', () => {

    let saldoTotal = "";
    

    arrayTodasContas.forEach(conta => {
   
        saldoTotal += `R$ ${conta.saldo} <br>`;
    });

    verSaldo.innerHTML = saldoTotal;
});


function verSaldo2(conta){
    arrayTodasContas.filter((conta) => {return conta.ativo == true })[0]
    localStorage.setItem('todasContas', JSON.stringify(arrayTodasContas))
    console.log(arrayTodasContas)
}

export {verSaldo2}
