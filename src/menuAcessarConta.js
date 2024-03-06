import { todasContas } from './script.js'
import { Conta, numeroConta } from './conta.js'

let arrayTodasContas = JSON.parse(localStorage.getItem('todasContas'))
let contaAtiva = arrayTodasContas.filter((conta) => { return conta.ativo == true })[0]

console.log(arrayTodasContas)

arrayTodasContas.forEach(e => {
    if (e.ativo == true) {
        console.log(e.nome)
    }
});

//CRIAR UMA FUNÇÃO PARA SALVAR OS DADOS QUANDO UTILIZAR AS FUNÇÕES
//VERIFICAR CAMPO DE SENHA NO BANCO -> ( function alterarSenha() )


const msg = document.getElementById('msg')
const infos = document.getElementById('infos')
const inputInfos = document.getElementById('inputInfos')


//mostra o saldo
function verSaldo() {
    const btnVerSaldo = document.getElementById('btnVerSaldo')
    btnVerSaldo.addEventListener('click', () => {
        infos.innerHTML = contaAtiva.saldo
    })
}

//remove valor da conta do usuario
function sacar() {
    const btnSacar = document.getElementById('btnSacar')
    btnSacar.addEventListener('click', () => {
        if (contaAtiva.saldo > inputInfos.value && inputInfos.value != '') {
            console.log(inputInfos.value)
            contaAtiva.saldo -= inputInfos.value
            infos.innerHTML = `Saque de R$${inputInfos.value} realizado com sucesso!`
        } else {
            msg.innerHTML = 'Valor indisponível para saque!'
        }
    })
}

//faz o deposito na conta do usuario
function depositar() {
    const btnDepositar = document.getElementById('btnDepositar')
    btnDepositar.addEventListener('click', () => {
        if (inputInfos.value !== '') {
            const valorDeposito = parseInt(inputInfos.value);
            contaAtiva.saldo += valorDeposito;
            infos.innerHTML = `Depósito de R$${valorDeposito} realizado com sucesso!`;
        } else {
            infos.innerHTML = 'Valor indisponível para Depósito!';
        }
        
    })
}


//mostra informações sobre o usuario logado
function verInfo() {
    const verInfo = document.getElementById('verInfo')
    verInfo.addEventListener('click', () => {
        infos.innerHTML = `Nome: ${contaAtiva.nome}<hr>
        Saldo: ${contaAtiva.saldo}<hr>
        Número da conta: ${contaAtiva.numeroConta}<hr>
        CPF: ${contaAtiva.cpf}<hr>
        Data de nascimento: ${contaAtiva.dataNascimento.replaceAll('-', '/')}<hr>
        Agência: ${contaAtiva.agencia}<hr>
        `
        
        
    })
}

//muda a senha do usuario
function alterarSenha(){
    const btnAlterarSenha = document.getElementById('btnAlterarSenha')
    btnAlterarSenha.addEventListener('click', () => {
            contaAtiva.senha = inputInfos.value
    })
}

//desloga o usuario e volta para a tela inicial
function sair() {
    const sair = document.getElementById('sair')
    sair.addEventListener('click', () => {
        contaAtiva.ativo = false
        localStorage.setItem('todasContas', JSON.stringify(arrayTodasContas))

        window.location.href = "./menuPrincipal.html";
    })
}

alterarSenha()
verInfo()
depositar()
verSaldo()
sacar()
sair()