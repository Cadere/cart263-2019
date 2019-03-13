"use strict";

/*****************

Title of Project: purpuseful gracelessness
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
//variables for the images
let headImage = [];
let armImage = [];
let legImage = [];
let bodyImage = [];

//variables for the arrays of parts: images + keywords
let allHeads = [];
let allArms = [];
let allLegs = [];
let allBodies = [];

//variables for the selected parts
let head;
let arm;
let leg;
let body;

//a variable for the music
let lullaby = new Audio("assets/sounds/lullaby.wav");

//variable for the creature
let creature;

//variables for the size of the Creature
let creatureSize = 500;

//a variable for the font
let corsiva;

//arrays for the words of the little story
//each array will be appended to an array of limbs
let protagAdj = ["fancy", "skinny", "stocky", "silly", "witty", "clumsy", "puny", "teeny", "noisy", "funny", "cocky", "bratty"];
let encounterAdj = ["itchy", "scary", "dirty", "busy", "dirty", "cozy", "ugly", "crazy", "weepy", "oozy", "tidy", "bouncy", "tipsy"];
let endAdj = ["messy", "angry", "gooey", "dreamy", "perky", "sulky", "weary", "happy", "jolly", "scruffy", "dizzy", "funny"];
let protagNoun = ["boy", "girl", "bird", "dog", "cat", "fairy", "worm", "bug", "elf", "frog", "knight", "mouse"];
let protagPronoun = ["he", "she","he", "she","he", "she","he", "she","he", "she","he", "she"];
let encounterNoun = ["monster", "witch", "man", "woman", "prince", "princess", "queen", "king", "horse", "snake", "flower", "tree"];
let offerNoun = ["help", "a wish", "a game", "a greeting", "a name", "a fight", "cards", "a story", "a chance", "friendship","a favor", "a candy"]
let verb = [
  "uttered thanks",
  "accepted gently",
  "refused roughly",
  "smiled widely",
  "screamed loudly",
  "groaned meanly",
  "gave a hug",
  "began to play",
  "sang a song",
  "danced in joy",
  "clenched fists",
  "became a friend"
];
let colorWordArm = ["dashing","dashing","dashing","singing","singing","singing","running","running","running","bouncing","bouncing","bouncing"]
let colorWordHead = ["road", "road", "road", "path", "path", "path", "roof", "roof", "roof", "boat", "boat","boat"];
let colorWordLeg = ["saw", "saw", "saw", "met", "met", "met", "felt", "felt", "felt", "imagined", "imagined", "imagined"];
let colorWordBody = ["offered","offered","offered", "asked for", "asked for", "asked for", "traded", "traded", "traded", "prayed for", "prayed for", "prayed for"]

//arrays for the colors
let primaryColor = ["gold","gold","gold","green","green","green","pink","pink","pink","teal","teal","teal"];
let secondaryColor = ["green", "pink", "teal", "gold", "pink", "teal", "gold", "green", "teal", "gold", "green", "pink"];

//variables for the fountains
//intro fountain
let introFountain;
let introParticle;

//a variable for the switch statement
let state = 'Intro';

//a variable for the colors to use for the background
let colorState = 1;





function preload(){
  corsiva = loadFont("assets/fonts/MTCORSVA.TTF");
  headImage = [
    loadImage("assets/images/h-gold-green.png"),
    loadImage("assets/images/h-gold-pink.png"),
    loadImage("assets/images/h-gold-teal.png"),
    loadImage("assets/images/h-green-gold.png"),
    loadImage("assets/images/h-green-pink.png"),
    loadImage("assets/images/h-green-teal.png"),
    loadImage("assets/images/h-pink-gold.png"),
    loadImage("assets/images/h-pink-green.png"),
    loadImage("assets/images/h-pink-teal.png"),
    loadImage("assets/images/h-teal-gold.png"),
    loadImage("assets/images/h-teal-green.png"),
    loadImage("assets/images/h-teal-pink.png")
  ]
  armImage = [
    loadImage("assets/images/a-gold-green.png"),
    loadImage("assets/images/a-gold-pink.png"),
    loadImage("assets/images/a-gold-teal.png"),
    loadImage("assets/images/a-green-gold.png"),
    loadImage("assets/images/a-green-pink.png"),
    loadImage("assets/images/a-green-teal.png"),
    loadImage("assets/images/a-pink-gold.png"),
    loadImage("assets/images/a-pink-green.png"),
    loadImage("assets/images/a-pink-teal.png"),
    loadImage("assets/images/a-teal-gold.png"),
    loadImage("assets/images/a-teal-green.png"),
    loadImage("assets/images/a-teal-pink.png")
  ]
  legImage = [
    loadImage("assets/images/l-gold-green.png"),
    loadImage("assets/images/l-gold-pink.png"),
    loadImage("assets/images/l-gold-teal.png"),
    loadImage("assets/images/l-green-gold.png"),
    loadImage("assets/images/l-green-pink.png"),
    loadImage("assets/images/l-green-teal.png"),
    loadImage("assets/images/l-pink-gold.png"),
    loadImage("assets/images/l-pink-green.png"),
    loadImage("assets/images/l-pink-teal.png"),
    loadImage("assets/images/l-teal-gold.png"),
    loadImage("assets/images/l-teal-green.png"),
    loadImage("assets/images/l-teal-pink.png")
  ]
  bodyImage = [
    loadImage("assets/images/b-gold-green.png"),
    loadImage("assets/images/b-gold-pink.png"),
    loadImage("assets/images/b-gold-teal.png"),
    loadImage("assets/images/b-green-gold.png"),
    loadImage("assets/images/b-green-pink.png"),
    loadImage("assets/images/b-green-teal.png"),
    loadImage("assets/images/b-pink-gold.png"),
    loadImage("assets/images/b-pink-green.png"),
    loadImage("assets/images/b-pink-teal.png"),
    loadImage("assets/images/b-teal-gold.png"),
    loadImage("assets/images/b-teal-green.png"),
    loadImage("assets/images/b-teal-pink.png")
  ]
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  //creates the limbs with the proper arrays of images and words
  createLimbs(allHeads, headImage, primaryColor, secondaryColor, colorWordHead, protagNoun, protagPronoun);
  createLimbs(allArms, armImage, primaryColor, secondaryColor, colorWordArm, protagAdj, encounterNoun);
  createLimbs(allLegs, legImage, primaryColor, secondaryColor, colorWordLeg, encounterAdj, verb);
  createLimbs(allBodies, bodyImage, primaryColor, secondaryColor, colorWordBody, endAdj, offerNoun);
  //creates the creature from a random element in each array of limbs
  createCreature();
  createIntroFountain();
}

$(document).ready(function(){
  //initially displays a button showing an invitation to begin the game
  $('#intro').button().on('click', function(){
    //clicking on the button removes it and calls the function startGame
    $('#intro').remove();
    startGame();
  })
} )

//startGame()
//
//adds the buttons to modify the creature and to sing the song. Switches the state of the game from front page to game
function startGame(){
  addButton("Sing", sing);
  addButton("Change", modifyCreature);
  state = 'Game';
}

//displays the canvas elements of the game
function draw(){
  //the landscape is drawn regardless of the state of the game
  drawLandscape();
  switch (state){

    case 'Intro':
    displayIntro();
    break;

    case 'Game':
    displayGame();
    break;
  }
}

function displayIntro(){
  let fountainVector = createVector(width/2, 0);
  runIntroFountain(fountainVector);
}

//displayGame()
//
//displays the creature, the song's text, and plays the lullaby
function displayGame(){
  creature.display();
  creature.displaySong();
  lullaby.loop = true;
  lullaby.volume = 0.5;
  lullaby.play();
}

//createLimbs()
//
//creates an array of the stated limb with the appropriate image and word arrays
function createLimbs(limb, image, primary, secondary, colorword, firstword, secondword){
  for (var i = 0; i < 12; i++){
    limb.push(new Limb(image[i], primary[i], secondary[i], colorword[i], firstword[i], secondword[i]));
  }
}

//createCreature()
//
//Creates a creature object with a random element from each limb array
//Then calls the creature method buildSong() to construct the story that will be displayed and sung
function createCreature(){
  head = allHeads[Math.floor(Math.random() * allHeads.length)];
  arm = allArms[Math.floor(Math.random() * allArms.length)];
  leg = allLegs[Math.floor(Math.random() * allLegs.length)];
  body = allBodies[Math.floor(Math.random() * allBodies.length)];
  creature = new Creature(head, arm, leg, body);
  creature.buildSong();
  creature.checkColor();
}

//modifyCreature()
//
//Modifies the creature object by assigning it a new random limb from each array and building a new song
function modifyCreature(){
  head = allHeads[Math.floor(Math.random() * allHeads.length)];
  arm = allArms[Math.floor(Math.random() * allArms.length)];
  leg = allLegs[Math.floor(Math.random() * allLegs.length)];
  body = allBodies[Math.floor(Math.random() * allBodies.length)];
  creature.modify(head, arm, leg, body);
  creature.buildSong();
}

//sing()
//
//Uses responsiveVoice to sing the song
function sing(){
  responsiveVoice.speak(creature.song, 'US English Female', {volume: 1});
}

//addButton()
//
//appends a button to the body with the specified text and called function
function addButton(label, call){
  let $button = $('<div> </div>')
  //this adds a label to the button
  $button.text(label);
  //this uses jquery ui to make it into a button
  $button.button();
  //this specifies a function for the button to call when clicked
  $button.on('click', call)
  //this appends the button to the body
  $('#buttonC').append($button);
}

//drawLandscape()
//
//draws the landscape from a variety of ellipses and rectangles
function drawLandscape(){
  background("#2f4d7c");
  push();
  noStroke();
  ellipseMode(CENTER);
  fill(95,124,47,150);
  //leftmost background hill
  ellipse(width/8, height*0.5, width*0.7, height*0.6);
  //middle background hill
  ellipse(width*0.7, height*0.5, width*0.6, height*0.55);
  //rightmost background hill
  ellipse(width*1.2, height*0.5, width*0.6, height*0.65);
  fill("#88a056");
  //background paler green: makes the road
  rect(0, height*0.4, windowWidth, windowHeight*0.6);
  fill("#5f7c2f");
  ellipseMode(CENTER);
  //fills the right bottom corner with the same green as the hills
  rect(width/2, height*0.4, width/2,height*0.6);
  //leftmost hill
  ellipse(0,height*0.5,width/2, height/2);
  //middle hill
  ellipse(width*0.6, height/2, width/2, height/2);
  //rightmost hill
  ellipse(width, height/2, width/2, height/3);
  //bottom foreground hill
  ellipse(width*0.4, height, width, height*0.6);
  pop();
}


//createIntroFountain()
//
//this function creates the particle object and the fountain that will use them
function createIntroFountain(){
  introParticle = {
    size: [10,20],
    sizePercent: [0.995],
    angle: [180],
    speed: [1],
    lifetime: [900],
    color: ["#ffffff"],
    rate: [300,150],
    limit: [200],
    dxy: [1,0],
    x: [0.5],
    y:[0.5]
  };

  introFountain = new Fountain(null, introParticle);
}

function runIntroFountain(vector){
  push();
  introFountain.newCoordinates(vector);
  introFountain.Draw();
  introFountain.Create();
  introFountain.Step();
  pop();
}
