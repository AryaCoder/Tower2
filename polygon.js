class Polygon{
constructor(x,y,r){

var options = {

density :1.3,

friction : 2


}
this.x=x;
this.y=y;
this.r=r
this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
this.image=loadImage("polygon.png")
World.add(world, this.body);

}

    display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
       fill("darkpink")
       
        rotate(angle);
        
         imageMode(CENTER)
         image(this.image,0,0,this.r,this.r)     
    
        pop();
      }



}