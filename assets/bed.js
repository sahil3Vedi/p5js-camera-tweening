/*
color1: bed frame (1800 x 1800 x 400)
color2: bedsheet
color3: pillow
color4: blanket
*/

function displayBed(color1, color2, color3, color4){
    // bed is behind the table, by the opposing wall, centred.
    push();

    var [cx,cy,cz] = color1;
    directionalLight(cx,cy,cz,lbx,lby,lbz);
    translate(0,363,3600);
    // bed frame
    ambientLight(cx,cy,cz);
    ambientMaterial(cx,cy,cz);
    box(1800,250,1800);

    // mattress
    var [cx,cy,cz] = color2;
    directionalLight(cx,cy,cz,lbx,lby,lbz);
    ambientLight(cx,cy,cz);
    ambientMaterial(cx,cy,cz);
    translate(0,-115,0);
    box(1700,40,1700);

    // pillows
    var [cx,cy,cz] = color3;
    directionalLight(cx,cy,cz,lbx,lby,lbz);
    ambientLight(cx,cy,cz);
    ambientMaterial(cx,cy,cz);

    push();
    translate(-450,-20,700);
    box(500,100,250);
    pop();

    push();
    translate(450,-20,700);
    box(500,100,250);
    pop();

    // blanket
    var [cx,cy,cz] = color4;
    directionalLight(cx,cy,cz,lbx,lby,lbz);
    ambientLight(cx,cy,cz);
    ambientMaterial(cx,cy,cz);
    translate(0,-20,-200);
    box(1900,80,1450)

    pop();
}