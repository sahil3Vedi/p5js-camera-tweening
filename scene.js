const lightSourceFront = [0,2400,-2400];
const lightSourceBack = [0,-2400,-2400];
const [lfx,lfy,lfz] = lightSourceFront;
const [lbx,lby,lbz] = lightSourceBack;

function setup(){
    var canvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    canvas.parent('sketch3D');
    createEasyCam();
    document.oncontextmenu = () => false;
}

function loadModels(){
    strokeWeight(0);
    displayComputer([161,161,161],[30,41,59]);
    displayTable([161,98,7]);
    displayWallsAndFloor([255,251,235],[255,237,213]);
    displayBed([161,98,7],[186,230,253],[113,63,18],[133,77,14])
}

function draw(){
    background(226,232,240);
    drawAxes(400);
    loadModels();
}