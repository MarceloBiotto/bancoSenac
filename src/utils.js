
import { arrayTodasContas } from './script.js';
import  {arrayTodasContas} from './acessarConta.js'


let verSaldo = document.querySelector('#btn-verSaldo');
verSaldo.addEventListener('click', () => {
        let conta= JSON.parse(localStorage.getItem('todasContas'));
        console.log(conta)
        conta.saldo = parseFloat(conta.saldo); 
        conta.saldo += 100;
        console.log(conta.saldo)
    });

