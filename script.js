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

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler

var vijandX = 300; // x-positie van speler
var vijandY = 600; // y-positie van speler

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
  //voor
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
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
  if (spelerX - vijandX <50 &&
     vijandX - spelerX <50 &&
     spelerY - vijandY <50 &&
     vijandY - spelerY <50){
    spelstatus = GAMEOVER;
  }
  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("green");
  rect(0,0,1280,720);
  // vijand / Dwayne Johnson
 fill (0, 0, 0);
  ellipse (vijandX, vijandY - 100, 50, 50); // midden
  // kogel / Steen

  // speler / Ryan Reynolds
  fill (255, 255, 255);
  rect(spelerX, spelerY +40 - 100, 1, 25); // pijpstreep
  fill (0, 0, 0);
  rect(spelerX-11, spelerY +35 - 100, 22, 25); // broek
  fill (255,255,255);
  rect(spelerX-12, spelerY +10 - 100, 24, 25); // shirt
  fill (222, 180, 151);
  ellipse(spelerX, spelerY - 100, 20, 20); // hoofd
  
  fill (0, 0, 0);
  ellipse (spelerX, spelerY - 100, 5, 5); // midden

  // kogel / Vuurbal
  fill
  
  // punten en health

  // Boss / John Cena
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
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
   fill(0,0,0);
  }
}
