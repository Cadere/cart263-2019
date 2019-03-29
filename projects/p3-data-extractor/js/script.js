"use strict";

/*****************

P3 data extractor
Eugène N. Fournier

In project 3 I will be using a large JSON file with a lot of color values
here I am building a small program that will process images and store the colors of pixels at specific locations

******************/
// this variable is for the x positions of the pixels whose colors we want
//the colors are in the following order: body, leg, belly, head, head2, violet, pattern, hoof, eye
pixelX = [513,610,394,282,154,537,187,198,136];
//this is the variable for the y positions of the pixels whose colors we want
pixelY = [313,507,396,69,147,220,283,576,97];

//this variable is for the phenotype names of each little creature in the image from which we extract colors
phenotype = [
  "yc","Yy","YC","Yv","yy","yN",
  "yCD","YYD","YCD","YVD","yYD","YxD",
  "yCd","YYd","YCd","YVd","yYd","Yxd",
  "yCa","YYa","YCa","YVa","yYa","Yxd"
]

//an array to hold the images
let images = [];

function preload(){
  images = [
    {phen:"RF", image: loadImage("assets/images/oujabeBdarkface.png")},
    {phen:"rF", image: loadImage("assets/images/oujabeRdarkface.png"})
  ]
}

function setup(){
  
}

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
