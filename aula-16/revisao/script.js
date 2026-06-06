const images = [
    'images/download.jpg', 
    'images/imagem-grande.jpg', 
    'images/imagemvv.jpg', 
    'images/imagen-pequena.jpg'
]

let index = 0;

function changeImage(){
    const slidesshow = document.getElementById('slideshow');
    slidesshow.innerHTML = `
        <img src="${images[index]}" alt="imagem de cidade">
    `;

    index++;
    if(images.length <= index){
        index = 0;
    }
}

setInterval(changeImage, 1000);

function setUserName() {
    const userName = prompt("Digite seu nome: ");
    document.cookie = `username=${userName}`;
    document.getElementById('userName').textContent = `Olá, ${userName}!`;
}

const cookies = document.cookie.split('; ');
cookies.forEach(cookie => {
    const [key, value] = cookie.split('=');
    if (key === 'userName') {
        document.getElementById('userName').textContent = `Olá, ${value}`;
    }
});