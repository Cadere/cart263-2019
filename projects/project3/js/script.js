"use strict";

/*****************

oujabe breeding game
Eugene N. Fournier


******************/
let mother;
let father;
let child;

//some buttons
let motherButton;
let fatherButton;
let childButton;

//menus
let motherMenu;
let fatherMenu;

//information for the menu's display
let loci = {
  locusR:["R","r"],
  locusF:["F","b","w"],
  locusY:["Y","y"],
  locusC:["C","V","Y","c"],
  locusD:["D","d"],
  locusB:["B","b"],
  locusS:["S","m","i","s"]
}

//variables for the json files
let genetics;
let pigmentation;

//variables for the body parts
let accent;
let body;
let eye;
let head;
let hoof;
let leg;
let mask;
let maskLeg;
let stomach;
let violet;
let whiter;
let whiteR;
//variables for the white spotting variables
let sHeadSpeckle = [];
let sHeadMantle = [];
let sHeadLeuc = [];
let sSpeckle = [];
let sMantle = [];
let sLeuc = [];
//variables for the fonts
let ttLakes;
let ttLakesLight;
let ttLakesBold;

function preload(){
  //preload the fonts
  ttLakes = loadFont("assets/fonts/ttLakesMedium.ttf")
  ttLakesLight = loadFont("assets/fonts/ttLakesLight.otf")
  ttLakesBold = loadFont("assets/fonts/ttLakesBold.ttf");
  //preload the JSON files
  genetics = loadJSON("data/genetics.json");
  pigmentation = loadJSON("data/pigmentation.json")
  //preload the body images
  accent = loadImage("assets/images/accent.png");
  body = loadImage("assets/images/body.png");
  eye = loadImage("assets/images/eye.png");
  head = loadImage("assets/images/head.png");
  hoof = loadImage("assets/images/hoof.png");
  leg = loadImage("assets/images/leg.png");
  mask = loadImage("assets/images/mask.png");
  maskLeg = loadImage("assets/images/maskleg.png");
  stomach = loadImage("assets/images/stomach.png");
  violet = loadImage("assets/images/violet.png");
  whiter = loadImage("assets/images/whiteb.png");
  whiteR = loadImage("assets/images/whiteR.png");
  sHeadLeuc = [
    loadImage("assets/images/sho2.png"),
    loadImage("assets/images/sho3.png")
  ];
  sHeadMantle = [
    loadImage("assets/images/shm1.png"),
    loadImage("assets/images/shm2.png"),
    loadImage("assets/images/shm3.png")
  ];
  sHeadSpeckle = [
    loadImage("assets/images/shi1.png"),
    loadImage("assets/images/shi2.png"),
    loadImage("assets/images/shi3.png")
  ];
  sLeuc = [
    loadImage("assets/images/so2.png"),
    loadImage("assets/images/so3.png")
  ];
  sMantle = [
    // loadImage("assets/images/sm1.png"),
    loadImage("assets/images/sm2.png"),
    loadImage("assets/images/sm3.png")
  ];
  sSpeckle = [
    loadImage("assets/images/si1.png"),
    loadImage("assets/images/si2.png"),
    loadImage("assets/images/si3.png")
  ];

}

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(255);
  mother = new Oujabe();
  mother.generateRandom("f");
  father = new Oujabe();
  father.generateRandom("m");
  child = new Oujabe();
  child.breed(mother, father);
  childButton = new Button(500,600, "Breed Again",child);
  motherMenu = new Menu(mother,loci,25,50,"mother");
  motherMenu.setup();
  fatherMenu = new Menu(father, loci, 550,50,"father");
  fatherMenu.setup();
}

function draw(){
  background(255);
  textFont(ttLakes);
  motherMenu.display();
  fatherMenu.display();
  mother.display(40,110);
  father.display(565,110);
  child.display(40,450);
  explanation();
  childButton.display();
}

function explanation(){
  let explanation = `PHENOTYPE, PATTERN
Locus R determines if the head is red or blue;
Locus F determines the density of yellow and red pigments;
Locus Y can dilute the amount of melanin;
Locus C can dilute the amount of melanin,
  It is also the locus for a violet tint and for albinism;
Locus D is the locus of hypermelanism;
Locus B determines if there is a black mask;
Locus S is not yet implemented.`
  text(explanation, 515, 450);
}

function mouseClicked(){
  childButton.clicked(child);
  motherMenu.handleImput();
  fatherMenu.handleImput();
}

function newMother(){
  console.log("newMother called");
  mother.generateRandom("f");
}

function newFather(){
  console.log("newFather called");
  father.generateRandom("m");
}

function breedAgain(){
  console.log("breedAgain called");
  child.breed(mother, father);
}
