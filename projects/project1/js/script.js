/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let $box;
let $apple;

$(document).ready(setup);

function setup(){
  $box = $('#box');
  $apple = $('#apple');

  $box.offset({
    top: 200,
    left:0
  })

  $apple.offset({
    top: 300,
    left: 500
  })

  $apple.animate({ "left": "-=200px" }, 1500 )

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
