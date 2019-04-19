//orders from this menu are only available for children under 12

//Children Menu constructor
//
//Builds a display box and some buttons do display children animals
function ChildrenMenu(x, y, mother, father){
  this.x = x;
  this.y = y;
  this.mother = mother;
  this.father = father;
  //variables for the buttons
  this.bgFill = "#c3e0af";
  this.infoBoxFill = "#93a586";
  this.buttons = [];
  this.AllButton;
  this.buttonSize = 15;
  //variables for the children
  this.numberOfChildren = 3;
  this.children = [];
  //variables for the display
  this.height = 300;
  this.width = 1070;
  this.infoBoxWidth = 170;
  this.cBoxX = this.x+this.infoBoxWidth;
  this.boxWidth = (this.width-this.infoBoxWidth)/this.numberOfChildren;
  this.cBoxHeight = 200;
  this.topEdge = 85;
  this.edge = 15;
  this.inset = 5;
  //variables for the animal display
  this.animalWidth = this.boxWidth-this.edge*2;
  this.animalHeight = this.animalWidth*body.height/body.width;
}

//setup()
//
//creates the menu, this associated animals, and its contents
ChildrenMenu.prototype.setup = function(){
  for(let i = 0; i < this.numberOfChildren; i++){
    this.children.push(new Oujabe());
    this.children[i].breed(this.mother, this.father);
  }
}

//display()
//
//displays the menu and it's contents
ChildrenMenu.prototype.display = function(){
  push();
  noStroke();
  fill(this.bgFill);
  rect(this.x, this.y, this.width, this.height);
  pop();
  this.displayInfoBox();
  for(let i=0;i<this.numberOfChildren;i++){
    this.displayChildBox(i);
    this.children[i].display(this.cBoxX+this.boxWidth*i+this.inset,this.y+this.topEdge*1.25,this.animalWidth,this.animalHeight)
  }
}

//displayInfoBox()
//
//displays the info box and the text in it
ChildrenMenu.prototype.displayInfoBox = function(){
  push();
  noStroke();
  fill(this.infoBoxFill);
  rect(this.x+this.edge, this.y+this.edge, this.infoBoxWidth-this.edge*2, this.height-this.edge*2);
  fill(255);
  textAlign(LEFT, TOP);
  textFont(ttLakesLight);
  textSize(18);
  text("how it works",this.x+this.edge*1.5,this.y+this.edge*1.5);
  textFont(ttLakes);
  textSize(13);
  let description = `LOCUS R\nHead color\nLOCUS F\nRed and yellow pigment\nLOCUS Y\nMelanin dilution\nLOCUS C\nMelanin dilution\nLOCUS D\nHypermelanism\nLOCUS B\nMask patterns\nLOCUS S\nWhite spotting`
  text(description, this.x+this.edge*1.5, this.y+this.edge*3.2);
  pop();
}

//displayChildBox
//
//displays the white rectangle that serves as a background for the children
ChildrenMenu.prototype.displayChildBox = function(i){
  push();
  noStroke();
  fill(255);
  rect(this.cBoxX+this.boxWidth*i, this.y+this.topEdge, this.boxWidth-this.edge, this.cBoxHeight);
  pop();
}
