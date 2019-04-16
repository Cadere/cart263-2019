//some variables for the oujabe constructor
let sex = ["m","f"];
let spotColor = ["#f5eb4e","#e1e593","#e5efc0"];

//Oujabe constructor
//
//this is both responsible for creating the little animals
//and holds all the complicated genetics behind
function Oujabe(){
  this.sex = "";
  //this holds the phenotype characteristics that affect the colors
  this.phenotype = "";
  //this holds the phenotype characteristics that do not affect the colors
  this.pattern = "";
  this.letality = false;
  this.albino = false;
  this.genes = {};
  //these variables will be used to display the proper images to reflect the pattern genes present
  this.red = true;
  this.mask = false;
  this.violet = false;
  this.colorSet;
  this.spot = true;
  this.bodySpots = [];
  this.headSpots =  [];
}

//parametersReset();
//
//sets the parameters back to the default values
Oujabe.prototype.parametersReset = function(boolean,spot){
  if(boolean){
    this.genes = {};
  }
  this.phenotype = "";
  this.pattern = "";
  this.letality = false;
  this.albino = false;
  this.red = true;
  this.mask = false;
  this.violet = false;
  this.spot = true;
  this.spotColor;
  if(spot){
    this.bodySpots = [];
    this.headSpots = [];
  }
}

//parametersUpdate();
//
//allows the parameters to update dynamically when they are changed through the drop down menu
Oujabe.prototype.parametersUpdate = function(locus, position, value, spot){
  this.parametersReset(false, spot);
  locus[position] = value;
  this.getPhenotype();
}

//generateRandom();
//
//Creates a brand new oujabe randomly
Oujabe.prototype.generateRandom = function(mOrF){
  this.parametersReset(true,true);
  if(!mOrF){
    this.sex = random(sex);
  }
  else{
    this.sex = mOrF;
  }
  let genesKeys = Object.keys(genetics);
  for(let i = 0; i < genesKeys.length; i++){
    this.genes[genesKeys[i]] = [random(genetics[genesKeys[i]]), random(genetics[genesKeys[i]])];
  }
  this.getPhenotype();
}

Oujabe.prototype.breed = function(mother, father){
  this.parametersReset(true,true);
  this.sex = random(sex);
  let genesKeys = Object.keys(genetics);
  for(let i = 0; i < genesKeys.length; i++){
    this.genes[genesKeys[i]] = [random(mother.genes[genesKeys[i]]), random(father.genes[genesKeys[i]])];
  }
  this.getPhenotype();
}

//getPhenotype();
//
//analyses the present genes to determine what the oujabe's phenotype is
//ie what actually shows up
Oujabe.prototype.getPhenotype = function(){
  this.locusR();
  this.locusF();
  this.locusY();
  this.locusC();
  if(!this.albino){
    this.locusD();
    this.locusB();
    this.locusS();
    if(this.spot){
      this.pickSpots();
    }
  }
  else{
    this.spot = false;
    this.checkLetality;
  }
  this.colorSet = pigmentation[this.phenotype];
}

//locusR()
//
//analyses the R locus to determine the phenotype
//determines if the oujabe has a red or blue head, is either R or r
Oujabe.prototype.locusR = function(){
  let locusR = this.genes.locusR.toString();
  //R is dominant: RR and Rr show the same
  if(locusR.indexOf("R") !== -1){
    this.phenotype += "R";
    //R affects both the colors and their repartition
    this.pattern += "R";
    this.red = true;
  }
  else{
    this.phenotype += "r";
    this.pattern += "r";
    this.red = false;
  }
}

//locusF()
//
//analyses the F locus to determine the phenotype
//determines the amount of carotenoids ie. the intensity of yellows and reds
// is either F, b or w (normally b and w would be written f^b, f^w)
Oujabe.prototype.locusF = function(){
  let locusF = this.genes.locusF.toString();
  //F is dominant
  if(locusF.indexOf("F") !== -1){
    this.phenotype += "F";
    this.spotColor = spotColor[0];
  }
  //b is recessive to F but dominant over w
  else if(locusF.indexOf("b") !== -1){
    this.phenotype += "b";
    this.spotColor = spotColor[1];
  }
  //w is recessive
  else{
    this.phenotype += "w";
    this.spotColor = spotColor[2];
  }
}

