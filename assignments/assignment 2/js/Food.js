class Food extends Agent {
  constructor(x,y,size,color,minSize,maxSize){
    super(x,y,random(minSize,maxSize),color);
    this.minSize = minSize;
    this.maxSize = maxSize;
    this.vy = 0;
    this.vx = 0;
    this.maxSpeed = 10;
    this.minSpeed = 1;
    this.speed =5;
    this.angle =0;
    this.noiseValue = random (0.01,0.2);
  }

  reset(){
    this.size = random(this.minSize,this.maxSize);
    this.x = random(width);
    this.y = random(height);
    food.angle = random(0,TWO_PI);
    food.speed = food.maxSpeed;
  }

  //foodBounce()
  //
  // checks if the food has has touched the edges of the screen and if yes
  //reverts the angle so that the food bounces off the edge
  bounce(){
    // Check for touching upper or lower edge and reverse velocity if so
    if (this.y === 0 || this.y  === height) {
      this.angle = -this.angle;
    }
    if (this.x === 0 || this.x === width) {
      this.angle += PI;
    }
  }

  //randomizeFood()
  //
  //this function randomizes the value of the food's speed and angle
  randomize(){
    this.speed = map(noise(this.noiseValue), 0, 1, this.minSpeed, this.maxSpeed);
    this.angle += map(noise(this.noiseValue), 0, 1, -PI/8, PI/8);
    this.noiseValue += 0.1;
  }

  update(){
    this.randomize();
    //calculate velocity
    this.vx = this.speed*cos(this.angle);
    this.vy = this.speed*sin(this.angle);
    // Update position with velocity
    this.x += this.vx;
    this.y += this.vy;
    // Constrain y position to be on screen
    this.y = constrain(this.y,0,height);
    this.x = constrain(this.x,0,width);
    this.bounce();
  }


}
