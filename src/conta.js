
/*
let totalContas = []
funcao getContas(totalContas){
    let dados = localStorage.getItem("xablau")

    totalContas = dados.map((dado) => {new Conta(dado.nome, dado.cpf)})
}
 */

let numeroConta = 1
class Conta{

    constructor(nome, cpf, dataNascimento, senha, tipo, agencia){
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.senha = senha;
        this.tipo = tipo;
        this.agencia = agencia;
        this.numeroConta = numeroConta++
        this.saldo = 0;
        this.ativo = false
    }

}
export { Conta }