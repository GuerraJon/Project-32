class Box {
  constructor(x, y, width, height){
    (x,y,width,height);
    var options = {
      isStatic:false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

      this.visiblity = 255;
  }

 display (){

   if (this.body.speed > 2){
    this.body.display();
  }
  else{
      World.remove(world,this.body);

      push();
      //shorthand operator
      this.visiblity -= 5; 
      tint(255,this.visiblity);
      var pos =this.body.position;
      rectMode(CENTER);
      fill("cyan");
      rect(pos.x, pos.y, this.width, this.height);
      pop(); 
      
    }
  }

  score(){
    if (this.visiblity<0 && this.visiblity >-105){
        text++;
    }
  }

}