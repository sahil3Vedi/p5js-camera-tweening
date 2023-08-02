/* To create a Rounded Box, we require:
1. Inner Box x 1
2. Outer Box x 6 (on each face of the inner box)
3. Cylinder Edge x 12 (on each edge formed by the outer boxes)
4. Sphere x 8 (on each corner)
*/

function roundedBox(dimensions,corner_radius){
    if (corner_radius >= Math.min(...(dimensions.map(d=>d/2)))){
        console.error("Border Radius of Rounded Box cannot be greater than / equal to half the smallest dimension");
        return
    }

    push();


    /* drawing Inner Box
    dimensions of inner box = this.dimensions - 2*this.corner_radius
    */
    const inner_dimensions = dimensions.map(d=>d-(corner_radius*2));
    box.apply(null,inner_dimensions);


    /* drawing Outer Boxes
    position of Outer Box 1: ((inner_dimensions[0]+(corner_radius/2)),0,0)
    dimensions of Outer Box 1: (corner_radius,inner_dimensions[1],inner_dimensions[2])
    */
    push();
    translate((inner_dimensions[0]/2)+(corner_radius/2),0,0);
    box(corner_radius,inner_dimensions[1],inner_dimensions[2]);
    pop();

    push();
    translate(-(inner_dimensions[0]/2)-(corner_radius/2),0,0);
    box(corner_radius,inner_dimensions[1],inner_dimensions[2]);
    pop();

    push();
    translate(0,(inner_dimensions[1]/2)+(corner_radius/2),0);
    box(inner_dimensions[0],corner_radius,inner_dimensions[2]);
    pop();

    push();
    translate(0,-(inner_dimensions[1]/2)-(corner_radius/2),0);
    box(inner_dimensions[0],corner_radius,inner_dimensions[2]);
    pop();

    push();
    translate(0,0,(inner_dimensions[2]/2)+(corner_radius/2));
    box(inner_dimensions[0],inner_dimensions[1],corner_radius);
    pop();

    push();
    translate(0,0,-(inner_dimensions[2]/2)-(corner_radius/2));
    box(inner_dimensions[0],inner_dimensions[1],corner_radius);
    pop();


    /* drawing Cylinder Edges
    position of Cylinder 1: ((inner_dimensions[0]/2)+(corner_radius/2),inner_dimensions[1]+(corner_radius/2),0)
    dimensions of Outer Box 1: (corner_radius,inner_dimensions[2])
    */
    push();
    translate(inner_dimensions[0]/2,0,inner_dimensions[2]/2);
    cylinder(corner_radius,inner_dimensions[1]);
    pop();

    push();
    translate(inner_dimensions[0]/2,0,-inner_dimensions[2]/2);
    cylinder(corner_radius,inner_dimensions[1]);
    pop();

    push();
    translate(-inner_dimensions[0]/2,0,inner_dimensions[2]/2);
    cylinder(corner_radius,inner_dimensions[1]);
    pop();

    push();
    translate(-inner_dimensions[0]/2,0,-inner_dimensions[2]/2);
    cylinder(corner_radius,inner_dimensions[1]);
    pop();

    push();
    translate(0,inner_dimensions[1]/2,inner_dimensions[2]/2);
    rotateZ(Math.PI/2);
    cylinder(corner_radius,inner_dimensions[0]);
    pop();

    push();
    translate(0,inner_dimensions[1]/2,-inner_dimensions[2]/2);
    rotateZ(Math.PI/2);
    cylinder(corner_radius,inner_dimensions[0]);
    pop();

    push();
    translate(0,-inner_dimensions[1]/2,inner_dimensions[2]/2);
    rotateZ(Math.PI/2);
    cylinder(corner_radius,inner_dimensions[0]);
    pop();

    push();
    translate(0,-inner_dimensions[1]/2,-inner_dimensions[2]/2);
    rotateZ(Math.PI/2);
    cylinder(corner_radius,inner_dimensions[0]);
    pop();

    push();
    translate(inner_dimensions[0]/2,inner_dimensions[1]/2,0);
    rotateX(Math.PI/2);
    cylinder(corner_radius,inner_dimensions[2]);
    pop();

    push();
    translate(inner_dimensions[0]/2,-inner_dimensions[1]/2,0);
    rotateX(Math.PI/2);
    cylinder(corner_radius,inner_dimensions[2]);
    pop();

    push();
    translate(-inner_dimensions[0]/2,inner_dimensions[1]/2,0);
    rotateX(Math.PI/2);
    cylinder(corner_radius,inner_dimensions[2]);
    pop();

    push();
    translate(-inner_dimensions[0]/2,-inner_dimensions[1]/2,0);
    rotateX(Math.PI/2);
    cylinder(corner_radius,inner_dimensions[2]);
    pop();

    /* drawing Corner Spheres
    position of Sphere 1: ((inner_dimensions[0]/2)+(corner_radius/2),(inner_dimensions[1]/2)+(corner_radius/2),(inner_dimensions[2]/2)+(corner_radius/2))
    dimensions of Outer Box 1: (corner_radius)
    */
   push();
   translate(inner_dimensions[0]/2,inner_dimensions[1]/2,inner_dimensions[2]/2);
   sphere(corner_radius);
   pop();

   push();
   translate(inner_dimensions[0]/2,inner_dimensions[1]/2,-inner_dimensions[2]/2);
   sphere(corner_radius);
   pop();

   push();
   translate(inner_dimensions[0]/2,-inner_dimensions[1]/2,inner_dimensions[2]/2);
   sphere(corner_radius);
   pop();

   push();
   translate(inner_dimensions[0]/2,-inner_dimensions[1]/2,-inner_dimensions[2]/2);
   sphere(corner_radius);
   pop();

   push();
   translate(-inner_dimensions[0]/2,inner_dimensions[1]/2,inner_dimensions[2]/2);
   sphere(corner_radius);
   pop();

   push();
   translate(-inner_dimensions[0]/2,inner_dimensions[1]/2,-inner_dimensions[2]/2);
   sphere(corner_radius);
   pop();

   push();
   translate(-inner_dimensions[0]/2,-inner_dimensions[1]/2,inner_dimensions[2]/2);
   sphere(corner_radius);
   pop();

   push();
   translate(-inner_dimensions[0]/2,-inner_dimensions[1]/2,-inner_dimensions[2]/2);
   sphere(corner_radius);
   pop();


   pop();
}