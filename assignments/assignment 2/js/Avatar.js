class Avatar extends Agent {
  constructor (x,y,size,color,maxSize){
    super(x,y,size,color);
    this.maxSize = maxSize;
    this.sizeLoss = 1;
  }

  update (){
    if(!this.active){
      return;
    }

    this.x = mouseX;
    this.y = mouseY;

    this.size = this.size - this.sizeLoss;
    constrain(this.size, 0, this.maxSize);
    if(this.size === 0){
      this.active = false;
    }
  }

}
