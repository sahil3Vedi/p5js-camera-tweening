// object vars
let computer;
let gamer_chair;
let floor;
let table;
let bed;
let walls;
let wallTexture;
// camera
var cameraMode;
var tweenCount;
var maxTweenCount;

function setup(){
    var canvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    canvas.parent('sketch3D');
    setAttributes('antialias', true);
    frustum(-1,1,0.5,-0.5,1,-1);
    // createEasyCam();
    cameraMode = "A";
    tweenCount = 0;
    maxTweenCount = 100;
    document.oncontextmenu = () => false;
    // setup objects
    computer = new Computer("#a1a1aa","black","#a1a1aa",1,[0,0,-5000]);
    gamer_chair = new GamerChair("#082f49","black",1,[0,1000,-3000],[0,0,0]);
    table = new Table([4000,2000,200],[0,630,-5000]);
    bed = new Bed([0,900,3500],"#e2e8f0","#b45309","#bbf7d0");
    // setup wall & floor
    wallTexture = loadImage('https://images.pexels.com/photos/11144949/pexels-photo-11144949.jpeg');
    walls = new Walls("#fed7aa",wallTexture);
    floor = new Floor([5000,5000],1840); // TODO: add color to constructor
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
    background(0);
    ambientLight(200);
    directionalLight(200,200,200,1,1,-1);
}

function startTweening() {
    // check current camera state
    // if A, set to AB
    // if B, set to BA
    cameraMode = (cameraMode==="A" ? "AB" : cameraMode==="B" ? "BA" : cameraMode)
}

function tween(coordA, coordB){
    // if AB, continue tweening until tween count reaches MAX. Upon reaching MAX, set camera state to B and reset tween count
    // if BA, continue tweening until tween count reaches MAX. Upon reaching MAX, set camera state to A and reset tween count
    if (tweenCount < maxTweenCount){
        console.log({tweenCount})
        // determine camera position based on tweenCount and maxTweenCounts
        const R = tweenCount / maxTweenCount;
        const interpolatedArray = coordA.map((valueA, index) => {
            const valueB = coordB[index];
            return valueA + (valueB - valueA) * R;
        });
        // set camera
        camera.apply(null, interpolatedArray);
        // update tweenCount
        console.log({coordA, coordB, interpolatedArray})
        tweenCount += 1;
        console.log({tweenCount})
    } else {
        cameraMode = (cameraMode ==="AB" ? "B" : "A")
        tweenCount = 0;
    }
}

function draw(){
    const camA = [1000,-300,6000,(mouseX-window.innerWidth/2)*20,(mouseY-window.innerHeight/2)*20,0];
    const camB = [0,-500,-4500,0,1000,-7500];
    console.log({cameraMode})
    if (cameraMode === "A"){
        camera.apply(null, camA);
    } else if (cameraMode === "B") {
        camera.apply(null, camB);
    } else if (cameraMode === "AB") {
        tween(camA,camB)
    } else {
        tween(camB,camA)
    }
    // rotateZ(Math.PI);
    // show lights
    showLights();
    // show axes
    showAxes(500);
    // show objects
    showObjects();
    // console.log(frustum)
}