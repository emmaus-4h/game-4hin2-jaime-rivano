/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
const INTRO = 3;
const UITLEG = 4;
var spelStatus = SPELEN;

var spelerX = 640; // x-positie van speler
var spelerY = 360; // y-positie van speler

// vijand
var vijand;
var vijandX = 400; // x-positie van vijand
var vijandY = 300; // y-positie van vijand
var vijKantX = 0;
var vijKantY = 0;
var vijandLeeft = true;
var vijandBeweegt = false;
var vijandSnelheid = 2;
var vijandTargetX;
var vijandTargetY;

// kogel
var kogelX = 500; // x-positie van kogel
var kogelY = 300; // y-positie van kogel
var richtingX = 0;
var richtingY = 0;
var kogelVliegt = false;
var kogelSnelheid = 5;

var targetX;
var targetY;
  
var schietPlaatsX;
var schietPlaatsY;

var spaceDownNu = false;
var spaceDownLast = false;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
  if (keyIsDown(68)) {
    spelerX = spelerX +2;
  }
  if (keyIsDown(65)) {
    spelerX = spelerX -2;
  }
  if (keyIsDown(83)) {
    spelerY = spelerY +2;
  }
  if (keyIsDown(87)) {
    spelerY = spelerY -2;
  }

  // vijand
  
  // start met bewegen
    if (vijandBeweegt === false) {
    vijandBeweegt = true;
    vijandTargetX = spelerX;
    vijandTargetY = spelerY;
    richtingX = vijandTargetX - spelerX;
    richtingY = vijandTargetY - spelerY;
  }
  
  // aan het bewegen
  if (vijandSnelheid === true) {
    var vijandCorrectieSnelheid = Math.sqrt(((vijKantX * vijKantX)+ (vijKantY * vijKantY))) / 1.412
    
    var vijandSnelheidX = vijKantX / vijandCorrectieSnelheid;
    var vijandSnelheidY = vijKantY / vijandCorrectieSnelheid;
    
    vijandX = vijandX + vijandSnelheid * vijandSnelheidX;
    vijandY = vijandY + vijandSnelheid * vijandSnelheidY;
  }
  
  // kogel


  spaceDownLast = spaceDownNu;
  spaceDownNu = keyIsDown(32);

  // start met vliegen
  if (spaceDownLast === false && spaceDownNu === true && kogelVliegt === false) {
    kogelVliegt = true;
    targetX = mouseX;
    targetY = mouseY;
    if (spelerX > 640){
     kogelX = spelerX -70;
     kogelY = spelerY -25;
    } else {
     kogelX = spelerX +70;
     kogelY = spelerY -25;
    };
    richtingX = targetX - spelerX;
    richtingY = targetY - spelerY;
  }

// aan het vliegen
if (kogelVliegt === true) {
  var correctieSnelheid = Math.sqrt(((richtingX * richtingX)+ (richtingY * richtingY))) / 1.412
  var snelheidX = richtingX / correctieSnelheid;
  var snelheidY = richtingY / correctieSnelheid;
  
  kogelX = kogelX + kogelSnelheid * snelheidX;
  kogelY = kogelY + kogelSnelheid * snelheidY;
}

