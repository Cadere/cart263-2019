//OujabeDisplay constructor
//
//this takes care of the image set for an oujabe
//and the displaying
function OujabeDisplay(phenotype,pattern){
  //this holds the phenotype characteristics that affect the colors
  this.phenotype = phenotype;
  //this holds the phenotype characteristics that do not affect the colors
  this.pattern = pattern;
  this.body = body;
  this.eye = eye;
  this.head = head;
  this.hoof = hoof;
  this.leg = leg;
  this.stomach = stomach;
  this.mask;
  this.violet;
  this.white;
  this.colorSet = pigmentation[this.phenotype];
}

OujabeDisplay.prototype.pattern = function(){
  
}
