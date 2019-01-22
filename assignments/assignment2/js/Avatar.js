class Avatar extends Agent {
  constructor (x,y,size,color,maxSize){
    super(x,y,size,color);
    this.maxSize = maxSize;
    this.sizeLoss = 0.5;
  }

  update (){
    if(!this.active){
      return;
    }

    this.x = mouseX;
    this.y = mouseY;

    this.size = this.size - this.sizeLoss;
    this.size = constrain(this.size, 0, this.maxSize);
    if(this.size === 0){
      this.active = false;
    }
  }

  eating(agent){
    if(!this.active){
      return;
    }

    if(this.overlap(agent)){
      this.size = constrain(this.size+agent.size,0,this.maxSize);
      agent.reset();
    }
  }

}
