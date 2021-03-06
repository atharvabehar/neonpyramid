class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visiblity = 100;
    World.add(world, this.body);
  }
  display(){
    //console.log(this.body.speed);
    if(this.body.speed < 3){
      var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
    }
    else{
      World.remove(world, this.body);
      this.Visiblity -= 5 
    }
    
  }
  
  score(){
    if (this.Visiblity<0&&this.Visiblity>-500){
      Score += 2;
    }
  }
}