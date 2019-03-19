"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let verb = "is";
let firstA = "a";
let secondA = "a";

$(document).ready(function () {
  $.getJSON("data/data.json",dataLoaded)
})

function dataLoaded(data){
  $('.button').button().on('click', function(){
    generateContent(data);
  });
  // let $button = $('<div class = "guess"> </div>')
  // $button.text(label);
  // $button.button();
  // $button.on('click', buttonClicked)
  // $('body').append($button);
}

function generateContent(data){
  $('.description').remove();
  let condiment = getRandomElement(data.condiments);
  if (condiment.charAt(condiment.length-1) === "s"){
    verb = "are";
  }
  else {
    verb = "is";
  }

  let cat = getRandomElement(data.cats);
  let color = getRandomElement(data.colors).color;
  let room = getRandomElement(data.rooms);

  let vowels = "AEIOUaeiou";
  if(vowels.indexOf(cat.charAt(0)) !== -1){
    firstA = "an";
  }
  else{
    firstA = "a";
  }
  if(vowels.indexOf(color.charAt(0)) !== -1){
    secondA = "an";
  }
  else{
    secondA = "a";
  }

  let description = `${condiment} ${verb} like ${firstA} ${cat} in ${secondA} ${color} ${room}.`;
  $('body').append('<p class = "description">'+description+'</p>');
}

function getRandomElement(array){
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}
