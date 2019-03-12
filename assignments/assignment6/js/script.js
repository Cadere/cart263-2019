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
  console.log(data);

  let condiment = getRandomElement(data.condiments);
  console.log(condiment)
  if (condiment.charAt(condiment.length-1) === "s"){
    verb = "are";
  }
  else {
    verb = "is";
  }
  let cat = getRandomElement(data.cats);
  let room = getRandomElement(data.rooms);
  let description = `${condiment} ${verb} like a ${cat} in a ${room}`;
  $('body').append('<p>'+description+'</p>');
}

function getRandomElement(array){
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}
