class Food extends Agent {
  constructor(x,y,size,color,minSize,maxSize){
    super(x,y,random(minSize,maxSize),color);
    this.minSize = minSize;
    this.maxSize = maxSize;
  }

  reset(){
    this.size = random(this.minSize,this.maxSize);
    this.x = random(width);
    this.y = random(height);
  }
}
