// Variáveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2;

// Variáveis raquetes
let xRaquete = 5;
let yRaquete = 150;
let wRaquete = 11;
let hRaquete = 95;

let xRaquete1 = 585;
let yRaquete1 = 150;
let wRaquete1 = 11;
let hRaquete1 = 95;

// Velocidade
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Placar
let placar1 = 0;
let placar2 = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  raquetada = loadSound("raquetada.wav")
  ponto = loadSound("ponto.mp3")
  trilha = loadSound("trilha.mp3")
}

// Tela
function setup() {
  createCanvas(600, 400);
  trilha.loop();
  trilha.setVolume(0.05)
}

// Vida
function draw() {
  background(0);
  aBolinha();
  espacoBolinha();
  verificaBolinha();
  aRaquete();
  aRaquete1();
  movimentoRaquete();
  movimentoRaquete1();
  colisaoRaquete();
  colisaoRaquete1();
  colisaoParede();
  placarGeral();
}

// Funções
function linha(){
  line (300, 0, 300, 400)
}

function aBolinha() {
  Bolinha = circle(xBolinha, yBolinha, diametro);
}

function aRaquete() {
  rect(xRaquete, yRaquete, wRaquete, hRaquete);
}

function aRaquete1() {
  rect(xRaquete1, yRaquete1, wRaquete1, hRaquete1);
}

function espacoBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaBolinha() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) velocidadeYBolinha *= -1;
}

function movimentoRaquete() {
  if (keyIsDown(87)) {
    yRaquete -= 10;
  }
  if (keyIsDown(83)) {
    yRaquete += 10;
  }
}

function colisaoRaquete() {
  if (
    xBolinha - raio < xRaquete + wRaquete &&
    yBolinha - raio < yRaquete + hRaquete &&
    yBolinha + raio > yRaquete
  ) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentoRaquete1() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete1 -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete1 += 10;
  }
}

function colisaoRaquete1() {
  if (
    xBolinha + raio > xRaquete1 &&
    yBolinha + raio > yRaquete1 &&
    yBolinha - raio < yRaquete1 + hRaquete1
  ) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function colisaoParede() {
  if (xBolinha + raio > 595) {
    placar1 += 1;
    ponto.play();
    ponto.setVolume(0.3)
  }
  if (xBolinha - raio < 2) {
    placar2 += 1;
    ponto.play();
    ponto.setVolume(0.3)
  }
}

function placarGeral() {
  textAlign(CENTER);
  stroke(255);  
  fill(color(54, 54, 54));
  rect(202, 10, 45, 25);
  rect(352, 10, 45, 25);
  textSize(16);
  fill(255);
  text(placar1, 225, 28);
  text(placar2, 375, 28);
}
