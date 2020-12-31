class Ball {
    constructor(x,y,radius,options) {
        var options={
            isStatic:false,
            density=1.2,
            restitution:0.3,
            friction:0.5
        }
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    display(){
        fill("white");
        noStroke();

    }

}