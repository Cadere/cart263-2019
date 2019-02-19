/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let $mouth;
let $fly;
let $candy;

let buzzSFX = new Audio("assets/sounds/buzz.mp3");
let crunchSFX = new Audio("assets/sounds/crunch.wav");

$(document).ready(setup);

function setup(){
  $mouth = $('#mouth');
  $fly = $('#fly');
  $candy = $('#candy');

  $fly.draggable();
  $candy.draggable();
  $mouth.droppable({
    drop: flyDropped
  });

  buzzSFX.loop = true;

  $fly.on('mousedown',function () {
    console.log("fly.on");
    buzzSFX.play();
  });
}

function flyDropped(event,ui) {
  ui.draggable.remove();
  setInterval(chew, 200);
  buzzSFX.pause();
  crunchSFX.play();
}

function chew(){
  if($mouth.attr('src') === 'assets/images/mouth-open.png'){
    $mouth.attr('src','assets/images/mouth-closed.png')
    crunchSFX.play();
  }
  else{
    $mouth.attr('src','assets/images/mouth-open.png')
  }
}
