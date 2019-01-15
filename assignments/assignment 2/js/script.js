"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let avatar;
let food;

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

  avatar = new Avatar(mouseX,mouseY,64,0,64);
  food = new Food(random(width),random(height),64,150,16,64);
}


// draw()
//
// Description of draw()

function draw() {
  background(255);
  avatar.update();
  avatar.eating(food);
  avatar.display();
  food.display();
}
