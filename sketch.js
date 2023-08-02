// object vars
let computer;

function setup(){
    var canvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    canvas.parent('sketch3D');
    createEasyCam();
    document.oncontextmenu = () => false;
    // setup objects
    computer = new Computer("red","blue",1,[0,0,0]);
}

function showObjects(){
    strokeWeight(0);
    computer.show();
}

function showLights(){
    background(226,232,240);
    ambientLight(128,128,128);
    directionalLight(128,128,128,0,3000,-3000);
}

function draw(){
    // show lights
    showLights();
    // show axes
    showAxes(500);
    // show objects
    showObjects();
}