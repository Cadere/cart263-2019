//a variety of functions that accomplish simple tasks

//tintThis()
//
//this adds a tint, diplays the image, and then sets the tint back to none so following images are unaffected
function tintThis(image, tint){
  tint(tint);
  image(image, x, y);
  noTint();
}
