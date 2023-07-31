function displayTable(color){
    // Table is right below the computer
    push();
    const [cx,cy,cz] = color;
    directionalLight(cx,cy,cz,lfx,lfy,lfz);
    ambientLight(cx,cy,cz);
    ambientMaterial(cx,cy,cz);
    translate(0,183,50);
    // table body
    box(1200,14,600);
    // table legs
    translate(500,157,250);
    cylinder(20,300);
    translate(0,0,-500);
    cylinder(20,300);
    translate(-1000,0,0);
    cylinder(20,300);
    translate(0,0,500);
    cylinder(20,300);
    pop();
}