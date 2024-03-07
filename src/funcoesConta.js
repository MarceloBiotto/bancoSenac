import { Conta } from './conta.js'
import { todasContas } from "./script.js";

let arrayTodasContas = JSON.parse(localStorage.getItem('todasContas'))

console.log('teste-> >>>', (arrayTodasContas))


const criarConta = document.getElementById('criarConta');
criarConta.addEventListener('submit', (e) => {
    e.preventDefault();

    //filtra se o nome do input ja existe no banco
    let nome = document.getElementById('nome').value;
    let nomeFiltrado = arrayTodasContas.filter((conta) => {  return conta.nome == nome }  )

    console.log('nomeFiltrado->>>', nomeFiltrado)
    if(nomeFiltrado) {
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
