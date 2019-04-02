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

  mother.textGenesAndPhenotype("MOTHER",15,110);
  mother.display(40,15);
  father.textGenesAndPhenotype("FATHER",15,410);
  father.display(40,315);
  child.textGenesAndPhenotype("CHILD",515,110);
  child.display(540,15);
}
