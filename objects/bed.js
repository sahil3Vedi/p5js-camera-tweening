/* the room is huge (3000,3000) */
/* the bed could be 1200*1200 */

class Bed {
    constructor(position,color1,color2,color3){
        this.position = createVector.apply(null,position);
        this.color1 = color(color1);
        this.color2 = color(color2);
        this.color3 = color(color3);
    }

    show(){
        push();
        translate(this.position);

        // mattress
        push();
        ambientMaterial(this.color1);
        roundedBox([6000,300,6000],70);
        pop();

        // frame
        push();
        translate(0,440,0);
        ambientMaterial(this.color2);
        roundedBox([6250,700,6250],70);
        translate(0,0,-3125);
        roundedBox([6250,1000,252],70);
        translate(0,-375,6250);
        roundedBox([6250,1750,252],70);
        pop();

        // pillows
        push();
        ambientMaterial(this.color3);
        translate(0,-250,2250);
        push();
        translate(1200,0,0);
        roundedBox([1500,200,1000],80);
        pop();
        push();
        translate(-1200,0,0);
        roundedBox([1500,200,1000],80);
        pop();
        pop();

        // blanket
        push();
        ambientMaterial(this.color3);
        translate(0,-50,-750);
        roundedBox([6150,400,4525],190);
        pop();
        

        pop();
    }
}