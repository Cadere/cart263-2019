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
  this.buttons = [];
  this.buttonSize = 15;
}
//x,y,width,heigth,animal,locus,position,value,spot
Menu.prototype.setup = function(){
  let itX = this.x;
  let itY = this.y;
  for(let i = 0; i < this.titles.length; i++){
    for(let j = 0; j < this.loci[this.titles[i]].length; j++){
      this.buttons.push(new MenuButton(itX,itY+5,this.buttonSize,this.buttonSize,this.animal,this.titles[i],0,this.loci[this.titles[i]][j],false));
      this.buttons.push(new MenuButton(itX,itY+25,this.buttonSize,this.buttonSize,this.animal,this.titles[i],1,this.loci[this.titles[i]][j],false));
      itX+=20;
    }
    itX+=15;
  }
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
      // push();
      // noStroke();
      // this.setFill(i,j,0);
      // rect(itX,itY+5,15,15);
      // this.setFill(i,j,1);
      // rect(itX,itY+30,15,15);
      // pop();
      // push();
      // textAlign(LEFT, TOP);
      // text(this.loci[this.titles[i]][j], itX+4, itY+5);
      // text(this.loci[this.titles[i]][j], itX+4, itY+30);
      // pop();
      itX+=20;
    }
    itX+=15;
  }
  for(let i = 0; i < this.buttons.length; i++){
    push();
    this.buttons[i].setFill();
    this.buttons[i].display();
    pop();
  }
}

Menu.prototype.handleImput = function(){
  for(let i = 0; i < this.buttons.length; i++){
    this.buttons[i].clicked();
  }
}
