function Creature(head, arm, leg, body){
  this.head = head;
  this.arm = arm;
  this.leg = leg;
  this.body = body;
}

Creature.prototype.display = function(){
  image(this.body.image, width/2, height/2, creatureSize);
  image(this.leg.image, width/2, height/2, creatureSize);
  image(this.arm.image, width/2, height/2, creatureSize);
  image(this.head.image, width/2, height/2, creatureSize);
}
