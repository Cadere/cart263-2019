"use strict";
/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let animals = [
  "aardvark",
  "alligator",
  "alpaca",
  "antelope",
  "ape",
  "armadillo",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "bison",
  "boar",
  "buffalo",
  "bull",
  "camel",
  "canary",
  "capybara",
  "cat",
  "chameleon",
  "cheetah",
  "chimpanzee",
  "chinchilla",
  "chipmunk",
  "cougar",
  "cow",
  "coyote",
  "crocodile",
  "crow",
  "deer",
  "dingo",
  "dog",
  "donkey",
  "dromedary",
  "elephant",
  "elk",
  "ewe",
  "ferret",
  "finch",
  "fish",
  "fox",
  "frog",
  "gazelle",
  "gila monster",
  "giraffe",
  "gnu",
  "goat",
  "gopher",
  "gorilla",
  "grizzly bear",
  "ground hog",
  "guinea pig",
  "hamster",
  "hedgehog",
  "hippopotamus",
  "hog",
  "horse",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "kangaroo",
  "koala",
  "lamb",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lynx",
  "mandrill",
  "marmoset",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mountain goat",
  "mouse",
  "mule",
  "muskrat",
  "mustang",
  "mynah bird",
  "newt",
  "ocelot",
  "opossum",
  "orangutan",
  "oryx",
  "otter",
  "ox",
  "panda",
  "panther",
  "parakeet",
  "parrot",
  "pig",
  "platypus",
  "polar bear",
  "porcupine",
  "porpoise",
  "prairie dog",
  "puma",
  "rabbit",
  "raccoon",
  "ram",
  "rat",
  "reindeer",
  "reptile",
  "rhinoceros",
  "salamander",
  "seal",
  "sheep",
  "shrew",
  "silver fox",
  "skunk",
  "sloth",
  "snake",
  "squirrel",
  "tapir",
  "tiger",
  "toad",
  "turtle",
  "walrus",
  "warthog",
  "weasel",
  "whale",
  "wildcat",
  "wolf",
  "wolverine",
  "wombat",
  "woodchuck",
  "yak",
  "zebra"
];
let correctAnimal;
let answers = [];
const NUM_OPTIONS = 5;
let score = 0;
let $scoreboard;

$(document).ready(function(){
  $('#starter').on('click', function(){
    $('#starter').remove();
    startGame();
    if (annyang) {
      // Let's define our first command. First the text we expect, and then the function it should call
      var commands = {
        'I give up': function() {
          $('.guess').each(function(){
            if ($(this).text() === correctAnimal){
              $(this).effect('shake');
            }
          })
          score = 0;
          updateScore();
          setTimeout(restart, 1000);
        },

        'Say it again': function(){
          speakAnimal(correctAnimal);
        },

        'I think it is *guess': function(guess){
          vocalGuess(guess);
        }
      }
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  })
});

function startGame(){
  createScoreboard();
  newRound();
}

function addButton(label){
  let $button = $('<div class = "guess"> </div>')
  $button.text(label);
  $button.button();
  $button.on('click', buttonClicked)
  $('body').append($button);
}

function buttonClicked(){
  if ($(this).text() === correctAnimal) {
    score++
    updateScore();
    restart();
  }
  else {
    speakAnimal(correctAnimal);
    $('this').effect('shake');
    score = 0;
    updateScore();
  }
}

function newRound(){
  answers = [];
  for(let i = 0; i < NUM_OPTIONS; i++){
    let guess = animals[Math.floor(Math.random() * animals.length)]
    answers.push(guess);
    addButton(guess);
  }
  correctAnimal = answers[Math.floor(Math.random()*answers.length)];
  speakAnimal(correctAnimal);
}

function speakAnimal(name) {
  let reverseName = name.split('').reverse().join('');
  let options = {
    rate: Math.random(),
    pitch: Math.random()
  }
  responsiveVoice.speak(reverseName, "UK English Male", options);
}

function restart(){
  $('.guess').remove();
  setTimeout(newRound,1000);
}

function vocalGuess(guess){
  if (guess === correctAnimal) {
    score++;
    updateScore();
    restart();
  }
  else {
    speakAnimal(correctAnimal);
    $('.guess').effect('shake');
    score = 0;
    updateScore();
  }
}

function createScoreboard(){
  $scoreboard = $('<div class = "score"> </div>');
  $scoreboard.text(score+ ' consecutive good answers');
  $('body').append($scoreboard);
}

function updateScore(){
  $scoreboard.text(score+ ' consecutive good answers')
}
