let numeroConta = 0

let todasContas = []
class Conta{

    constructor(nome, cpf, dataNascimento, tipo, agencia){
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.tipo = tipo;
        this.agencia = agencia;
        this.numeroConta = numeroConta++
        this.saldo = 0;
    }
}

const criarConta =  document.getElementById('criarConta');
criarConta.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //AJUSTAR NO FINAL
    let nome = document.getElementById('nome').value;
    //let cpf = document.getElementById('cpf').value;
    //let dataNascimento = document.getElementById('dataNascimento').value;
    //let tipo = document.getElementById('tipo').value;
    //let agencia = document.getElementById('agencia').value;

    let conta = new Conta(nome)
    todasContas[numeroConta] = conta

    console.log('conta de numero ', numeroConta ,' criada com sucesso!!')
})