//locusY()
//
//analyses the Y locus to determine the phenotype
//regulates the amount of melanin, ie, black and blue.
//is either Y or y: y is the "yellow" variant and turns green areas yellower and black to grey
Oujabe.prototype.locusY = function(){
  let locusY = this.genes.locusY.toString();
  //Y is dominant
  if(locusY.indexOf("Y") !== -1){
    this.phenotype += "Y";
  }
  //y is recessive
  else{
    this.phenotype += "y";
  }
}

//locusC()
//
//analyses the C locus to determine the phenotype
//regulates the amount of melanin, ie black, blue. is the locus of albinism
//is either C, c, V, or Y (normally V and Y would be written c^v and c^y)
//V is the "violet" variant and results in a darker, bluer oujabe with violet tints
//Y is the "cinnamon" variant and results in a yellower, browner oujabe
Oujabe.prototype.locusC = function(){
  let locusC = this.genes.locusC.toString();
  //C is dominant
  if(locusC.indexOf("C") !== -1){
    this.phenotype += "C";
    this.violet = false;
  }
  //V is codominant with c but dominant over y
  else if(locusC.indexOf("V") !== -1){
    //V is partially dominant with c
    this.pattern += "V";
    this.violet = true;
    if(locusC.indexOf("c") !== -1){
      //the resulting "v" phenotype is called lilac
      this.phenotype += "v";
      this.albino = true;
    }
    else{
      this.phenotype += "V";
    }
  }
  else if(locusC.indexOf("Y") !== -1){
    this.violet = false;
    //Y is partially dominant with c
    if(locusC.indexOf("c") !== -1){
      //the resulting "y" phenotype is called cream
      this.phenotype += "y";
      this.albino = true;
    }
    else{
      this.phenotype += "Y";
    }
  }
  //c is recessive
  else{
    this.violet = false;
    this.phenotype += "c";
    this.albino = true;
  }
}

//locusD()
//
//analyses to D locus to determine the phenotype
//regulates the amount of melanin: is the locus of hypermelanism
//can be either D or d, d being the "dark" gene
Oujabe.prototype.locusD = function(){
  let locusD = this.genes.locusD.toString();
  //genes on the D locus are codominant
  if(locusD.indexOf("D") !== -1){
    if(locusD.indexOf("d") !== -1){
      //in this case the oujabe is either dD or Dd, called "dark"
      this.phenotype += "d";
    }
    else{
      //in this case the oujabe is DD
      this.phenotype += "D";
    }
  }
  else{
    //in this case the oujabe is dd, called "double Dark"
    this.phenotype += "a";
  }
}

//locusB()
//
//analyses the B locus to determine the phenotype
//is responsible for the presence of absence of a black mask, is either B (no mask) or b (mask)
Oujabe.prototype.locusB = function(){
  let locusB = this.genes.locusB.toString();
  //b is simple dominant over the standard patternless B
  if(locusB.indexOf("b") !== -1){
    //B doesn't affect the color but its distribution, so its phenotype is written on the pattern attribute
    this.pattern += "b";
    this.mask = true;
  }
  else{
    this.pattern += "B";
    this.mask = false;
  }
}

//locusS()
//
//analyses the S locus to determine the phenotype
//responsible for white spots: can be S (no spots), m, i, or s (different spotting patterns)
Oujabe.prototype.locusS = function(){
  let locusS = this.genes.locusS.toString();
  //everything in the S locus is codominant because I love to make my life complicated
  if(locusS.indexOf("S") !== -1){
    if(locusS.indexOf("m") !== -1){
      //here the Oujabe is Sm (sadomasochist, right?)
      this.pattern += "m";
    }
    else if(locusS.indexOf("i") !== -1){
      //here the Oujabe is Si
      this.pattern += "i";
    }
    else if(locusS.indexOf("s") !== -1){
      //here the Oujabe is Ss
      this.pattern += "s";
    }
    else{
      this.spot = false;
    }
  }
  else if(locusS.indexOf("m") !== -1){
    if(locusS.indexOf("i") !== -1){
      //here the Oujabe is mi
      this.pattern += "mi";
    }
    else if(locusS.indexOf("s") !== -1){
      //here the Oujabe is ms
      this.pattern += "ms";
    }
    else{
      //here the Oujabe is mm
      this.pattern += "M";
    }
  }
  else if(locusS.indexOf("i") !== -1){
    if(locusS.indexOf("s") !== -1){
      //here the Oujabe is is
      this.pattern += "is";
    }
    else{
      //here the Oujabe is ii
      this.pattern += "I";
    }
  }
  else{
    //here the oujabe is not S, m, or i, and so it is ss
    this.pattern += "ss"
    //ss is homozygous lethal
    this.letality = true;
  }
}

