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
        ambientMaterial("#64748b");
        plane(15000,15000);
        pop();
    }
}