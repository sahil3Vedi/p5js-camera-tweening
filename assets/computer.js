function displayComputer(color1, color2){
    // Computer is rendered at 0,0,0
    push();
    var [cx,cy,cz] = color1;
    directionalLight(cx,cy,cz,lfx,lfy,lfz);
    ambientLight(cx,cy,cz);
    ambientMaterial(cx,cy,cz);
    // main frame
    box(400,225,30);
    // stand
    translate(0,137,0);
    box(50,50,20);
    // base
    translate(0,32,0);
    box(100,15,50);
    // keyboard
    var [cx,cy,cz] = color2;
    directionalLight(cx,cy,cz,lfx,lfy,lfz);
    ambientLight(cx,cy,cz);
    ambientMaterial(cx,cy,cz);
    translate(0,0,125);
    box(250,15,75);
    // mouse
    translate(160,3,0);
    box(25,9,40);
    pop();
}