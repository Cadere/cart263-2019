/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let $box;
let $apple;
let $machine;
let $moneyBar;
let $moneyLabel;
let $hungerBar;
let $hungerLabel;
let resetApple;
let moneyValue = 0;

$(document).ready(setup);

function setup(){
  $box = $('#box');
  $machine = $('#machine');
  $apple = $('#apple');
  $moneyBar = $( "#progressbar" ),
  $moneyLabel = $( ".progress-label" );

  $moneyBar.progressbar({
      value: moneyValue,
      change: function() {
        $moneyLabel.text( $moneyBar.progressbar( "value" ) + "$" );
      },
      complete: function() {
        progressLabel.text( "Complete!" );
      }
    });

  $box.offset({
    top: 200,
    left:0
  })

  $machine.offset({
    top: 250,
    left: 250
  })

  $apple.offset({
    top: 300,
    left: 700
  })

  $apple.animate({ "left": "-=400px" }, 2500 );

  $apple.draggable();
  $box.droppable({
    drop: appleDropped
  });
}

function appleDropped(event,ui) {
  ui.draggable.hide();
  resetApple = setInterval(newApple, 200);
  moneyValue ++;
  console.log(moneyValue);
  $( "#progressbar" ).progressbar( "value", moneyValue);
}

function newApple(){
  $apple.css({
    top: 300,
    left: 700
  });
  $apple.show();
  $apple.animate({"left": "-=400px"}, 2500);
  clearInterval(resetApple);
}
