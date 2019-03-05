"use strict";

/*****************

Title of Project: purpuseful gracelessness
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/``
//variables for the images
let head;
let arm;
let leg;
let body;

//variables for the size of the Creature
let creatureSize = 500;

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
  "sang with the "+progtagnist,
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

//a variable that contains the noun of the current protagonist
let protagonist;

function preload(){
  head = [
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
  arm = [
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
  leg = [
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
  body = [
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

}

function draw(){
  background("#bfe97c");
  imageMode(CENTER);
  image(body[2], width/2,height/2,500,500);
  image(leg[7], width/2,height/2,500,500);
  image(arm[10], width/2,height/2,500,500);
  image(head[1], width/2,height/2,500,500);
}
