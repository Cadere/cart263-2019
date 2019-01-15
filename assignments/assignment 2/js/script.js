"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let avatar;

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

  avatar = new Avatar(mouseX,mouseY,64,255,64);
}


// draw()
//
// Description of draw()

function draw() {
  background(0);
  avatar.update();
  avatar.display();
}
