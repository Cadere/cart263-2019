//button constructor
//
function Button(x,y,buttonText,oujabe){
  this.x = x;
  this.y = y;
  this.buttonText = buttonText;
  this.oujabe = oujabe;
  this.width = 80;
  this.heigth = 20;
}

Button.prototype.display = function(){
  push();
  noStroke();
  fill(200);
  rect(this.x,this.y,this.width,this.heigth);
  pop();
  push();
  textAlign(LEFT, TOP);
  text(this.buttonText, this.x+5, this.y+5);
  pop();
}

Button.prototype.clicked = function(child){
  if(mouseX > this.x && mouseX < this.x+this.width && mouseY > this.y && mouseY < this.y+this.heigth){
    if(child){
      this.oujabe.breed(mother, father);
    }
    else{
    this.oujabe.generateRandom();
    }
  }
}
