class Conection {
    constructor() {
        this.x1;
        this.x2;
        this.distance;
        this.xDist;
        this.yDist;
    }

    odleglosc(xprev, yprev, x, y) {
        return Math.sqrt(Math.pow(xprev - x, 2) + Math.pow(yprev - y, 2));
    }

    drawLine(x1, y1, x2, y2) {
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#fff";
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    noiseLine(particle) {
        this.xDist = particle.x - mouseX;
        this.yDist = particle.y - mouseY;

        let howManySections = randomNumber(5, 10);
        let divX = this.xDist / howManySections;
        let divY = this.yDist / howManySections;

        let startX = mouseX;
        let startY = mouseY;
        let endX, endY;
        let x, y;
        let randOff = 10;
        for (let j = 1; j < howManySections + 1; j++) {
            if (j == 1) { //od pozycji myszki
                x = divX * j + mouseX + randNumFloat(-randOff, randOff);
                y = divY * j + mouseY + randNumFloat(-randOff, randOff);
                endX = x;
                endY = y;
            } else if (j >= howManySections) { //do srodka czasteczki
                startX = endX;
                startY = endY;
                endX = particle.x;
                endY = particle.y;
            } else { //pozostale
                startX = endX;
                startY = endY;
                x = divX * j + mouseX + randNumFloat(-randOff, randOff);
                y = divY * j + mouseY + randNumFloat(-randOff, randOff);
                endX = x;
                endY = y;
            }
            this.drawLine(startX, startY, endX, endY);
        }
    }

    update() {
        for (let i in particles) {
            this.distance = this.odleglosc(mouseX, mouseY, particles[i].x, particles[i].y);
            this.xDist = particles[i].x - mouseX;
            this.yDist = particles[i].y - mouseY;

            if (this.distance < particles[i].maxDistToFind) {
                particles[i].connected();
                // this.drawLine(mouseX, mouseY, particles[i].x, particles[i].y);
                this.noiseLine(particles[i], particles[i]);
            } else {
                particles[i].unconnected();
            }
        }
    }
}