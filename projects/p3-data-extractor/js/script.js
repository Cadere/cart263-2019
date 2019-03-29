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
