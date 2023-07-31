/*
Original dimensions of the room: 2400 x 2400 x 975
This is too small. Let's double the dimensions (4x the room)
New dimensions: 4800x4800x2000
No directional / ambient light on the walls and the floor
*/

function displayWallsAndFloor(color1, color2){
    // Wall 1 is right behind the table
    push();
    var [cx,cy,cz] = color1;
    ambientLight(cx,cy,cz);
    ambientMaterial(cx,cy,cz);
    translate(0,-550,-260);
    box(4800,2100,20);
    // Wall 2 is opposite to Wall 1
    translate(0,0,4820);
    box(4800,2100,20);
    // Wall 3 is between Wall 1 and Wall 2
    translate(2410,0,-2410);
    box(20,2100,4800);
    // Wall 4 is opposite to Wall 3
    translate(-4820,0,0);
    box(20,2100,4800);
    // the floor is.. at the bottom
    var [cx,cy,cz] = color2;
    ambientMaterial(cx,cy,cz);
    translate(2410,1038,0);
    box(4820,2,4820);
    pop();
}