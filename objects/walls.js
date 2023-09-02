class Walls{
    constructor(_color,texture){
        this.color = color(_color);
        this.texture = texture;
    }

    show(){
        push();
        directionalLight(255, 255, 255, 0,-1, 1);
        // rotateY(0.62);
        texture(this.texture);
        sphere(30000);

        pop();
    }
}