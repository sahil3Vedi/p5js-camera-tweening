// object vars
let computer;
let gamer_chair;
let floor;
let table;

function setup(){
    var canvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    canvas.parent('sketch3D');
    createEasyCam();
    document.oncontextmenu = () => false;
    // setup objects
    computer = new Computer("#a1a1aa","black","#a1a1aa",1,[0,0,-5000]);
    gamer_chair = new GamerChair("#fdba74","black",1,[0,1000,-3000],[0,0,0]);
    floor = new Floor([5000,5000],1840); // TODO: add color to constructor
    table = new Table([4000,2000,200],[0,630,-5000]);
}

function showObjects(){
    strokeWeight(0);
    computer.show();
    gamer_chair.show();
    floor.show();
    table.show();
}

function showLights(){
    background(226,232,240);
    ambientLight(200);
    directionalLight(200,200,200,1,1,-1);
}

function draw(){
    // show lights
    showLights();
    // show axes
    showAxes(500);
    // show objects
    showObjects();
}