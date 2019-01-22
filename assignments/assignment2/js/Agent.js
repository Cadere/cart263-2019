class Agent{
  constructor (x,y,size,color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.active = true;
  }

  display(){
    if(this.active){
      push();
      noStroke();
      fill(this.color);
      ellipse(this.x,this.y,this.size);
      pop();
    }
  }

  overlap(agent){
    if(!this.active){
      return;
    }

    let distance = dist(this.x,this.y,agent.x,agent.y);
    let treshold = this.size/2 + agent.size/2;

    if (distance < treshold){
      return true;
    }
    else{
      return false;
    }
  }

}
