import { todasContas } from './script.js'
import {Conta, numeroConta} from './conta.js'

console.log( JSON.parse(localStorage.getItem('todasContas')));
let arrayTodasContas = JSON.parse(localStorage.getItem('todasContas'))
let msgEntrar = document.getElementById('msgEntrar');
console.log(msgEntrar);

function msgTempo(msg, string){
    msg.innerHTML = ''
    msg.innerHTML = string
    setTimeout(() => {
        msg.innerHTML = ''
    }, 2000);
}

let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    let acessoConta = document.querySelector('#nome-conta').value;
    let senhaConta = document.querySelector('#password').value;
    
    arrayTodasContas.forEach(e => {
        if(e.nome == acessoConta && e.senha == senhaConta){
            e.ativo = true;
            window.location.href = "./menuAcessarConta.html";
        }else{
            msgTempo(msgEntrar, 'Verifique o Nome e Senha e tente novamente')
        }

    });
    
    
    let contaAtiva = arrayTodasContas.filter((conta) => {return conta.ativo == true })[0]
    localStorage.setItem('todasContas', JSON.stringify(arrayTodasContas))
});

export {arrayTodasContas}