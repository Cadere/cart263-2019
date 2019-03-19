"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let verb = "is";

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
  let room = getRandomElement(data.rooms);

  let color = getRandomElement(data.colors).color;

  let description = `${condiment} ${verb} like a ${cat} in a ${color} ${room}`;
  $('body').append('<p class = "description">'+description+'</p>');
}

function getRandomElement(array){
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}
