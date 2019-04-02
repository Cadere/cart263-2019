"use strict";

/*****************

oujabe breeding game
Eugene N. Fournier


******************/
let mother;
let father;
let child;

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
  // //to test that tint works the right way
  // tint("#549b2c");
  // image(body,15,200);
  //to display the phenotypes and the genes
  //this is only for the prototype so I'm not console.log-ing the proof that i'Ve done work
  mother.textGenesAndPhenotype("mother",15,15);
  father.textGenesAndPhenotype("father",115,15);
  child.textGenesAndPhenotype("child",215,15);
  console.log(pigmentation[child.phenotype]);
  child.display(15,200);
}
