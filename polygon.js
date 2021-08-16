class Polygon{

    constructor(){
        var options={
    isStatic:false,
    restitution:0.3,
    friction:0.9,
    density:1.2
    }
    this.body=Bodies.circle(100,100,25,options);
    this.radius=25;
   
    this.image=loadImage("sprites/polygon.png");

    World.add(world,this.body)
    }
    display(){
        push();
        translate (this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop ();
    
    
    
    
    
    
    
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
