function Creature(head, arm, leg, body){
  this.head = head;
  this.arm = arm;
  this.leg = leg;
  this.body = body;
  this.allColors = [this.head.primary, this.arm.primary, this.leg.primary, this.body.primary, this.head.secondary, this.arm.secondary, this.leg.secondary, this.body.secondary];
  this.song;
}


//displays the parts of the creature
Creature.prototype.display = function(){
  push();
  imageMode(CENTER);
  ellipseMode(CENTER);
  fill("#bfe97c");
  noStroke();
  ellipse(2*width/3, height/2+creatureSize/3, 0.8*creatureSize, 0.6*creatureSize);
  image(this.body.image, 2*width/3, height/2, creatureSize, creatureSize);
  image(this.leg.image, 2*width/3, height/2, creatureSize, creatureSize);
  image(this.arm.image, 2*width/3, height/2, creatureSize, creatureSize);
  image(this.head.image, 2*width/3, height/2, creatureSize, creatureSize);
  pop();
}

//modify() changes the reference of the limbs
Creature.prototype.modify = function(head, arm, leg, body){
  this.head = head;
  this.arm = arm;
  this.leg = leg;
  this.body = body;
  this.allColors = [this.head.primary, this.arm.primary, this.leg.primary, this.body.primary, this.head.secondary, this.arm.secondary, this.leg.secondary, this.body.secondary];
}

//buildSong() constructs the story from the keywords attached to each limb
Creature.prototype.buildSong = function(){
  this.song = `The ${this.arm.firstword} ${this.head.firstword} was ${this.arm.colorword} on the ${this.head.colorword},
  Soon ${this.head.secondword} ${this.leg.colorword} a ${this.leg.firstword} ${this.arm.secondword},
  The ${this.head.firstword} ${this.body.colorword} ${this.body.secondword},
  The ${this.arm.secondword} ${this.leg.secondword},
  So ${this.head.secondword} was left feeling all ${this.body.firstword}.`
}

//displaySong() displays the song's text
Creature.prototype.displaySong = function(){
  push();
  textFont(corsiva);
  textAlign(CENTER);
  textSize(30);
  fill(255);
  text(creature.song, width*0.3, height/6);
  pop();
}

//checkColor()
//
//this monstrous method checks the level of match between the monster parts and returns a value that is lowest the better the match
Creature.prototype.checkColor = function(){
  if(this.head.primary === this.arm.primary && this.leg.primary && this.body.primary){
    if(this.head.secondary === this.arm.secondary && this.leg.secondary && this.body.secondary){
      colorState = 0;
      return colorState;
    }
    else{
      colorState = 2;
      return colorState;
    }
  }
  else {
    let gold = 0;
    let green = 0;
    let pink = 0;
    let teal = 0;
    for (let i; i < this.allColors.length; i++){
      if(this.allColors[i] === "gold"){
        gold ++;
      }
      else if(this.allColors[i] === "green"){
        green ++;
      }
      else if(this.allColors[i] === "pink"){
        pink ++;
      }
      else if(this.allColors[i] === "teal"){
        teal ++;
      }
    }
    if(gold || green || pink || teal === 0){
      if (gold && green || gold && pink || gold && teal || green && pink || green && teal || pink && teal === 0){
        colorState = 1;
        return colorState;
      }
      else{
        colorState = 3;
        return colorState;
      }
    }
    else{
      colorState = 4;
      return colorState;
    }
  }
}
