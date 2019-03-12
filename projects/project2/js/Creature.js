function Creature(head, arm, leg, body){
  this.head = head;
  this.arm = arm;
  this.leg = leg;
  this.body = body;
  this.song;
}


//displays the parts of the creature
Creature.prototype.display = function(){
  image(this.body.image, 2*width/3, height/2, creatureSize, creatureSize);
  image(this.leg.image, 2*width/3, height/2, creatureSize, creatureSize);
  image(this.arm.image, 2*width/3, height/2, creatureSize, creatureSize);
  image(this.head.image, 2*width/3, height/2, creatureSize, creatureSize);
}

//modify() changes the reference of the limbs
Creature.prototype.modify = function(head, arm, leg, body){
  this.head = head;
  this.arm = arm;
  this.leg = leg;
  this.body = body;
}

//buildSong() constructs the story from the keywords attached to each limb
Creature.prototype.buildSong = function(){
  this.song = `The ${this.arm.firstword} ${this.head.firstword} was ${this.arm.colorword} on the ${this.head.colorword}
    Soon ${this.head.secondword} ${this.leg.colorword} a ${this.leg.firstword} ${this.arm.secondword}
    The ${this.head.firstword} ${this.body.colorword} ${this.body.secondword}
    The ${this.arm.secondword} ${this.leg.secondword}
    And ${this.head.secondword} was left feeling all ${this.body.firstword}`
}
