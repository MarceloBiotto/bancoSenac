import {Conta, numeroConta} from './conta.js'
import {todasContas}  from "./script.js";

console.log('teste-> ', (todasContas))


const criarConta =  document.getElementById('criarConta');
criarConta.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //AJUSTAR NO FINAL
    let nome = document.getElementById('nome').value;
    //localStorage.setItem(`nome${numeroConta}`, nome);
    let cpf = document.getElementById('cpf').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let senha = document.getElementById('senha').value;
    //localStorage.setItem('senha', senha);
    let tipo = document.getElementById('tipo')
    let agencia = document.getElementById('agencia').value;
    
    
    
    console.log('teste-> ', (todasContas))
    let conta = new Conta(nome,cpf, dataNascimento, senha, tipo, agencia)
    todasContas.push(conta)
    localStorage.setItem('todasContas', JSON.stringify(todasContas));
    
    //console.log('conta de numero ', numeroConta ,' criada com sucesso!!')
})
