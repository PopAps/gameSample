//Fly Class
function Fly() {
    tFly = new Sprite(scene, "fly.png", 25, 25);
    tFly.setSpeed(10);
    tFly.wriggle = function () {
        //compute the direaction by random sum amout
        newDir = (Math.random() * 90) - 45
        this.changeAngleBy(newDir);
    }

    tFly.reset = function(){
        newX = Math.random() *this.cWidth;
        newY = Math.random() *this.cHeight;
        this.setPosition(newX,newY);
    }

    tFly.reset();
    return tFly;
}

//Frog Class
function Frog() {
    tFrog = new Sprite(scene, "frog.png", 55, 55);
    tFrog.setSpeed(0);
    tFrog.setAngle(0);
    tFrog.moveKeys = function () {
        if (keysDown[K_LEFT]) {
            this.changeAngleBy(-15);
        }

        if (keysDown[K_RIGHT]) {
            this.changeAngleBy(15);
        }

        if (keysDown[K_UP]) {
            this.changeSpeedBy(0.5)
            if (this.speed >= 10) {
                this.setSpeed(10);
            }
        }

        if (keysDown[K_DOWN]) {
            this.changeSpeedBy(-0.5)
            if (this.speed <= -3) {
                this.setSpeed(-3);
            }
        }

        if (keysDown[K_SPACE]) {
            this.setSpeed(0);
        }
    }

    return tFrog;
}