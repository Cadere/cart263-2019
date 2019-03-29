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

$(document).ready(function(){
  //here i'm hopefully creating a canvas
  let canv = document.createElement('canvas');
  $(canv)
     .attr('id', 'canvas')
     .width(6000)
     .height(2400)
     .appendTo('body');

  let context = canv.getContext("2d");

  //creating an array of images
  let pictures = [
    new Image(),
    new Image()
  ]
  //giving them sources
  pictures[0].src = 'assets/images/oujabeRdarkface.png';
  pictures[1].src = 'assets/images/oujabeBdarkface.png';
  //I need an id with the images so I made an array of objects with the id and the images
  //I figure I could make these seperate arrays if that's part of the issue
  images = [
    {phen:"RF", picture: pictures[0]},
    {phen:"rF", picture: pictures[1]}
  ]
  //basically this program is trying to build a json file in a kinda ugly way
  let futureJSON = "{"
  //for each image
  for(let i=0; i<images.length; i++){
    //I draw the image to the canvas
    //this is where it starts being problematic, the image is not loaded yet when it gets to this step
    context.drawImage(images[i].picture,0,0);
    //this iterates through an array of strings
    let index = 0;
    //I'm trying to obtain color values for pixels at specific locations on a grid
    //this loop moves the set of pixels to the next line of the grid
    for(let j=0; j<lines; j++){
      //this loop moes the set of pixels to the next column on the grid
      for(let k=0; k<columns; k++){
        //the name of the set of pixels is taken from one of the image object attributes
        //plus a string from an array
        let name = images[i].phen + phenotype[index];
        //the name of the pixel array is added to the would-be json string
        futureJSON += `"${name}" : [`
        //this loop iterates through the pixels
        for(let l=0; l<pixelX.length; l++){
          //I get the data from the specific pixel on the canvas
          //rn this returns only 0 because the image is not loaded
          let pixel = context.getImageData(pixelX[l]+distanceX*k, pixelY[l]+distanceY*j, 1,1);
          //full color hex converts the rgb value to a hex, there does not seem to be any problem with it
          futureJSON += `"#${fullColorHex(pixel.data[0],pixel.data[1],pixel.data[2])}"`
          //I add a comma to the json string if it's not the last pixel
          if(l < pixelX.length-1){
            futureJSON += ","
          }
        }
        //I close the array in the json string and increment the index
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
