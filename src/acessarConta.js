import { todasContas } from './script.js'
import {Conta, numeroConta} from './conta.js'

let nomeCorretoConta = localStorage.getItem('nome');
let senhaCorretaConta = localStorage.getItem('senha');

console.log( JSON.parse(localStorage.getItem('todasContas')));
let arrayTodasContas = JSON.parse(localStorage.getItem('todasContas'))

let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    let acessoConta = document.querySelector('#nome-conta').value;
    let senhaConta = document.querySelector('#password').value;
    
    arrayTodasContas.forEach(e => {
        // && e.senha == senhaConta
        if(e.nome == acessoConta){
            e.ativo = true;
            window.location.href = "./menuAcessarConta.html";
        }
    });
    
    
    let contaAtiva = arrayTodasContas.filter((conta) => {return conta.ativo == true })[0]
    localStorage.setItem('todasContas', JSON.stringify(arrayTodasContas))
});

export {arrayTodasContas}