import  { todasContas }  from "./script.js";

let totalContas = []

/*
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

    depositar(valor){
        this.saldo += valor;
    }

    sacar(valor){
        this.saldo -= valor;
    }

    verContas(){
        todasContas.forEach((e) => {
            console.log(e)
        })
    }

}
export { todasContas, Conta, numeroConta }