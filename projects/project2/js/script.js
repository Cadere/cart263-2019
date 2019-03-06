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

//variable for the creature
let creature;

//variables for the size of the Creature
let creatureSize = 500;

//a variable that contains the noun of the current protagonist with a placeholder value
let protagonist = "hero";

//arrays for the words of the little story
let protagAdj = ["fancy", "skinny", "stocky", "silly", "witty", "clumsy", "puny", "teeny", "noisy", "funny", "cocky", "bratty"];
let encounterAdj = ["itchy", "scary", "dirty", "busy", "dirty", "cozy", "ugly", "crazy", "weepy", "oozy", "tidy", "bouncy", "tipsy"];
let endAdj = ["messy", "angry", "gooey", "dreamy", "perky", "sulky", "weary", "happy", "jolly", "scruffy", "dizzy", "funny"];
let protagNoun = ["boy", "girl", "bird", "dog", "cat", "fairy", "worm", "bug", "elf", "frog", "knight", "mouse"];
let protagPronoun = ["he", "she","he", "she","he", "she","he", "she","he", "she","he", "she"];
let encounterNoun = ["monster", "witch", "man", "woman", "prince", "princess", "queen", "king", "horse", "snake", "flower", "tree"];
let offerNoun = ["help", "a wish", "a game", "a greeting", "a name", "a fight", "cards", "a story", "a chance", "friendship","a favor", "a candy"]
let verb = [
  "thanked the "+protagonist,
  "accepted gently",
  "refused roughly",
  "smiled widely",
  "screamed loudly",
  "groaned meanly",
  "hugged the"+protagonist,
  "played with the "+protagonist,
  "sang with the "+protagonist,
  "danced with the " + protagonist,
  "surprised the "+protagonist,
  "liked the "+protagonist
];
let colorWordArm = ["dashing","dashing","dashing","singing","singing","singing","running","running","running","bouncing","bouncing","bouncing"]
let colorWordHead = ["road", "road", "road", "path", "path", "path", "roof", "roof", "roof", "boat", "boat","boat"];
let colorWordLeg = ["close", "close", "close", "far", "far", "far", "late", "late", "late", "soon", "soon", "soon"];
let colorWordBody = ["offered","offered","offered", "asked for", "asked for", "asked for", "traded", "traded", "traded", "prayed for", "prayed for", "prayed for"]

//arrays for the colors
let primaryColor = ["gold","gold","gold","green","green","green","pink","pink","pink","teal","teal","teal"];
let secondaryColor = ["green", "pink", "teal", "gold", "pink", "teal", "gold", "green", "teal", "gold", "green", "pink"];



function preload(){
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
  createLimbs(allHeads, headImage, primaryColor, secondaryColor, colorWordHead, protagNoun, protagPronoun);
  createLimbs(allArms, armImage, primaryColor, secondaryColor, colorWordArm, protagAdj, encounterNoun);
  createLimbs(allLegs, legImage, primaryColor, secondaryColor, colorWordLeg, encounterAdj, verb);
  createLimbs(allBodies, bodyImage, primaryColor, secondaryColor, colorWordBody, endAdj, offerNoun);
  createCreature();
}

$(document).ready(function(){
  addButton("Change");
} )

function draw(){
  background("#bfe97c");
  imageMode(CENTER);
  creature.display();
}

function createLimbs(limb, image, primary, secondary, colorword, firstword, secondword){
  for (var i = 0; i < 12; i++){
    limb.push(new Limb(image[i], primary[i], secondary[i], colorword[i], firstword[i], secondword[i]));
  }
}

function createCreature(){
  head = allHeads[Math.floor(Math.random() * allHeads.length)];
  arm = allArms[Math.floor(Math.random() * allArms.length)];
  leg = allLegs[Math.floor(Math.random() * allLegs.length)];
  body = allBodies[Math.floor(Math.random() * allBodies.length)];
  creature = new Creature(head, arm, leg, body);
}

function modifyCreature(){
  head = allHeads[Math.floor(Math.random() * allHeads.length)];
  arm = allArms[Math.floor(Math.random() * allArms.length)];
  leg = allLegs[Math.floor(Math.random() * allLegs.length)];
  body = allBodies[Math.floor(Math.random() * allBodies.length)];
  creature.modify(head, arm, leg, body);
}

function addButton(label){
  let $button = $('<div class = "guess"> </div>')
  $button.text(label);
  $button.button();
  $button.on('click', modifyCreature)
  $('body').append($button);
}
