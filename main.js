const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight - 4;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

let mouseX, mouseY;
let particles = [];
let howManyParticles = 100;
let con = new Conection();

function randomNumber(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

function randNumFloat(min, max) {
    let random = Math.random() * (max - min) + min;
    return random;
}

function init() {
    for (let i = 0; i < howManyParticles; i++) {
        particles.push(new Particle());
    }
}

function animation() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    con.update();
    for (let i in particles) {
        particles[i].draw();
    }
}

//----------------------------------------------
//GŁÓWNY PROGRAM--------------------------------
//----------------------------------------------
init();
setInterval(animation, 1000 / 60);

canvas.onmousemove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // console.log(mouseX);
};

// window.onresize = () => {
//     canvasWidth = window.innerWidth;
//     canvasHeight = window.innerHeight - 5;

//     canvas.width = canvasWidth;
//     canvas.height = canvasHeight;
// };