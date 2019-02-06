/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

//variables for the images
let $box;
let $apple;
let $machine;
//variables for the progress bars
let $moneyBar;
let $moneyLabel;
let $hungerBar;
let $hungerLabel;
//variable which will contain a function to reset the apple
let resetApple;
//variables for the progress bar values
let moneyValue = 0;
let hunger = 0;
//variables for the sound effects
let crunchSFX = new Audio("assets/sounds/crunch.wav");
let dropSFX = new Audio("assets/sounds/drop.wav");
let hungrySFX = new Audio("assets/sounds/hungry.mp3");
let machineSFX = new Audio("assets/sounds/machine.wav");


$(document).ready(setup);

function setup(){
  //get the main elements from the page
  $box = $('#box');
  $machine = $('#machine');
  $apple = $('#apple');
  $moneyBar = $( "#moneybar" ),
  $moneyLabel = $( ".money-label" );
  $hungerBar = $("#hungerbar");
  $hungerLabel = $(".hunger-label");

  //create a progress bar out of the moneybar div
  $moneyBar.progressbar({
    value: moneyValue,
    //the progress bar shows this text
    change: function() {
      $moneyLabel.text("Money needed to leave");
    },
    //the text changes if the bar is full (but it will never be)
    complete: function() {
      moneyLabel.text( "Complete!" );
    }
  });

  //create a progress bar out of the hungerbar div
  $hungerBar.progressbar({
    value: hunger,
    change: function() {
      $hungerLabel.text("Hunger");
    },
    complete: function() {
      $hungerLabel.text( "I NEED FOOD!!!!" );
    }
  });

  //set the position of the box
  $box.offset({
    top: 200,
    left:0
  })
  //set the position of the machine
  $machine.offset({
    top: 250,
    left: 250
  })
  //set the position of the apple
  $apple.offset({
    top: 300,
    left: 700
  })

  //give the apple a sliding animation over the machine
  //and plays the machine's noise
  appleMove();

  //makes the apple draggable
  $apple.draggable();

  //makes the box droppable
  $box.droppable({
    //when the apple is dropped in the box, this function is called
    drop: appleDropped
  });

  //make the hunger bar droppable : this will allow us to feed our protagonist
  $hungerBar.droppable({
    drop: barDropped
  })

  //this calls a series of effects when the hunger bar is full
  $hungerBar.on( "progressbarcomplete", function( event, ui ) {
    $("body").css("background-color","red");
    $hungerBar.effect("shake", ["down","left"])
    hungrySFX.play();
    $box.droppable('disable');
  } );
}

//this hides and calls a function that resets the apple after certain interval
// it also increases the value of the progress bars
function appleDropped(event,ui) {
  ui.draggable.hide();
  resetApple = setInterval(newApple, 200);
  moneyValue ++;
  hunger += 10;
  dropSFX.play()
  $( "#moneybar" ).progressbar( "value", moneyValue);
  $( "#hungerbar" ).progressbar( "value", hunger);
}

//this resets the apple and clears the interval so that it is not called again
function newApple(){
  $apple.css({
    top: 300,
    left: 700
  });
  $apple.show();
  appleMove();
  clearInterval(resetApple);
}

//this resets the apple in the same way as appleDropped, but also resets the values of both
//progress bars to 0 and changes the background back to white
function barDropped(event,ui){
  hungrySFX.pause();
  ui.draggable.hide();
  resetApple = setInterval(newApple,200);
  moneyValue = 0;
  hunger = 0;
  $("#moneybar").progressbar("value",moneyValue);
  $("#hungerbar").progressbar("value",hunger);
  $("body").css("background-color","white");
  $box.droppable('enable');
  crunchSFX.play();
}

function appleMove(){
  $apple.animate({ "left": "-=400px" }, 2500 );
  machineSFX.play();
}
