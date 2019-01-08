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
  color: "#55cccc",
  vy:0,
  vx:0,
  maxSpeed: 10,
  minSpeed: 1,
  speed:5,
  angle:0,
  noiseValue:0.1,
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
  initializeFood();
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

//initializeFood();
//
//Attributes a random position to the food item
function initializeFood(){
  food.x = random(0,width);
  food.y = random(0,height);
  food.angle = random(0,TWO_PI);
  food.speed = food.maxSpeed;
}

//updateFood();
//
//calls initializeFood() if eating() is true
function updateFood(){
  if(eating()){
    initializeFood();
  }
  moveFood();
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

//moveFood();
//
//updates the food position
function moveFood(){
  randomizeFood();
  //calculate velocity
  food.vx = food.speed*cos(food.angle);
  food.vy = food.speed*sin(food.angle);
  // Update position with velocity
  food.x += food.vx;
  food.y += food.vy;
  // Constrain y position to be on screen
  food.y = constrain(food.y,0,height);
  food.x = constrain(food.x,0,width);
  foodBounce();
}

//foodBounce()
//
// checks if the food has has touched the edges of the screen and if yes
//reverts the angle so that the food bounces off the edge
function foodBounce(){
  // Check for touching upper or lower edge and reverse velocity if so
  if (food.y === 0 || food.y  === height) {
    food.angle = -food.angle;
  }
  if (food.x === 0 || food.x === width) {
    food.angle += PI;
  }
}

//randomizeFood()
//
//this function randomizes the value of the food's speed and angle
function randomizeFood(){
  food.speed = map(noise(food.noiseValue), 0, 1, food.minSpeed, food.maxSpeed);
  food.angle += map(noise(food.noiseValue), 0, 1, -PI/8, PI/8);
  food.noiseValue += 0.1;
}
