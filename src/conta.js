let numeroConta = 1
class Conta{

    constructor(nome, cpf, dataNascimento, senha, tipo, agencia){
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.senha = senha;
        this.tipo = tipo;
        this.agencia = agencia;
        this.numeroConta = this.pegarValorNumeroConta()
        this.saldo = 0;
        this.ativo = false
    }

    pegarValorNumeroConta(){
        numeroConta = localStorage.getItem("numeroConta") ? localStorage.getItem("numeroConta") : 0;

        numeroConta++;

        localStorage.setItem("numeroConta", numeroConta);

        return numeroConta;
    }

}
export { Conta, numeroConta }