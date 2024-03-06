import { todasContas } from './script.js'
import { arrayTodasContas } from './acessarConta.js'
import {Conta, numeroConta} from './conta.js'

console.log('sjdhglsdjglsdjl')
let arrayTodasContas = JSON.parse(localStorage.getItem('todasContas'))
console.log(arrayTodasContas)

arrayTodasContas.forEach(e => {
    if(e.ativo == true){
        console.log(e.nome)
    }
});


function sair(){
    const sair = document.getElementById('sair')
    sair.addEventListener('click', () => {
        contaAtiva.ativo = false
        localStorage.setItem('todasContas', JSON.stringify(arrayTodasContas))

        window.location.href = "./menuPrincipal.html";
        console.log(contaAtiva)
    })     
}
sair()