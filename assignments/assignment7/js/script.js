"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let frequencies = [220.00,246.94,277.18,293.66,329.63,369.99,392.00,0];
let pattern = ["x","o","x","o*","*","*xo","*x","*xo"];

let synth;
let kick;
let snare;
let hihat;

let patternIndex = 0;

let doPlay = true;

let baseLength = 500;
let noteLength = baseLength;


function setup(){
  synth = new Pizzicato.Sound({
    source: 'wave',
  });

  kick = new Pizzicato.Sound('assets/sounds/kick.wav');

  hihat = new Pizzicato.Sound('assets/sounds/hihat.wav');

  snare = new Pizzicato.Sound('assets/sounds/snare.wav');
}

function playNote(){
  let frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
  let noteLength = baseLength * [Math.random()*5];

  if(frequency === 0){
    synth.stop();
  }
  else{
    synth.frequency = frequency;
    synth.play();
  }
  setTimeout(playNote, noteLength);
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

  if(symbols.indexOf("x") !== -1){
    kick.play();
  }
  if(symbols.indexOf("o") !== -1){
    snare.play();
  }
  if(symbols.indexOf("*") !== -1){
    hihat.play();
  }

  patternIndex++;
  if(patternIndex === pattern.length){
    patternIndex = 0;
  }
}
