let computer;

function setup(){
    var canvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    canvas.parent('sketch3D');
    createEasyCam();
    document.oncontextmenu = () => false;
    computer = new Computer("#0f172a","#94a3b8",1,[0,0,0]);
}

function showModels(){
    strokeWeight(0);
    computer.show();
}

function draw(){
    background(226,232,240);
    drawAxes(400);
    pointLight(255,255,255, -1000, -1000, 1000);
    showModels();
}