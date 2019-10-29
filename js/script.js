var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
var mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        // c.fillStyle(rgb(Math.random()))
        c.fill();
    }
    this.update = function() {

        if (this.x + radius > innerWidth || this.x - radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + radius > innerHeight || this.y - radius < 0) {
            this.dy = -this.dy;
        }
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;


        //interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50 && this.radius < 30) {
            this.radius += 1;
        } else if (this.radius > 3) {
            this.radius -= 1;
        }
        this.draw();
    }
}
var circleArray = [];
for (index = 0; index < 5000; index++) {
    var x = (Math.random() * innerWidth - radius * 2) + radius;
    var y = (Math.random() * innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);;
    var radius = 5;
    circleArray.push(new Circle(x, y, dx, dy, radius));

}


function main() {
    requestAnimationFrame(main);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (index = 0; index < circleArray.length; index++) {
        circleArray[index].update();
    }
}

main();