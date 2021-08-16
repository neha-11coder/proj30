class Box{

    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0,
            friction:0.9
        }
        this.body=Bodies.rectangle(x,y,30,40,options);
        this.width=30;
        this.height=40;

        World.add(world,this.body);
        

    }
    display(){
        var pos=this.body.position;
        if(this.body.speed <5){
            push ();
            translate (pos.x,pos.y);
            rectMode(CENTER);
            rect(0,0,30,40);
            strokeWeight(1);
            stroke("black");
            pop ();
        }
          else{
              World.remove(world,this.body);
          }
        
       
          
        

        
    }
}