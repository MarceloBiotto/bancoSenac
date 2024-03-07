import {Conta, numeroConta} from './conta.js'
import {todasContas}  from "./script.js";

<<<<<<< HEAD
console.log('teste-> ', (todasContas))
let btnSair = document.querySelector('#btn-sair');
btnSair.addEventListener('click', ()=>{
    window.location=   "./menuPrincipal.html";
})

const criarConta =  document.getElementById('criarConta');
=======

let arrayTodasContas = JSON.parse(localStorage.getItem('todasContas'))

const criarConta = document.getElementById('criarConta');
>>>>>>> 56d4c86546a2aa42cf64cbaa38e9ac290925d829
criarConta.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let nome = document.getElementById('nome').value;
<<<<<<< HEAD
    let cpf = document.getElementById('cpf').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let senha = document.getElementById('senha').value;
    let tipo = document.querySelector('input[name="tipoConta"]:checked').value;
    let agencia = document.getElementById('agencia').value;
    console.log(tipo);

    /*
    todasContas.forEach((conta) => {
        if (!todasContas.includes(conta.name)) {
            console.log('ja tem o nome no array')
        } else {
=======

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
>>>>>>> 56d4c86546a2aa42cf64cbaa38e9ac290925d829

            let nome = document.getElementById('nome').value;
            let cpf = document.getElementById('cpf').value;
            let dataNascimento = document.getElementById('dataNascimento').value;
            let senha = document.getElementById('senha').value;
            let tipo = document.querySelector('input[name="tipoConta"]:checked').value;
            let agencia = document.getElementById('agencia').value;
            console.log(tipo);

            console.log('teste-> ', (todasContas))
            let conta = new Conta(nome, cpf, dataNascimento, senha, tipo, agencia)
            todasContas.push(conta)
            localStorage.setItem('todasContas', JSON.stringify(todasContas));


        }
    })
    
    */

    
    
    let arrayTodasContas = JSON.parse(localStorage.getItem('todasContas'))
    console.log('teste-> ', (arrayTodasContas))
    let conta = new Conta(nome, cpf, dataNascimento, senha, tipo, agencia)
    arrayTodasContas.push(conta)
    localStorage.setItem('todasContas', JSON.stringify(arrayTodasContas));
    
    //console.log('conta de numero ', numeroConta ,' criada com sucesso!!')
})