// stoppen met vliegen
if (kogelVliegt === true && kogelX < 0 ||
    kogelVliegt === true && kogelX > 1320 ||
    kogelVliegt === true && kogelY < 0 ||
    kogelVliegt === true && kogelY > 750){
      kogelVliegt = false;
    }
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
  if (spelerX - vijandX <36 &&
     vijandX - spelerX <36 &&
     spelerY - vijandY <59 &&
     vijandY - spelerY <59){
    console.log("botsing")
    spelStatus = GAMEOVER;
  }
  // botsing kogel tegen vijand
  if (kogelX - vijandX <33 &&
     vijandX - kogelX <33 &&
     kogelY - vijandY <55 &&
     vijandY - kogelY <55){
    vijandleeft = false;
    console.log("Rock neer")
  }

  if (vijandLeeft === false) {
      vijandLeeft = true;
    vijandX = random(100, 1170);
    vijandY = random(150, 575);
    vijand();
  }
  // bomen
    if (spelerX > 100) {
    spelerX = spelerX -2;
  }
  if (spelerX < 1170) {
    spelerX = spelerX +2;
  }
  if (spelerY < 150) {
    spelerY = spelerY +2;
  }
  if (spelerY > 575) {
    spelerY = spelerY -2;
  }

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  //kleuren
  var wit= color(255, 255, 255);
  var zwart= color(0, 0, 0);
  var ryan= color(242, 204, 183);
  var rock= color(140, 100, 77);
  
  // achtergrond
  image(img6, 0, 0, 1280, 720)

  // speler / Ryan Reynolds
  noStroke();
  fill (ryan);
  rect(spelerX -5, spelerY -28, 10, 33); // nek

  image(img1, spelerX -17, spelerY -59, 35, 42); // Ryan
  
  fill (wit);
  rect(spelerX -14, spelerY -15, 28, 30); // torso
  
  fill (zwart);
  rect(spelerX-2, spelerY-13, 4, 21); // stropdas

  triangle(spelerX-2, spelerY+8, spelerX +2, spelerY +8, spelerX, spelerY +11); // stropdas onderkant
  
  fill (zwart);
  rect(spelerX -14, spelerY +15, 28, 30); // benen

  fill (50, 50, 50);
  rect(spelerX -1, spelerY +22, 2, 23); // dubbelbeen

  // armen en wapen
  if (spelerX > vijandX) { // kijk links
  fill (wit);
  rect(spelerX -45, spelerY -13, 30, 7); // linkerarm <

  fill (wit);
  rect(spelerX +22, spelerY -13, -7, 33); // rechterarm V

  image(img7, spelerX -70, spelerY -25, 25, 20) // wapen <
  } else { // kijk rechts
  fill (wit);
  rect(spelerX-22, spelerY-13, 7, 33); // linkerarm V

  fill (wit);
  rect(spelerX+15, spelerY-13, 30, 7); // rechterarm >
    
  image(img8, spelerX +42, spelerY -25, 28, 20) // wapen >
  }

   // vijand / Dwayne Johnson
  vijand = function(vijandX, vijandY) {
    noStroke();
  fill (rock);
  rect(vijandX -14, vijandY -20, 28, 65); // lichaam
  
  fill (50, 50, 50);
  rect(vijandX -1, vijandY +22, 2, 23); // dubbelbeen

  fill (rock);
  rect(vijandX -24, vijandY -18, 9, 33); // linkerarm

  fill (rock);
  rect(vijandX +15, vijandY -18, 9, 33); // rechterarm

  fill (rock);
  rect(vijandX -5, vijandY -28, 10, 33); // nek
  
  image(img2, vijandX -13, vijandY -63, 35, 42); // Dwayne

  fill (zwart);
  triangle(vijandX -15, vijandY +13, vijandX +15, vijandY +13, vijandX, vijandY +23); // speedo
  }

    
  // (Nerf) kogel
  if (kogelVliegt === true && spelerX > mouseX){
  image(img9, kogelX, kogelY, 20, 10);
  }
  if (kogelVliegt === true && spelerX < mouseX){
  image(img10, kogelX, kogelY, 20, 10);
  }
  // punten en health

};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */
function preload (){ //plaatjes
  img1 = loadImage("afbeeldingen/Ryan.png")
  img2 = loadImage("afbeeldingen/Rock.png")
  img3 = loadImage("afbeeldingen/Intro.jpeg")
  img4 = loadImage("afbeeldingen/Over.jpeg")
  img5 = loadImage("afbeeldingen/Uitleg.jpeg")
  img6 = loadImage("afbeeldingen/Achter.jpg")
  img7 = loadImage("afbeeldingen/WapenLinks.png")
  img8 = loadImage("afbeeldingen/WapenRechts.png")
  img9 = loadImage("afbeeldingen/KogelLinks.png")
  img10 = loadImage("afbeeldingen/KogelRechts.png")
}
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  createCanvas(1280, 720);
  
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    console.log("spelen")
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    vijand();
  }
    
  if (spelStatus === GAMEOVER) {
    console.log("game over")
     image(img4, 0, 0, 1280, 720)
    if(keyIsDown(32)){
      spelerX=640;
      spelStatus = INTRO;
    }
  }

  if (spelStatus === INTRO) {
    console.log("intro")
    image(img3, 0, 0, 1280, 720)
    if(mouseIsPressed && 
       mouseX >60 && mouseX <335 &&
       mouseY >340 && mouseY <410){
      spelerX=640;
      spelStatus = SPELEN;
    }
    if(mouseIsPressed &&
       mouseX >940 && mouseX <1245 &&
       mouseY >340 && mouseY <400){
      spelStatus = UITLEG;
    }
  }
  
  if (spelStatus === UITLEG) {
    console.log("uitleg")
    image(img5, 0, 0, 1280, 720)
    if(mouseIsPressed &&
       mouseX >530 && mouseX <775 &&
       mouseY >615 && mouseY <670){
      spelStatus = INTRO;
    }
  }
}