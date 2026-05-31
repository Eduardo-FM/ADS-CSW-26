

// =========================
// TROCA AUTOMÁTICA DE FOTOS
// =========================

let imagens = [
    "https://picsum.photos/id/1015/500/300",
    "https://picsum.photos/id/1025/500/300",
    "https://picsum.photos/id/1035/500/300",
    "https://picsum.photos/id/1045/500/300"
];

let indice = 0;

function trocarFoto() {

    indice++;

    if (indice >= imagens.length) {
        indice = 0;
    }

    document.getElementById("foto").src = imagens[indice];
}

// troca a foto a cada 3 segundos
setInterval(trocarFoto, 3000);


// =========================
// GUARDAR NOME DO USUÁRIO
// =========================

function salvarNome() {

    let nome = document.getElementById("nome").value;

    localStorage.setItem("nomeUsuario", nome);

    mostrarNome();
}

function mostrarNome() {

    let nomeSalvo = localStorage.getItem("nomeUsuario");

    if (nomeSalvo) {
        document.getElementById("mensagem").innerHTML =
            "Bem-vindo, " + nomeSalvo + "!";
    }
}

// mostra o nome ao carregar a página
mostrarNome();

