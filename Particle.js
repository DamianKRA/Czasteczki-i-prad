class Particle {
    constructor() {
        this.size = randomNumber(20, 40);
        this.x = randomNumber(this.size, canvasWidth - this.size);
        this.y = randomNumber(this.size, canvasHeight - this.size);
        this.maxDistToFind = this.size * 7;
        this.lineThickness = 0.2;
        this.vectorX = 0;
        this.vectorY = 0;
        this.velocity = 1;
    }

    draw() {
        ctx.shadowBlur = 10;
        ctx.lineWidth = this.lineThickness;
        ctx.shadowColor = "white";
        ctx.strokeStyle = "white";
        ctx.fillStyle = "#222";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.stroke();
    }

    connected() {
        this.lineThickness = randNumFloat(1, 2);
        let offset = 2;
        this.x += randNumFloat(-offset, offset);
        this.y += randNumFloat(-offset, offset);
    }

    unconnected() {
        (this.lineThickness > 0.2) ? this.lineThickness -= 0.04: 0;
        let offset = 0.2;
        this.vectorX = randNumFloat(-offset, offset);
        this.vectorY = randNumFloat(-offset, offset);

        this.x += this.vectorX;
        this.y += this.vectorY;
    }
}