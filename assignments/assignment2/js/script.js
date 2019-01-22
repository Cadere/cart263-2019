"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let avatar;
let food = [];
let abundance = 10;

// preload()
//
// Description of preload

function preload() {

}


// setup()
//
// Description of setup

function setup() {
  createCanvas(windowWidth,windowHeight);

  avatar = new Avatar(mouseX,mouseY,64,150,64);

  for(let i = 0; i < abundance; i++){
    food.push(new Food(random(width),random(height),64,random(200,255),16,64));
  }
}


// draw()
//
// Description of draw()

function draw() {
  background(75);
  avatar.update();
  for(let i = 0; i < abundance; i++){
    food[i].update();
    avatar.eating(food[i]);
    food[i].display();
  }
  avatar.display();
}
