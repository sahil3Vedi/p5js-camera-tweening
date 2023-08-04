class Floor{
    constructor(dimensions,depth){
        this.depth = depth;
        this.dimensions = createVector.apply(null,dimensions);
    }

    show(){
        push();
        translate(0,this.depth,0);
        rotateX(Math.PI/2);
        stroke(20);
        ambientMaterial("#fefce8");
        plane(10000,10000);
        pop();
    }
}