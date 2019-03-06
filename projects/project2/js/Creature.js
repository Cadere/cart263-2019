function Creature(head, arm, leg, body){
  this.head = head;
  this.arm = arm;
  this.leg = leg;
  this.body = body;
}


//displays the parts of the creature
Creature.prototype.display = function(){
  image(this.body.image, width/2, height/2, creatureSize, creatureSize);
  image(this.leg.image, width/2, height/2, creatureSize, creatureSize);
  image(this.arm.image, width/2, height/2, creatureSize, creatureSize);
  image(this.head.image, width/2, height/2, creatureSize, creatureSize);
}

//modify() changes the reference of the limbs
Creature.prototype.modify = function(head, arm, leg, body){
  this.head = head;
  this.arm = arm;
  this.leg = leg;
  this.body = body;
}
