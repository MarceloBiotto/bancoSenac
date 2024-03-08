let arrayTodasContas = JSON.parse(localStorage.getItem('todasContas'))
let msgEntrar = document.getElementById('msgEntrar');
// função criada para apagar mensagens automaticamente após algum tempo
function msgTempo(msg, string){
    msg.innerHTML = ''
    msg.innerHTML = string
    setTimeout(() => {
        msg.innerHTML = ''
    }, 2000);
}

let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    let acessoConta = document.querySelector('#nome-conta').value;
    let senhaConta = document.querySelector('#password').value;
    // aqui capturamos as contas e verificamos se é possivel o acesso, assim também modificamos o status da conta para true para poder validar a entrada
    arrayTodasContas.forEach(e => {
        if(e.nome == acessoConta && e.senha == senhaConta){
            e.ativo = true;
            //se for validado a entrada já enviamos o usuário para a próxima janelaa
            window.location.href = "./menuAcessarConta.html";
        }else{
            msgTempo(msgEntrar, 'Verifique o Nome e Senha e tente novamente')
        }
    });
    // enviamos o arrayTodasContas para o localStorage transformando os dados em string com o stringfy
    localStorage.setItem('todasContas', JSON.stringify(arrayTodasContas))
});

export {arrayTodasContas}