"use strict";

/*****************

P3 data extractor
Eugène N. Fournier

In project 3 I will be using a large JSON file with a lot of color values
here I am building a small program that will process images and store the colors of pixels at specific locations

******************/
// this variable is for the x positions of the pixels whose colors we want
//the colors are in the following order: body, leg, belly, head, head2, violet, pattern, hoof, eye
let pixelX = [513,610,394,282,154,537,187,198,136];
//this is the variable for the y positions of the pixels whose colors we want
let pixelY = [313,507,396,69,147,220,283,576,97];

//variables to hold the number of columns and lines
let columns = 6;
let lines = 4;
//variables to hold the distance between columns and lines
let distanceX = 1000;
let distanceY = 600;

//this variable is for the phenotype names of each little creature in the image from which we extract colors
let phenotype = [
  "yc","Yy","YC","Yv","yy","yN",
  "yCD","YYD","YCD","YVD","yYD","YxD",
  "yCd","YYd","YCd","YVd","yYd","Yxd",
  "yCa","YYa","YCa","YVa","yYa","Yxd"
]

//an array to hold the images
let images = [];

// function preload(){
//   images = [
//     {phen:"RF", picture: loadImage("assets/images/oujabeBdarkface.png")},
//     {phen:"rF", picture: loadImage("assets/images/oujabeRdarkface.png")}
//   ]
// }

$(document).ready(function(){
  let canv = document.createElement('canvas');
  $(canv)
     .attr('id', 'canvas')
     .width(6000)
     .height(2400)
     .appendTo('body');

  let context = canv.getContext("2d");

  let pictures = [
    new Image(),
    new Image()
  ]

  pictures[0].src = 'assets/images/oujabeRdarkface.png'
  pictures[1].src = 'assets/images/oujabeBdarkface.png'

  images = [
    {phen:"RF", picture: pictures[0]},
    {phen:"rF", picture: pictures[1]}
  ]

  let futureJSON = "{"
  for(let i=0; i<images.length; i++){
    context.drawImage(images[i].picture,0,0);
    let index = 0;
    for(let j=0; j<lines; j++){
      for(let k=0; k<columns; k++){
        let name = images[i].phen + phenotype[index];
        futureJSON += `"${name}" : [`
        for(let l=0; l<pixelX.length; l++){
          let pixel = context.getImageData(pixelX[l]+distanceX*k, pixelY[l]+distanceY*j, 1,1);
          futureJSON += `"#${fullColorHex(pixel.data[0],pixel.data[1],pixel.data[2])}"`
          if(l < pixelX.length-1){
            futureJSON += ","
          }
        }
        futureJSON +="],"
        index ++;
      }
    }
  }
  console.log(futureJSON);
})

function rgbToHex(rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

function fullColorHex(r,g,b){
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red+green+blue;
};
