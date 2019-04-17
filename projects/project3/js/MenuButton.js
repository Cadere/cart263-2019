//MenuButton constructor
//
//builds a button for the menu
function MenuButton(x,y,width,heigth,animal,locus,position,value,spot){
  this.x = x;
  this.y = y;
  this.value = value;
  this.width = width;
  this.heigth = heigth;
  this.animal = animal;
  this.locus = locus;
  this.position = position;
  this.spot = spot;
}

MenuButton.prototype.display = function(fillColor){
  push();
  noStroke();
  fill(fillColor);
  rect(this.x,this.y,this.width,this.heigth);
  pop();
  push();
  textAlign(LEFT, TOP);
  text(this.value, this.x+5, this.y);
  pop();
}

MenuButton.prototype.clicked = function(){
  if(mouseX > this.x && mouseX < this.x+this.width && mouseY > this.y && mouseY < this.y+this.heigth){
    this.animal.parametersUpdate(this.locus,this.position,this.value,this.spot)
  }
}
