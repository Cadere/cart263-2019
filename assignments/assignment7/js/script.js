"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let frequencies = [220.00,246.94,277.18,293.66,329.63,369.99,392.00,200];
let frequency;
let pattern = ["x","o","x","o*","*","*xo","*x","*xo"];

let synth;
let backgroundSynth;
let kick;
let snare;
let hihat;

let patternIndex = 0;

let doPlay = true;

let baseLength = 500;
let noteLength = baseLength;

let red = 255;
let blue = 255;
let green = 255;
let greenValue = 0;


function setup(){
  createCanvas(windowWidth, windowHeight);
  synth = new Pizzicato.Sound({
    source: 'wave',
  });

  kick = new Pizzicato.Sound('assets/sounds/kick.wav');

  hihat = new Pizzicato.Sound('assets/sounds/hihat.wav');

  snare = new Pizzicato.Sound('assets/sounds/snare.wav');

  let lowPassFilter = new Pizzicato.Effects.LowPassFilter({
    frequency: 400,
    peak: 10
  });

  let flanger = new Pizzicato.Effects.Flanger({
    time: 0.45,
    speed: 0.1,
    depth: 0.1,
    feedback: 0.05,
    mix: 0.2
  });

  synth.attack = 0.3;
  synth.release = 0.5;
  synth.addEffect(flanger);
  kick.addEffect(lowPassFilter);
  hihat.addEffect(lowPassFilter);
  snare.addEffect(lowPassFilter);
}

function draw(){
  setColors();
  background(red, green, blue,10);
}

function setColors(){
 red = map(frequency, 200, 395, 0, 255);
 blue = map(noteLength, baseLength, baseLength*5, 0, 255);
 green = map(greenValue, 0, 6, 150, 255);
}

function playNote(){
  frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
  noteLength = baseLength * [Math.random()*5];

  if(frequency === 200){
    synth.stop();
  }
  else{
    synth.frequency = frequency;
    synth.play();
  }
  setTimeout(playNote, noteLength);
  return frequency;
}

function mousePressed(){
  if(doPlay){
    setTimeout(playNote, noteLength);
    setInterval(playDrum, 500);
    doPlay = false;
  }
}

function playDrum(){
  let symbols = pattern[patternIndex];
  greenValue = 0;

  if(symbols.indexOf("x") !== -1){
    kick.play();
    greenValue += 3;
  }
  if(symbols.indexOf("o") !== -1){
    snare.play();
    greenValue += 2;
  }
  if(symbols.indexOf("*") !== -1){
    hihat.play();
    greenValue += 1;
  }

  patternIndex++;
  if(patternIndex === pattern.length){
    patternIndex = 0;
  }
  return greenValue;
}
