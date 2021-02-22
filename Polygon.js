class Polygon {
    constructor(x, y, width, height){
        (x,y);
        var options = {
            isStatic:false,
        }

        this.image = loadImage("polygon.png");

        polygon = Bodies.circle(50,200,20);
        World.add(world,polygon); 
    }

    display(){
        push();
        imageMode(CENTER)
        image(this.image, polygon.position.x, body.position.y,40,40);
        pop();
    
}
};
