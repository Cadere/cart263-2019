"use strict";

/*****************

Make A Friend! (Purposeful Gracelessness)
Eugene N. Fournier

This project generates an image of a creature from random creature parts and a little story to go with it.
The little story is sung using Responsive Voice.

******************/
let genetics;
let mother;
let father;
let child;

function preload(){
  genetics = loadJSON("data/genetics.json");
}

function setup(){
  mother = new Oujabe();
  mother.generateRandom("f");
  father = new Oujabe();
  father.generateRandom("m");
  console.log("mother", mother.sex, mother.genes);
  console.log("father",father.sex, father.genes);
  child = new Oujabe();
  child.breed(mother, father);
  console.log("child",child.sex, child.genes);
}
