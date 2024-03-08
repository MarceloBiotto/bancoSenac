import { todasContas } from './script.js'
import { Conta, numeroConta } from './conta.js'

let arrayTodasContas = JSON.parse(localStorage.getItem('todasContas'))
let contaAtiva = arrayTodasContas.filter((conta) => { return conta.ativo == true })[0]

console.log(arrayTodasContas)


const msg = document.getElementById('msg')
const infos = document.getElementById('infos')
const inputInfos = document.getElementById('inputInfos')


//mostra o saldo
function verSaldo() {
    const btnVerSaldo = document.getElementById('btnVerSaldo')
    btnVerSaldo.addEventListener('click', () => {
        infos.innerHTML = contaAtiva.saldo
        localStorage.setItem('todasContas', JSON.stringify(arrayTodasContas))

    })
}

function msgTempo(msg, string) {
    msg.innerHTML = ''
    msg.innerHTML = string
    setTimeout(() => {
        msg.innerHTML = ''
    }, 2000);
}

//remove valor da conta do usuario
function sacar() {
    const btnSacar = document.getElementById('btnSacar')
    btnSacar.addEventListener('click', () => {
        if (contaAtiva.saldo >= inputInfos.value && inputInfos.value != '') {
            console.log(inputInfos.value)
            contaAtiva.saldo -= inputInfos.value
            msgTempo(infos, `Saque de R$${inputInfos.value} realizado com sucesso!`)
            localStorage.setItem('todasContas', JSON.stringify(arrayTodasContas))

        } else {
            msgTempo(msg, 'Valor indisponível para saque!')
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
            msgTempo(infos, `Depósito de R$${valorDeposito} realizado com sucesso!`)
            localStorage.setItem('todasContas', JSON.stringify(arrayTodasContas))

        } else {
            msgTempo(msg, 'Valor indisponível para Depósito!')
        }

    })
}


//mostra informações sobre o usuario logado
function verInfo() {
    const verInfo = document.getElementById('verInfo')
    console.log(contaAtiva)
    verInfo.addEventListener('click', () => {

        infos.innerHTML = `Nome: ${contaAtiva.nome}<hr>
    Saldo: ${contaAtiva.saldo}<hr>
    Número da conta: ${contaAtiva.numeroConta}<hr>
    CPF: ${contaAtiva.cpf}<hr>
    Data de nascimento: ${contaAtiva.dataNascimento.replaceAll('-', '/')}<hr>
    Agência: ${contaAtiva.agencia}<hr>
    Tipo de conta: ${contaAtiva.tipo}<hr>
    `
        setTimeout(() => {
        infos.innerHTML = ''


        }, 3000);

    })
}

//muda a senha do usuario
function alterarSenha() {
    const btnAlterarSenha = document.getElementById('btnAlterarSenha')
    btnAlterarSenha.addEventListener('click', () => {
        if (inputInfos.value.length > 0) {
            infos.innerHTML = '';
            contaAtiva.senha = inputInfos.value
            msgTempo(infos, 'Senha alterada com sucesso!')
        } else {
            msgTempo(msg, 'Digite uma senha válida!')
        }
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

function remover() {
    const btnRemover = document.getElementById('btnRemover')
    btnRemover.addEventListener('click', () => {
        if (inputInfos.value == contaAtiva.numeroConta) {
            arrayTodasContas = arrayTodasContas.filter((conta) => { return conta.numeroConta != inputInfos.value })
            msgTempo(infos, 'Conta removida com sucesso!')
            localStorage.setItem('todasContas', JSON.stringify(arrayTodasContas))
            window.location.href = "./menuPrincipal.html";
        } else {
            msgTempo(msg, 'Número de conta inválido ou inexistente!')

        }
    })
}

remover()
alterarSenha()
verInfo()
depositar()
verSaldo()
sacar()
sair()
