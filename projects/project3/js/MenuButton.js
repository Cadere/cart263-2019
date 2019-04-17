//MenuButton constructor
//
//builds a button for the menu
function MenuButton(x,y,width,heigth,animal,value,locusName,position,spot){
  this.x = x;
  this.y = y;
  this.value = value;
  this.width = width;
  this.heigth = heigth;
  this.animal = animal;
  this.locusName = locusName;
  this.locus = this.animal.genes[this.locusName];
  this.position = position;
  this.spot = spot;
  this.idleFill = "#f4ffed";
  this.activeFill = this.animal.colorSet[3];
  this.currentFill = this.idleFill;
}

MenuButton.prototype.display = function(){
  push();
  fill(this.currentFill);
  noStroke();
  rect(this.x,this.y,this.width,this.heigth);
  pop();
  push();
  fill(0);
  textAlign(LEFT, TOP);
  text(this.value, this.x+3, this.y);
  pop();
}

MenuButton.prototype.clicked = function(){
  if(mouseX > this.x && mouseX < this.x+this.width && mouseY > this.y && mouseY < this.y+this.heigth){
    this.animal.parametersUpdate(this.locus,this.position,this.value,this.spot);
  }
}

MenuButton.prototype.resetClicked = function(){
  if(mouseX > this.x && mouseX < this.x+this.width && mouseY > this.y && mouseY < this.y+this.heigth){
    this.animal.generateRandom();
  }
}

MenuButton.prototype.setFill = function(){
  this.activeFill = this.animal.colorSet[3];
  if(this.animal.genes[this.locusName][this.position] === this.value){
    this.currentFill = this.activeFill;
  }
  else{
    this.currentFill = this.idleFill;
  }
}
