
const form = document.getElementById('form-atividade');

const imgAprovado =' <img src = "/images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado ='<img src = "/images/verificar.png" alt="Emoji decepcionado" />';
const nomes = [];
const numeros = [];
const email = [];



let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizarTabela();
   


    

});

function adicionaLinha (){

    const inputNomeContatos = document.getElementById('nome-contato');
    const inputNumeroDeTelefone=document.getElementById('numero-contato');
    const inputEmail=document.getElementById('email');

    if (nomes.includes(inputNomeContatos.value)) {
        alert(`O nome: ${inputNomeContatos.value} já existe. `);

    } 
    if (isNaN(parseFloat(inputNumeroDeTelefone.value)) || !isFinite(inputNumeroDeTelefone.value)) {
            alert("Digite apenas numeros ");
            
        }
        else{
        nomes.push (inputNomeContatos.value);
        numeros.push(parseFloat(inputNumeroDeTelefone.value));
        email.push (inputEmail);


    let linha = '<tr>';
    linha += `<td> ${inputNomeContatos.value}</td>`;
    linha += `<td> ${inputNumeroDeTelefone.value}</td>`;
    linha += `<td> ${inputEmail.value}</td>`;
    // // Operador ternario 
     linha += `<td> ${ imgReprovado}</td>`;
     linha += `</tr>`;
     linhas += linha 

    }

        
    inputNomeContatos.value = '';
    inputNumeroDeTelefone.value = '';
    inputEmail.value ='';
    
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

