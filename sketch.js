var gato;
var rato;
var bgImg;
var gatoImg1, gatoImg2, gatoImg3;
var ratoImg1, ratoImg2;
function preload() {
    //carregue as imagens aqui
    bgImg = loadImage("garden.png");
    gatoImg1 = loadImage("cat1.png");
    gatoImg2 = loadAnimation("cat2.png","cat3.png");
    gatoImg3 = loadImage("cat4.png");

    ratoImg1 = loadImage("mouse1.png");
    ratoImg2 = loadAnimation("mouse2.png","mouse3.png");
    ratoImg3 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    gato = createSprite(870,600);
    gato.addAnimation("gatoSentado",gatoImg1);
    gato.scale = 0.2;

    rato = createSprite(200,600);
    rato.addAnimation("rato", ratoImg1);
    rato.scale = 0.15;
}

function draw() {

    background(bgImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(gato.x - rato.x < (gato.width + rato.width)/2){
        gato.velocityX = 0;
        gato.addAnimation("ultimaImgGato",gatoImg3);
        gato.changeAnimation("ultimaImgGato");
        gato.x = 300;
        gato.scale = 0.2;
        gato.changeAnimation("ultimaImgGato");

        rato.addAnimation("ultimaImgRato", ratoImg3);
        rato.scale = 0.15;
        rato.changeAnimation("ultimaImgRato");
    }
    drawSprites();
}


function keyPressed(){
    if(keyCode ===LEFT_ARROW){
        gato.velocityX = -5;
        gato.addAnimation("gatoCorrendo", gatoImg2);
        gato.changeAnimation("gatoCorrendo");

        rato.addAnimation("ratoProvocando",ratoImg2);
        rato.frameDelay = 25;
        rato.changeAnimation("ratoProvocando");
    }
}
