"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let avatar =  {
  x: 0,
  y: 0,
  maxSize: 64,
  size: 64,
  active: true,
  color: "#cccc55"
}

let food = {
  x: 0,
  y: 0,
  size: 32,
  color: "#55cccc"
}

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
  foodPosition();
  noCursor();

}


// draw()
//
// Description of draw()

function draw() {
  background(0);
  updateAvatar();
  updateFood();
  displayAvatar();
  displayFood();
}

//updateAvatar()
//
//updates the avatar's size and position as long as the size is above 0
function updateAvatar() {
  if (avatar.size > 0){
    avatarPosition();
    avatarSize();
  }
}

//avatarPosition()
//
// updates the avatar's position to the mouse's current position
function avatarPosition(){
  avatar.x = mouseX;
  avatar.y = mouseY;
}

//avatarSize()
//
//updates the avatar's size with time
function avatarSize(){
  if(eating()){
    avatar.size = avatar.maxSize;
  }
  else{
    avatar.size -- ;
    constrain(avatar.size, 0, avatar.maxSize);
  }
}

//displayAvatar()
//
//displays the avatar as a yellow circle
function displayAvatar(){
  push();
  fill(avatar.color);
  noStroke();
  ellipse(avatar.x,avatar.y,avatar.size);
  pop();
}

//foodPosition();
//
//Attributes a random position to the food item
function foodPosition(){
  food.x = random(0,width);
  food.y = random(0,height);
}

//updateFood();
//
//calls foodPosition() if eating() is true
function updateFood(){
  if(eating()){
    foodPosition();
  }
}

//diplayFood()
//
//displays the food as a circle
function displayFood(){
  push();
  fill(food.color);
  noStroke();
  ellipse(food.x,food.y,food.size);
  pop();
}

//eating()
//
//checks for overlap between the food and the avatar
function eating(){
  let distance = dist(avatar.x,avatar.y,food.x,food.y);
  if (distance < avatar.size+food.size){
    return true;
  }
  else {
    return false;
  }
}
