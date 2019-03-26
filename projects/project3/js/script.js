"use strict";

/*****************

Make A Friend! (Purposeful Gracelessness)
Eugene N. Fournier

This project generates an image of a creature from random creature parts and a little story to go with it.
The little story is sung using Responsive Voice.

******************/
let genetics;
let sex = ["m","f"];
let demoOujabe;

function preload(){
  genetics = loadJSON("data/genetics.json");
}

function setup(){
  demoOujabe = new Oujabe();
  demoOujabe.generateRandom();
  console.log(demoOujabe.sex, demoOujabe.genes);
}
