"use strict";

/*****************

oujabe breeding game
Eugene N. Fournier


******************/
let genetics;
let mother;
let father;
let child;

let body;

function preload(){
  genetics = loadJSON("data/genetics.json");
  body = loadImage("assets/images/body.png");
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
  //to test that tint works the right way
  tint("#549b2c");
  image(body,15,200);
  //to display the phenotypes and the genes
  //this is only for the prototype so I'm not console.log-ing the proof that i'Ve done work
  mother.textGenesAndPhenotype("mother",15,15);
  father.textGenesAndPhenotype("father",115,15);
  child.textGenesAndPhenotype("child",215,15);
}
