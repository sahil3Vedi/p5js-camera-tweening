class Computer {
    constructor(color1,color2,scale,position){
        this.color1 = color(color1);
        this.color2 = color(color2);
        this.scale = scale;
        this.position = createVector(position[0],position[1],position[2]);
    }

    show(){
        push();
        translate(this.position);
        // screen
        push();
        ambientMaterial(this.color1);
        box(960*this.scale, 540*this.scale,200*this.scale);
        pop();

        // box2
        push();
        ambientMaterial(this.color2);
        translate(100,100,1000);
        box(960*this.scale, 540*this.scale,200*this.scale);
        pop();

        pop();
    }
}