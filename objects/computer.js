class Computer {
    constructor(color1,color2,scale,position){
        this.color1 = color(color1);
        this.color2 = color(color2);
        this.scale = scale;
        this.position = createVector.apply(null,position);
    }

    show(){
        push();
        translate(this.position);
        // screen
        push();
        ambientMaterial(this.color1);
        roundedBox([960*this.scale, 540*this.scale,200*this.scale],50);
        pop();

        push();
        translate(0,0,5000);
        roundedTile([960*this.scale, 540*this.scale,200*this.scale],50);
        pop();

        pop();
    }
}