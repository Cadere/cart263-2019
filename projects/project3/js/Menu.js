//Menu constructor
//
//The menu is used to manually change genes for an oujabe
// let loci = {
//   locusR:["R","r"],
//   locusF:["F","b","w"],
//   locusY:["Y","y"],
//   locusC:["C","V","Y","c"],
//   locusD:["D","d"],
//   locusB:["B","b"],
//   locusS:["S","m","i","s"]
// }

// let lociTitles =  Object.keys(loci);

function Menu(animal, loci, x, y){
  this.animal = animal;
  this.loci = loci;
  this.titles = Object.keys(this.loci);
  this.x = x;
  this.y = y;
  this.bgFill = "#c3e0af";
  this.idleFill = "#f4ffed";
  this.activeFill = this.animal.colorSet[3];
  this.buttons = [];
}
//x,y,width,heigth,handler,locus,position,value,spot
Menu.prototype.setup = function(){
  this.buttons.push(new MenuButton(20,100,15,15,this.animal,this.titles[0],0,this.loci[this.titles[0]][0],false))
}

Menu.prototype.display = function(){
  this.buttons[0].display(this.activeFill);
  let itX = this.x;
  let itY = this.y;
  push();
  noStroke();
  fill(this.bgFill);
  rect(itX-10,itY-15,485,70);
  pop();
  for(let i = 0; i < this.titles.length; i++){
    push();
    textFont(ttLakesBold)
    textAlign(LEFT, BOTTOM);
    text(this.titles[i],itX,itY);
    pop();
    for(let j = 0; j < this.loci[this.titles[i]].length; j++){
      push();
      noStroke();
      this.setFill(i,j,0);
      rect(itX,itY+5,15,15);
      this.setFill(i,j,1);
      rect(itX,itY+30,15,15);
      pop();
      push();
      textAlign(LEFT, TOP);
      text(this.loci[this.titles[i]][j], itX+4, itY+5);
      text(this.loci[this.titles[i]][j], itX+4, itY+30);
      pop();
      itX+=20;
    }
    itX+=15;
  }
}

Menu.prototype.handleImput = function(){
  for(let i = 0; i < this.buttons.length; i++){
    this.buttons[i].clicked();
  }
}

Menu.prototype.setFill = function(i,j,value){
  this.activeFill = this.animal.colorSet[3];
  if(this.animal.genes[this.titles[i]][value] === this.loci[this.titles[i]][j]){
    fill(this.activeFill);
  }
  else{
    fill(this.idleFill);
  }
}
