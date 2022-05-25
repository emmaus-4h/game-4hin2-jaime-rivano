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
var img1;
function preload() {
  img1 = loadImage('Ryan.png');
}


var vijandX = 300; // x-positie van speler
var vijandY = 300; // y-positie van speler

var kogel;
var kogelX = 500; // x-positie van speler
var kogelY = 300; // y-positie van speler



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
    if (keyIsDown(88)) {
    kogelX = kogelX -2;
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
  if (kogelX - vijandX <36 &&
     vijandX - kogelX <36 &&
     kogelY - vijandY <59 &&
     vijandY - kogelY <59){
  }
  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("green");
  rect(0,0,1280,720);
  
  //plaatjes
  
  
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
  
  var img1;
  function preload() {
    img1 = loadImage('Ryan.png');
  }
  image(img2, vijandX -17, vijandY -63, 35, 42); // Dwayne

  fill (0,0,0);
  triangle(vijandX -15, vijandY +13, vijandX +15, vijandY +13, vijandX, vijandY +23); // speedo

  
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

  var img1;
   function preload() {
     img1 = loadImage('Ryan.png');
   }
  image(img1, spelerX -17, spelerY -59, 35, 42); // Ryan
  
  fill (0, 0, 0);
  ellipse (spelerX, spelerY, 5, 5); // midden
  
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
