/* To create a rounded tile, we require:
1. Inner Box x 1
2. Edge Box x 4 (along each edge of the primary face)
3. Corner Cylinders x 4 (for 4 corners of the primary face)
*/

function roundedTile(dimensions,corner_radius){
    if (corner_radius >= Math.min([dimensions[0],dimensions[1]])){
        console.error("Border Radius of Rounded Box cannot be greater than / equal to half the smallest dimension on primary face");
        return
    }
    push();


    /* drawing Inner Box
    dimensions of inner box = this.dimensions - 2*this.corner_radius
    */
    const inner_dimensions = dimensions.map(d=>d-(corner_radius*2));
    box(inner_dimensions[0],inner_dimensions[1],dimensions[2])


    /* drawing Outer Boxes
    position of Outer Box 1: ((inner_dimensions[0]+(corner_radius/2)),0,0)
    dimensions of Outer Box 1: (corner_radius,inner_dimensions[1],dimensions[2])
    */
    push();
    translate((inner_dimensions[0]/2)+(corner_radius/2),0,0);
    box(corner_radius,inner_dimensions[1],dimensions[2]);
    pop();

    push();
    translate(-(inner_dimensions[0]/2)-(corner_radius/2),0,0);
    box(corner_radius,inner_dimensions[1],dimensions[2]);
    pop();

    push();
    translate(0,(inner_dimensions[1]/2)+(corner_radius/2),0);
    box(inner_dimensions[0],corner_radius,dimensions[2]);
    pop();

    push();
    translate(0,-(inner_dimensions[1]/2)-(corner_radius/2),0);
    box(inner_dimensions[0],corner_radius,dimensions[2]);
    pop();


    /* drawing Cylinder Corners
    position of Cylinder 1: ((inner_dimensions[0]/2)+(corner_radius/2),inner_dimensions[1]+(corner_radius/2),0)
    dimensions of Outer Box 1: (corner_radius,dimensions[2])
    */
    push();
    translate(inner_dimensions[0]/2,inner_dimensions[1]/2,0);
    rotateX(Math.PI/2);
    cylinder(corner_radius,dimensions[2])
    pop();

    push();
    translate(inner_dimensions[0]/2,-inner_dimensions[1]/2,0);
    rotateX(Math.PI/2);
    cylinder(corner_radius,dimensions[2])
    pop();

    push();
    translate(-inner_dimensions[0]/2,inner_dimensions[1]/2,0);
    rotateX(Math.PI/2);
    cylinder(corner_radius,dimensions[2])
    pop();

    push();
    translate(-inner_dimensions[0]/2,-inner_dimensions[1]/2,0);
    rotateX(Math.PI/2);
    cylinder(corner_radius,dimensions[2])
    pop();



    pop();
}