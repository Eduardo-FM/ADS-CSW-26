function calcularIdade() {

    let dataNascimento = new Date(document.getElementById("ano").value);

    const hoje = new Date();

    let idade = hoje.getFullYear() - dataNascimento.getFullYear();

    let mes = hoje.getMonth() - dataNascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    document.getElementById("resultado").innerHTML = "Você tem " + idade + " anos";
}