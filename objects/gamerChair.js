class GamerChair{
    constructor(color1,color2,scale,position,rotation){
        this.color1 = color(color1);
        this.color2 = color(color2);
        this.scale = scale;
        this.position = createVector.apply(null,position);
        this.rotation = createVector.apply(null,rotation);
        this.swivel = 0;
    }

    swivelChair(){
        this.swivel += 0.005;
    }

    show(){
        this.swivelChair();
        push();
        
        translate(this.position);

        // stationary, non swivelling part
        //seat stand
        push();
        translate(0,80*this.scale,0);
        ambientMaterial(this.color2);
        cylinder(200*this.scale,75*this.scale);
        translate(0,184*this.scale,0);
        cylinder(144*this.scale,300*this.scale);
        translate(0,190*this.scale,0);
        cylinder(100*this.scale,200*this.scale);
        translate(0,200*this.scale,0);
        cylinder(70*this.scale,200*this.scale);
        
        // feet spokes
        translate(0,50*this.scale,0);
        push();
        translate(200*this.scale,0,0);
        rotateZ(Math.PI/2);
        cylinder(50*this.scale,400*this.scale);
        pop();
        push();
        translate(-200*this.scale,0,0);
        rotateZ(Math.PI/2);
        cylinder(50*this.scale,400*this.scale);
        pop();
        push();
        translate(0,0,200*this.scale);
        rotateX(Math.PI/2);
        cylinder(50*this.scale,400*this.scale);
        pop();
        push();
        translate(0,0,-200*this.scale);
        rotateX(Math.PI/2);
        cylinder(50*this.scale,400*this.scale);
        pop();
        pop();

        // finally, wheels!
        push();
        ambientMaterial(this.color2);
        translate(380*this.scale,790*this.scale,0);
        rotateZ(Math.PI/2);
        rotateX(Math.PI/4);
        cylinder(50*this.scale,40*this.scale)
        pop();
        push();
        ambientMaterial(this.color2);
        translate(-380*this.scale,790*this.scale,0);
        rotateZ(Math.PI/2);
        rotateX(-Math.PI/6);
        cylinder(50*this.scale,40*this.scale)
        pop();
        push();
        ambientMaterial(this.color2);
        translate(0,790*this.scale,-380*this.scale);
        rotateZ(Math.PI/2);
        rotateX(-Math.PI/8);
        cylinder(50*this.scale,40*this.scale)
        pop();
        push();
        ambientMaterial(this.color2);
        translate(0,790*this.scale,380*this.scale);
        rotateZ(Math.PI/2);
        rotateX(Math.PI/8);
        cylinder(50*this.scale,40*this.scale)
        pop();

        // swivelling part
        rotateY(this.swivel);
        
        //seat
        push();
        ambientMaterial(this.color1);
        roundedBox([1000*this.scale, 100*this.scale,1000*this.scale],40*this.scale);
        pop();

        // arm rest
        push();
        ambientMaterial(this.color1);
        translate(450*this.scale,-400*this.scale,0);
        roundedBox([200*this.scale, 70*this.scale,700*this.scale],30*this.scale);
        pop();
        push();
        ambientMaterial(this.color1);
        translate(-450*this.scale,-400*this.scale,0);
        roundedBox([200*this.scale, 70*this.scale,700*this.scale],30*this.scale);
        pop();

        // arm rest stand
        push();
        ambientMaterial(this.color2);
        translate(-470*this.scale,-200*this.scale,0);
        roundedBox([70*this.scale,400*this.scale,100*this.scale],30*this.scale);
        pop();
        push();
        ambientMaterial(this.color2);
        translate(470*this.scale,-200*this.scale,0);
        roundedBox([70*this.scale,400*this.scale,100*this.scale],30*this.scale);
        pop();

        // back rest
        push();
        ambientMaterial(this.color1);
        translate(0,-700*this.scale,500*this.scale);
        roundedBox([1000*this.scale,900*this.scale,100*this.scale],40*this.scale);
        ambientMaterial(this.color2);
        translate(0,-500*this.scale,0);
        roundedBox([100*this.scale,300*this.scale,90*this.scale],40*this.scale);
        ambientMaterial(this.color1);
        translate(0,-200*this.scale,0);
        roundedBox([700*this.scale,350*this.scale,100*this.scale],40*this.scale);
        pop();

        // back rest stand
        push();
        ambientMaterial(this.color2);
        translate(0,-650*this.scale,550*this.scale);
        rotateX(Math.PI/2);
        cylinder(300*this.scale,150*this.scale);
        rotateX(-Math.PI/2);
        translate(0,500*this.scale,0);
        roundedBox([200*this.scale,500*this.scale,100*this.scale],40*this.scale);
        translate(0,200*this.scale,-50*this.scale);
        roundedBox([200*this.scale,100*this.scale,200*this.scale],40*this.scale);
        pop();


        pop();
    }
}