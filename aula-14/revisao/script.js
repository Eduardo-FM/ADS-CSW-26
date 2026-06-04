function calcularIdade(event){  
    event.preventDefault();

    let anoNascimento = document.getElementById("anoNascimento").value;
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;

    document.getElementById('idade').innerHTML = idade;
}