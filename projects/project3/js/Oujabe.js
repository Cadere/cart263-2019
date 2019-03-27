//some variables for the oujabe constructor
let sex = ["m","f"];

//Oujabe constructor
//
//this is both responsible for creating the little animals
//and holds all the complicated genetics behind
function Oujabe(){
  this.sex = "";
  this.phenotype = "";
  this.letality = false;
  this.genes = {};
}

//generateRandom();
//
//Creates a brand new oujabe randomly
Oujabe.prototype.generateRandom = function(mOrF){
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
}

Oujabe.prototype.breed = function(mother, father){
  this.sex = random(sex);
  let genesKeys = Object.keys(genetics);
  for(let i = 0; i < genesKeys.length; i++){
    this.genes[genesKeys[i]] = [random(mother.genes[genesKeys[i]]), random(father.genes[genesKeys[i]])];
  }
}

//getPhenotype();
//
//analyses the present genes to determine what the oujabe's phenotype is
//ie what actually shows up
Oujabe.prototype.getPhenotype = function(){
  this.locusR();
  this.locusF();
  this.locusY();
}

//locusR()
//
//analyses the R locus to determine the phenotype
Oujabe.prototype.locusR = function(){
  let locusR = this.genes.locusR.toString();
  //R is dominant: RR and Rr show the same
  if(locusR.indexOf("R") !== -1){
    this.phenotype += "R";
  }
  else{
    this.phenotype += "r";
  }
}

//locusF()
//
//analyses the F locus to determine the phenotype
Oujabe.prototype.locusF = function(){
  let locusF = this.genes.locusF.toString();
  //F is dominant
  if(locusF.indexOf("F") !== -1){
    this.phenotype += "F";
  }
  //b is recessive to F but dominant over w
  else if(locusF.indexOf("b") !== -1){
    this.phenotype += "b";
  }
  //w is recessive
  else{
    this.phenotype += "w";
  }
}

//locusY()
//
//analyses the Y locus to determine the phenotype
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
