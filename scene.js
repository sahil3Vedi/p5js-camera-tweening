const lightSource = [100,200,-100];
const [lx,ly,lz] = lightSource;

function setup(){
    var canvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    canvas.parent('sketch3D');
    createEasyCam();
    document.oncontextmenu = () => false;
}

function drawAxes(n){
    strokeWeight(5);
    stroke(255,0,0);
    line(0,0,0,n,0,0);
    stroke(0,255,0);
    line(0,0,0,0,n,0);
    stroke(0,0,255);
    line(0,0,0,0,0,n);
}

function displayComputer(color1, color2){
    // Computer is rendered at 0,0,0
    var [cx,cy,cz] = color1;
    push();
    directionalLight(cx,cy,cz,lx,ly,lz);
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
    directionalLight(cx,cy,cz,lx,ly,lz);
    ambientLight(cx,cy,cz);
    ambientMaterial(cx,cy,cz);
    translate(0,0,125);
    box(250,15,75);
    // mouse
    translate(160,3,0);
    box(25,9,40);
    pop();
}

function displayTable(color){
    // Table is right below the computer
    const [cx,cy,cz] = color;
    push();
    directionalLight(cx,cy,cz,lx,ly,lz);
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

function displayWalls(color){
    // Wall 1 is right behind the table
    const [cx,cy,cz] = color;
    directionalLight(cx,cy,cz,lx,ly,lz);
    ambientLight(cx,cy,cz);
    ambientMaterial(cx,cy,cz);
    push();
    translate(0,0,-260);
    box(2400,975,20);
    // Wall 2 is opposite to Wall 1
    translate(0,0,2420);
    box(2400,975,20);
    // Wall 3 is between Wall 1 and Wall 2
    translate(1210,0,-1210);
    box(20,975,2400);
    // Wall 4 is opposite to Wall 3
    translate(-2420,0,0);
    box(20,975,2400);
    // the floor is.. at the bottom
    pop();
}

function loadModels(){
    strokeWeight(0);
    displayComputer([161,161,161],[30,41,59]);
    displayTable([161,98,7]);
    displayWalls([254,249,195]);
}

function draw(){
    background(226,232,240);
    drawAxes(400);
    loadModels();
}