//pickSpots()
//
//assigns spot images to the oujabe
Oujabe.prototype.pickSpots = function(){
  let value = Math.floor(random(2));
  let valueHomo = value+1;
  if(this.pattern.indexOf("m") !== -1){
    this.bodySpots.push(sMantle[valueHomo]);
    this.headSpots.push(sHeadMantle[valueHomo]);
  }
  if(this.pattern.indexOf("M") !== -1){
    this.bodySpots.push(sMantle[value]);
    this.headSpots.push(sHeadMantle[value]);
  }
  if(this.pattern.indexOf("i") !== -1){
    this.bodySpots.push(sSpeckle[valueHomo]);
    this.headSpots.push(sHeadSpeckle[valueHomo]);
  }
  if(this.pattern.indexOf("I") !== -1){
    this.bodySpots.push(sSpeckle[value]);
    this.headSpots.push(sHeadSpeckle[value]);
  }
  if(this.pattern.indexOf("s") !== -1){
    this.bodySpots.push(sLeuc[value]);
    this.headSpots.push(sHeadLeuc[value]);
  }
}

//checkLetality()
//
//in the case albino is true, locusS is not checked
//but it is still possible that the oujabe is ss, which is homozygous lethal
//this simply checks if locusS is "ss"
Oujabe.prototype.checkLetality = function(){
  let locusS = this.genes.locusS.toString();
  if(locusS === "ss"){
    this.letality = true;
  }
  else{
    this.letality = false;
  }
}

//textGenesAndPhenotype()
//
//displays the genes and the phenotypes as text
//this only exists for this prototype
Oujabe.prototype.textGenesAndPhenotype = function(name,x,y){
  text(name,x,y);
  text(this.phenotype+" "+this.pattern, x, y+20);
  let genesKeys = Object.keys(genetics);
  for(i=0; i < genesKeys.length; i++){
    text(`${genesKeys[i]}: ${this.genes[genesKeys[i]].toString()}`, x,y+40+20*i);
  }
}

//display()
//
//this displays the oujabe
Oujabe.prototype.display = function(x,y){
  push();
  tint(this.colorSet[0]);
  image(body, x, y);
  noTint();
  tint(this.colorSet[1]);
  image(leg, x, y);
  noTint();
  tint(this.colorSet[2]);
  image(stomach, x, y);
  noTint();
  if(this.violet){
    tint(this.colorSet[5]);
    image(violet, x, y);
    noTint();
  }
  if(this.mask){
    tint(this.colorSet[6]);
    image(maskLeg, x, y);
    noTint();
  }
  if(this.spot){
    for (let i = 0; i < this.bodySpots.length; i++){
      tint(this.spotColor);
      image(this.bodySpots[i],x,y);
      noTint();
    }
  }
  tint(this.colorSet[3]);
  image(head, x, y);
  noTint();
  tint(this.colorSet[4]);
  image(accent, x, y);
  noTint();
  if(this.mask){
    tint(this.colorSet[6]);
    image(mask, x, y);
    noTint();
    if(this.spot && this.red){
      for(let i = 0; i < this.headSpots.length; i++){
        tint(this.colorSet[3]);
        image(this.headSpots[i],x,y);
        noTint();
      }
    }
    image(whiter, x,y);
  }
  else{
    image(whiteR, x, y);
  }
  if(this.spot && !this.red){
    for(let i = 0; i < this.headSpots.length; i++){
      image(this.headSpots[i],x,y);
    }
  }
  tint(this.colorSet[7]);
  image(hoof, x, y);
  noTint();
  tint(this.colorSet[8]);
  image(eye, x,y);
  noTint();
  pop();
}
