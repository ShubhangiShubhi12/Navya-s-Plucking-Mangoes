class Stone{
    constructor(x,y,radius){
        var options={
            isStatic: false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
		this.y=y;
		this.radius=radius;
        this.body=Bodies.circle(this.x, this.y,radius/2,options);
        this.image=loadImage("stone.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}