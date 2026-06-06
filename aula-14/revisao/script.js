function calcularIdade(event){  
    event.preventDefault();

    let anoNascimento = new Date(document.getElementById("anoNascimento").value);
    let anoAtual = new Date;


    let idade = anoAtual.getFullYear() - anoNascimento.getFullYear();
    let mes = anoAtual.getMonth() - anoNascimento.getMonth();

    if(mes < 0 || (mes === 0 && anoAtual.getDate() < anoNascimento.getDate())){
        idade--;
    }

    document.getElementById('idade').innerHTML = idade;
}