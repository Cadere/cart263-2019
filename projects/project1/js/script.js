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
let moneyValue = 1;
let hunger = 1;

$(document).ready(setup);

function setup(){
  $box = $('#box');
  $machine = $('#machine');
  $apple = $('#apple');
  $moneyBar = $( "#moneybar" ),
  $moneyLabel = $( ".money-label" );
  $hungerBar = $("#hungerbar");
  $hungerLabel = $(".hunger-label");

  $moneyBar.progressbar({
    value: moneyValue,
    change: function() {
      $moneyLabel.text("Money needed to leave");
    },
    complete: function() {
      moneyLabel.text( "Complete!" );
    }
  });

  $hungerBar.progressbar({
    value: hunger,
    change: function() {
      console.log("hunger");
      $hungerLabel.text("Hunger");
    },
    complete: function() {
      let hungerbarValue = $( ".ui-hungerbar-value" );
      $hungerLabel.text( "HUNGER!!!!" );
      hungerbarValue.css({"background": '#ff5e69'});
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
  $hungerBar.droppable({
    drop: barDropped
  })
}

function appleDropped(event,ui) {
  ui.draggable.hide();
  resetApple = setInterval(newApple, 200);
  moneyValue ++;
  hunger += 10;
  $( "#moneybar" ).progressbar( "value", moneyValue);
  $( "#hungerbar" ).progressbar( "value", hunger);
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

function barDropped(event,ui){
  ui.draggable.hide();
  resetApple = setInterval(newApple,200);
  moneyValue = 0;
  hunger = 0;
  $("#moneybar").progressbar("value",moneyValue);
  $("#hungerbar").progressbar("value",hunger);
}
