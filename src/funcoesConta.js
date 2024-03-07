import { Conta } from './conta.js'
import { todasContas } from "./script.js";

<<<<<<< HEAD
console.log('teste-> ', (todasContas))
let btnSair = document.querySelector('#btn-sair');
btnSair.addEventListener('click', ()=>{
    window.location=   "./menuPrincipal.html";
})
=======
let arrayTodasContas = JSON.parse(localStorage.getItem('todasContas'))

console.log('teste-> >>>', (arrayTodasContas))

>>>>>>> 5c2070d39c73f022818bca15728a489b7c50ceed

const criarConta = document.getElementById('criarConta');
criarConta.addEventListener('submit', (e) => {
    e.preventDefault();

    //filtra se o nome do input ja existe no banco
    let nome = document.getElementById('nome').value;

    //se já existir o nome filtrado no bando, não vai criar outro
    let nomeFiltrado = arrayTodasContas.filter((conta) => {  return conta.nome == nome }  )
    if(nomeFiltrado.length > 0) {
        //não cria a conta
        console.log('IGUAL')
        const msgCriarConta = document.getElementById('msgCriarConta')
        msgCriarConta.innerHTML = 'Nome já existente!'
        setTimeout(() => { msgCriarConta.innerHTML = '' }, 1500)
    } else {
        //cria uma nova conta
        console.log('DIFERENTE')
        let cpf = document.getElementById('cpf').value;
        let dataNascimento = document.getElementById('dataNascimento').value;
        let tipo = document.querySelector('input[name="tipoConta"]:checked').value;
        let agencia = document.getElementById('agencia').value;
        let senha = document.getElementById('senha').value;

        arrayTodasContas = localStorage.getItem('todasContas') ? JSON.parse(localStorage.getItem('todasContas')) : new Array();
        console.log('teste-> ', (arrayTodasContas))
        let conta = new Conta(nome, cpf, dataNascimento, senha, tipo, agencia)

        arrayTodasContas.push(conta)
        localStorage.setItem('todasContas', JSON.stringify(arrayTodasContas));

        // window.location.href = "././menuPrincipal.html";

    }



    //console.log('conta de numero ', numeroConta ,' criada com sucesso!!')
})
