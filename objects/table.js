class Table{
    constructor(dimensions,position){
        this.position = createVector.apply(null,position);
        this.dimensions = dimensions;
        this.corner_radius = Math.min([dimensions[0],dimensions[1]])/2-2;
    }

    show(){
        push();
        translate(this.position);

        // table body
        push();
        rotateX(Math.PI/2);
        ambientMaterial("#431407");
        roundedTile(this.dimensions,499);
        pop();

        // table legs
        push();
        translate(0,800,0);
        ambientMaterial("white");
        push();
        translate(0.375*this.dimensions[0],0,0.375*this.dimensions[1]);
        rotateX(Math.PI/8);
        rotateZ(-Math.PI/8);
        cone(100,1800,24,4,true);
        pop();
        push();
        translate(-0.375*this.dimensions[0],0,0.375*this.dimensions[1]);
        rotateX(Math.PI/8);
        rotateZ(Math.PI/8);
        cone(100,1800,24,4,true);
        pop();
        push();
        translate(-0.375*this.dimensions[0],0,-0.375*this.dimensions[1]);
        rotateX(-Math.PI/8);
        rotateZ(Math.PI/8);
        cone(100,1800,24,4,true);
        pop();
        push();
        translate(0.375*this.dimensions[0],0,-0.375*this.dimensions[1]);
        rotateX(-Math.PI/8);
        rotateZ(-Math.PI/8);
        cone(100,1800,24,4,true);
        pop();
        pop();
        
        pop();
    }
}