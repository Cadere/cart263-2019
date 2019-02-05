/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let $box;
let $apple;
let $machine;

$(document).ready(setup);

function setup(){
  $box = $('#box');
  $machine = $('#machine');
  $apple = $('#apple');

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

  $apple.animate({ "left": "-=400px" }, 2500 )

  $apple.draggable();
  $box.droppable({
    drop: appleDropped
  });
}

function appleDropped(event,ui) {
  ui.draggable.remove();
  // setInterval(chew, 200)
}

// function chew(){
//   if($box.attr('src') === 'assets/images/box-open.png'){
//     $box.attr('src','assets/images/box-closed.png')
//   }
//   else{
//     $box.attr('src','assets/images/box-open.png')
//   }
// }
