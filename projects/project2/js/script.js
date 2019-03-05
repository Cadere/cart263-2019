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
}
