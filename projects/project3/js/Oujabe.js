//Oujabe constructor
//
//this is both responsible for creating the little animals
//and holds all the complicated genetics behind

function Oujabe(){
  this.sex = "";
  this.phenotype;
  this.letality = false;
  this.genes = {};
}

//generateRandom();
//
//Creates a brand new oujabe randomly
Oujabe.prototype.generateRandom = function(){
  this.sex = random(sex);
  let genesKeys = Object.keys(genetics);
  for(let i = 0; i < genesKeys.length; i++){
    this.genes[genesKeys[i]] = random(genetics[genesKeys[i]]) + random(genetics[genesKeys[i]]);
  }
}

//getPhenotype();
//
//analyses the present genes to determine what the oujabe's phenotype is
//ie what actually shows up
Oujabe.prototype.getPhenotype = function(){

}
