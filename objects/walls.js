class Walls{
    constructor(_color){
        this.color = color(_color);
    }

    show(){
        push();
        ambientMaterial(this.color);
        
        push();
        translate(0,0,7499);
        plane(15000,6000);
        pop();

        push();
        translate(0,0,-7499);
        plane(15000,6000);
        pop();

        push();
        rotateY(Math.PI/2);
        translate(0,0,-7499);
        plane(15000,6000);
        pop();

        push();
        rotateY(Math.PI/2);
        translate(0,0,7499);
        plane(15000,6000);
        pop();

        pop();
    }
}