"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let confidential;
let mystery;
let secretsFound = 0;

$(document).ready(setup);

function setup(){
  setInterval(update,500);
  confidential = $('.redacted');
  mystery = $('.secret');
  confidential.on('click',spanClicked);
  mystery.mouseover(mysterySeen);
}

function update(){
  console.log("update!");
  confidential.each(updateSpan);
}

function updateSpan(){
  console.log("update span!")
  let probability = Math.random();
  if (probability < 0.1){
    $(this).removeClass("redacted");
    $(this).addClass("revealed");
  }
}

function spanClicked(){
  $(this).removeClass("revealed");
  $(this).addClass("redacted");
}

function mysterySeen(){
  $(this).removeClass("secret");
  $(this).addClass("found");
  $(this).off();
  secretsFound ++;
  console.log(secretsFound);
  $("#secretCount").text(secretsFound);
}
