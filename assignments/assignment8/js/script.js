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
let stomach;
let violet;
let whiter;
let whiteR;

function preload(){
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
  stomach = loadImage("assets/images/stomach.png");
  violet = loadImage("assets/images/violet.png");
  whiter = loadImage("assets/images/whiteb.png");
  whiteR = loadImage("assets/images/whiteR.png");
}

function setup(){
  createCanvas(1000,600);
  background(255);
  mother = new Oujabe();
  mother.generateRandom("f");
  father = new Oujabe();
  father.generateRandom("m");
  child = new Oujabe();
  child.breed(mother, father);
  motherButton = new Button(300,20,"New Mother",mother);
  fatherButton = new Button(300,320,"New Father",father);
  childButton = new Button(800,20, "Breed Again",child);
}

function draw(){
  background(255);
  mother.textGenesAndPhenotype("MOTHER",15,110);
  mother.display(40,15);
  father.textGenesAndPhenotype("FATHER",15,410);
  father.display(40,315);
  child.textGenesAndPhenotype("CHILD",515,110);
  child.display(540,15);
  explanation();
  motherButton.display();
  fatherButton.display();
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
  text(explanation, 515, 410);
}

function mouseClicked(){
  motherButton.clicked();
  fatherButton.clicked();
  childButton.clicked(child);
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
