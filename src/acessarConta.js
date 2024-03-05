let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    let acessoConta = document.querySelector('#nome-conta').value;
    let senhaConta = document.querySelector('#password').value;

    let nomeCorretoConta = localStorage.getItem('nome');
    let senhaCorretaConta = localStorage.getItem('senha');

    console.log(nomeCorretoConta, senhaCorretaConta);
});
