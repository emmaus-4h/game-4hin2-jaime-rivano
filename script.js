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
var spelStatus = SPELEN;


var spelerX = 400; // x-positie van speler
var spelerY = 300; // y-positie van speler


var vijand;
var vijandX = 300; // x-positie van vijand
var vijandY = 300; // y-positie van vijand

var kogel;
var kogelX = 500; // x-positie van kogel
var kogelY = 300; // y-positie van kogel
var kogelVliegt = false;
var kogelSnelheid = 1;

var targetX;
var targetY;

var fireX;
var fireY;

var img1;
var img2;


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

  // kogel
  if (mouseIsPressed && kogelVliegt === false) {
    targetX = mouseX;
    targetX = mouseY;
    fireX = spelerX;
    fireY= spelerY;
  }

  if (kogelVliegt === false && mouseIsPressed){
    kogelVliegt = true;
    kogelX = fireX;
    kogelY = fireY;
  }

  var richtingY = targetY - fireY;
  var richtingX = targetX - fireX;

  var correctieSnelheid = Math.sqrt(((richtingX * richtingX)+ (richtingY * richtingY))) / 1.412

  var snelheidX = richtingX / correctieSnelheid;
  var snelheidY = richtingY / correctieSnelheid;

  var snelheidX = richtingX / correctieSnelheid;
  var snelheidY = richtingY / correctieSnelheid;

var snelheidX = richtingX / correctieSnelheid;
var snelheidY = richtingY / correctieSnelheid;
  
if (kogelVliegt === true) {
  kogelX = kogelX + kogelsnelheid * snelheidX;
}
if (kogelVliegt === true) {
  kogelY = kogelY + kogelsnelheid * snelheidY;
}

if (kogelVliegt === true && kogelY < 0 ||
    kogelVliegt === true && kogelY > 720 ||
    kogelVliegt === true && kogelX < 0 ||
    kogelVliegt === true && kogelX > 1280){
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
    spelStatus = GAMEOVER;
  }
  // botsing kogel tegen vijand
  
  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill(235, 205, 122);
  rect(0,0,1280,720);
  
  //plaatjes

  // speler / Ryan Reynolds
  noStroke();
  fill (242, 204, 183);
  rect(spelerX-5, spelerY-28, 10, 33); // nek
  
  fill (255,255,255);
  rect(spelerX-14, spelerY-15, 28, 30); // torso
  
  fill (0, 0, 0);
  rect(spelerX-14, spelerY +15, 28, 30); // benen

  fill (50, 50, 50);
  rect(spelerX -1, spelerY +22, 2, 23); // dubbelbeen

  fill (255,255,255);
  rect(spelerX-22, spelerY-13, 7, 33); // linkerarm

  fill (255,255,255);
  rect(spelerX+15, spelerY-13, 33, 7); // rechterarm

  image(img1, spelerX -17, spelerY -59, 35, 42); // Ryan
  
  fill (0, 0, 0);
  ellipse (spelerX, spelerY, 5, 5); // midden

   // vijand / Dwayne Johnson

    noStroke();
  fill (140, 100, 77);
  rect(vijandX-14, vijandY-20, 28, 65); // torso
  
  fill (50, 50, 50);
  rect(vijandX -1, vijandY +22, 2, 23); // dubbelbeen

  fill (140, 100, 77);
  rect(vijandX-24, vijandY-18, 9, 33); // linkerarm

  fill (140, 100, 77);
  rect(vijandX+15, vijandY-18, 9, 33); // rechterarm

  fill (140, 100, 77);
  rect(vijandX-5, vijandY-28, 10, 33); // nek
  
  image(img2, vijandX -17, vijandY -63, 35, 42); // Dwayne

  fill (0,0,0);
  triangle(vijandX -15, vijandY +13, vijandX +15, vijandY +13, vijandX, vijandY +23); // speedo
  
  // kogel / Vuurbal
  fill (252, 100, 0);
  ellipse (kogelX, kogelY, 20, 20); // midden
  
  // punten en health


  // opstakels
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */
function preload (){
  img1 = loadImage("afbeeldingen/Ryan.png")
  img2 = loadImage("afbeeldingen/Rock.png")
}
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
  }
  if (spelStatus === GAMEOVER) {
     fill("black");
      rect(0,0,1280,720);
    
  }
}
