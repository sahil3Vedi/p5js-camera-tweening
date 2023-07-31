class Computer {
    constructor(color1,color2,scale,position){
        this.color1 = color(color1);
        this.color2 = color(color2);
        this.scale = scale;
        this.position = position;
    }

    show(){
        push();
        translate(this.position[0],this.position[1],this.position[2]);

        // screen
        push();
        specularMaterial(this.color1);
        shininess(50);
        box(960*this.scale, 540*this.scale,200*this.scale);
        pop();

        pop();
    }
}