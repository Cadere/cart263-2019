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

function Menu(animal, loci){
  this.animal = animal;
  this.loci = loci;
  this.titles = Object.keys(this.loci);
}

Menu.prototype.display = function(){
  let itX = 25;
  let itY = 250;
  push();
  noStroke();
  fill(225);
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
      textAlign(LEFT, TOP);
      rect(itX,itY+5,15,15);
      text(this.loci[this.titles[i]][j], itX+4, itY+5);
      rect(itX,itY+30,15,15);
      text(this.loci[this.titles[i]][j], itX+4, itY+30);
      pop();
      itX+=20;
    }
    itX+=15;
  }
}
