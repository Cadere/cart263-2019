"use strict";

/*****************

P3 data extractor
Eugène N. Fournier

In project 3 I will be using a large JSON file with a lot of color values
here I am building a small program that will process images and store the colors of pixels at specific locations

******************/
// this variable is for the x positions of the pixels whose colors we want
//the colors are in the following order: body, leg, belly, head, headaccent, violet, pattern, hoof, eye
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
  "yc","Yy","Yc","Yv","yy","yv",
  "yCD","YYD","YCD","YVD","yYD","yVD",
  "yCd","YYd","YCd","YVd","yYd","yVd",
  "yCa","YYa","YCa","YVa","yYa","yVa"
]

//an array to hold the images
let images = [];
let pictures = [];
let context;

$(document).ready(function(){
  //here i'm hopefully creating a canvas
  let canv = document.createElement('canvas');
  $(canv)
     .attr('id', 'canvas')
     .appendTo('body');

  canv.width = 6000;
  canv.height = 2400;

  context = canv.getContext("2d");

  //creating an array of images
  pictures = [
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image()
  ]
  //giving them sources
  pictures[0].src = 'assets/images/oujabeRdarkface.png';
  pictures[1].src = 'assets/images/oujabeBdarkface.png';
  pictures[2].src = 'assets/images/oujabeRpeachface.png';
  pictures[3].src = 'assets/images/oujabeBpeachface.png';
  pictures[4].src = 'assets/images/oujabeRwhiteface.png';
  pictures[5].src = 'assets/images/oujabeBwhiteface.png';
  //this is an array with the pictures and their id
  images = [
    {phen:"RF", picture: pictures[0]},
    {phen:"rF", picture: pictures[1]},
    {phen:"Rb", picture: pictures[2]},
    {phen:"rb", picture: pictures[3]},
    {phen:"Rw", picture: pictures[4]},
    {phen:"rw", picture: pictures[5]}
  ]

  //loop through the pictures to ensure they are all loaded
  for(let i = 0; i < pictures.length; i++){
    $(pictures[i]).on("load", imagesAllLoaded);
  }
})

//this variable is used to count the number of images that have loaded
let imageLoaded = 0;

//imagesAllLoaded()
//
//increments the imageLoaded variable and calls analyseImages when imageLoaded is equal to the number of images
function imagesAllLoaded(){
  imageLoaded ++;
  if(imageLoaded === pictures.length){
    analyseImages();
  }
}

//it should be noted that the JSON production here is not entirely perfect
//as it leave an extra comma after the last object
//I opted not to fix this because while I was still trying to make sure everything worked 
//and that nothing had a wrong name or similar problem
//the extra comma was superbly useful in helping me see really fast if I had, actually, pasted the new JSON file 
//over the version I was trying to replace
//in order to fix this I would add a counter that would increment for each set of pixels
//and only add the comma if this counter is <pictures.length*phenotype.length
function analyseImages(){
  //basically this program is trying to build a json file in a kinda ugly way
  let futureJSON = "{\n"
  for(let i=0; i<images.length; i++){
    //I draw the image to the canvas
    context.drawImage(images[i].picture,0,0);
    //the index will iterate through an array of strings
    let index = 0;
    //this loop moves the set of pixels to the next line of the grid
    for(let j=0; j<lines; j++){
      //this loop moes the set of pixels to the next column on the grid
      for(let k=0; k<columns; k++){
        //the name of the set of pixels is taken from one of the image object attributes
        //plus a string from an array index iterates through
        let name = images[i].phen + phenotype[index];
        //the name of the pixel array is added to the would-be json string
        futureJSON += `"${name}" : [`
        //this loop iterates through the pixels
        for(let l=0; l<pixelX.length; l++){
          //I get the data from the specific pixel on the canvas
          let pixel = context.getImageData(pixelX[l]+distanceX*k, pixelY[l]+distanceY*j, 1,1);
          //full color hex converts the rgb value to a hex
          futureJSON += `"#${fullColorHex(pixel.data[0],pixel.data[1],pixel.data[2])}"`
          //I add a comma to the json string if it's not the last pixel
          if(l < pixelX.length-1){
            futureJSON += ","
          }
        }
        //I close the array in the json string and increment the index
        futureJSON +="], \n"
        index ++;
      }
    }
  }
  futureJSON += "\n}"
  console.log(futureJSON);
}

//got these two functions off stackexchange
//this one converts a single number to hex
function rgbToHex(rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

//this one assembles the hex values to make a full hex code
function fullColorHex(r,g,b){
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red+green+blue;
};
