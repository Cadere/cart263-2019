//Menu constructor
//
//The menu is used to manually change genes for an oujabe

function Menu(animal, loci, x, y, name){
  this.animal = animal;
  this.loci = loci;
  this.titles = Object.keys(this.loci);
  this.x = x;
  this.y = y;
  this.name = name;
  this.bgFill = "#c3e0af";
  this.buttons = [];
  this.resetButton;
  this.buttonSize = 15;
  this.heigth = 90;
  this.width;
}
//x,y,width,heigth,animal,locus,position,value,spot
Menu.prototype.setup = function(){
  let itX = this.x;
  let itY = this.y;
  for(let i = 0; i < this.titles.length; i++){
    for(let j = 0; j < this.loci[this.titles[i]].length; j++){
      let spot =false;
      if(this.titles[i] === "locusS"){
        spot = true;
      }
      this.buttons.push(new MenuButton(itX,itY+5,this.buttonSize,this.buttonSize,this.animal,this.loci[this.titles[i]][j],this.titles[i],0,spot));
      this.buttons.push(new MenuButton(itX,itY+25,this.buttonSize,this.buttonSize,this.animal,this.loci[this.titles[i]][j],this.titles[i],1,spot));
      itX+=20;
    }
    itX+=15;
  }
  this.resetButton = new MenuButton(itX-10,itY-5,this.buttonSize,this.buttonSize*3,this.animal,"N\nE\nW");
  this.width = itX;
}

Menu.prototype.display = function(){
  this.buttons[0].display(this.activeFill);
  let itX = this.x;
  let itY = this.y;
  push();
  noStroke();
  fill(this.bgFill);
  rect(itX-10,itY-40,this.width,this.heigth);
  fill(0);
  textSize(18);
  textFont(ttLakesLight);
  text(`${this.name}`, itX, itY-24);
  textSize(14);
  text(`phenotype: ${this.animal.phenotype}             pattern: ${this.animal.pattern}`, itX+80, itY-24)
  pop();
  for(let i = 0; i < this.titles.length; i++){
    push();
    textFont(ttLakesBold)
    textAlign(LEFT, BOTTOM);
    text(this.titles[i],itX,itY);
    pop();
    for(let j = 0; j < this.loci[this.titles[i]].length; j++){
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
  this.resetButton.display();
}

Menu.prototype.handleImput = function(){
  for(let i = 0; i < this.buttons.length; i++){
    this.buttons[i].clicked();
  }
  this.resetButton.resetClicked();
}
