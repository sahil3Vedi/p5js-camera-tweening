var easyCam;
// object vars
let computer;
let gamer_chair;
let floor;
let table;
let bed;
let walls;

function setup(){
    var canvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    canvas.parent('sketch3D');
    setAttributes('antialias', true);
    frustum(-1,1,0.5,-0.5,0.5,-1,1);
    // var graphics = createGraphics(window.innerWidth, window.innerHeight, WEBGL);
    // console.log(Dw.EasyCam.INFO);
    // easyCam = new Dw.EasyCam();
    // easyCam.setDistanceMin(10);
    // easyCam.setDistanceMin(7500);
    // easyCam.attachMouseListeners(this._renderer);
    // easyCam.setViewport([0,0,window.innerWidth,window.innerHeight]);
    createEasyCam();
    // console.log(easyCam.distance_max);
    // easyCam.distance_max = 800;
    document.oncontextmenu = () => false;
    // setup objects
    computer = new Computer("#a1a1aa","black","#a1a1aa",1,[0,0,-5000]);
    gamer_chair = new GamerChair("#082f49","black",1,[0,1000,-3000],[0,0,0]);
    floor = new Floor([5000,5000],1840); // TODO: add color to constructor
    table = new Table([4000,2000,200],[0,630,-5000]);
    bed = new Bed([0,900,3500],"#e2e8f0","#b45309","#bbf7d0");
    walls = new Walls("#fed7aa");
}

function showObjects(){
    strokeWeight(0);
    // stroke("#bef264");
    computer.show();
    gamer_chair.show();
    floor.show();
    table.show();
    bed.show();
    walls.show();
}

function showLights(){
    background(226,232,240);
    ambientLight(200);
    directionalLight(200,200,200,1,1,-1);
}

function draw(){
    // rotateZ(Math.PI);
    // show lights
    showLights();
    // show axes
    showAxes(500);
    // show objects
    showObjects();
}