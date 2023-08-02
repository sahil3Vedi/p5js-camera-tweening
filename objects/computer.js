class Computer {
    constructor(color1,color2,color3,scale,position){
        this.color1 = color(color1);
        this.color2 = color(color2);
        this.color3 = color(color3);
        this.scale = scale;
        this.position = createVector.apply(null,position);
    }

    show(){
        push();
        translate(this.position);

        // screen
        push();
        translate(0,-200*this.scale,0);
        ambientMaterial(this.color1);
        rotateX(Math.PI/8);
        roundedBox([960*this.scale, 720*this.scale,400*this.scale],50*this.scale);
        pop();

        // screen stand
        push();
        translate(0,0,-150*this.scale);
        rotateY(Math.PI/2);
        // rotateZ(Math.PI/8);
        ambientMaterial(this.color2);
        roundedTile([300*this.scale, 900*this.scale,600*this.scale],50*this.scale);
        pop();

        // keyboard
        push();
        translate(0,380*this.scale,0);
        ambientMaterial(this.color3);
        roundedBox([900*this.scale, 300*this.scale,900*this.scale],50*this.scale)
        pop();

        pop();
    }
}