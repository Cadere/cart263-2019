"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

$(document).ready(setup);

function setup(){
  setInterval(update,500);
  $('span').on('click',spanClicked);
}

function update(){
  console.log("update!");
  $('span').each(updateSpan);
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
