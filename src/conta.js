let numeroConta = 1
class Conta{
    //metodo construdor
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
    // para interar automaticamente no numero da conta 
    pegarValorNumeroConta(){
        numeroConta = localStorage.getItem("numeroConta") ? localStorage.getItem("numeroConta") : 0;

        numeroConta++;
        // setamos o numero da conta  no localStorage
        localStorage.setItem("numeroConta", numeroConta);

        return numeroConta;
    }

}
export { Conta, numeroConta }