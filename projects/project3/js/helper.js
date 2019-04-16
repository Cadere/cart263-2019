//a variety of functions that accomplish simple tasks

//tintThis()
//
//this adds a tint, diplays the image, and then sets the tint back to none so following images are unaffected
function tintThis(image, tint){
  tint(tint);
  image(image, x, y);
  noTint();
}

//rgbToHex()
//
//converts a single number value to its hex equivalent
//taken from some help page online
function rgbToHex(rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

//fullColorHex()
//
//assemble hex values into a full hex string
//taken from some help page online
function fullColorHex(r,g,b){
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red+green+blue;
};

function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
}
