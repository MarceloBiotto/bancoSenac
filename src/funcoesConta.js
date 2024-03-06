import {Conta, numeroConta} from './conta.js'
import {todasContas}  from "./script.js";

console.log('whglasdgsklgjsdlkgjl')
console.log('teste-> ', localStorage.getItem(todasContas))


const criarConta =  document.getElementById('criarConta');
criarConta.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //AJUSTAR NO FINAL
    let nome = document.getElementById('nome').value;
    //localStorage.setItem(`nome${numeroConta}`, nome);

    let senha = document.getElementById('senha').value;
    //localStorage.setItem('senha', senha);
    



    //let cpf = document.getElementById('cpf').value;
    //let dataNascimento = document.getElementById('dataNascimento').value;
    //let tipo = document.getElementById('tipo').value;
    //let agencia = document.getElementById('agencia').value;

    let conta = new Conta(nome)
    todasContas.push(conta)
    localStorage.setItem('todasContas', JSON.stringify(todasContas));
    
    //console.log('conta de numero ', numeroConta ,' criada com sucesso!!')
})
