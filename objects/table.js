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
        translate([this.dimensions[0]*0.75,0,this.dimensions[2]*0.75]);
        ambientMaterial("black");
        cone(50,605);
        pop();
        
        pop();
    }
}