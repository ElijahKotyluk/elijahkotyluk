export default function tentacles() {
  const colorArray = ['rgba(12, 183, 207, .2)']

  const randomColor = () => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  }

  ! function() {
    "use strict";
    function Circle (x, y) {
      this.px = x;
      this.py = y;
      this.vx = 0;
      this.vy = 0;
    }
    Circle.prototype.draw = function () {
      this.vx += (Math.random() - 0.5) / 2;
      this.vy += (Math.random() - 0.5) / 2;
      this.px += this.vx;
      this.py += this.vy;
      const dx = this.px - canvas.width  * 0.5;
      const dy = this.py - canvas.height * 0.5;
      const d  = Math.sqrt(dx * dx + dy * dy);
      const m = Math.min(canvas.width * 0.5, canvas.height * 0.5);
      const radius = (-d / m + 1) * m / 10; // m / 15
      if (radius > 0) {
        requestAnimationFrame(this.draw.bind(this));
        ctx.beginPath();
        ctx.arc(this.px, this.py, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(24, 22, 22, 1)";
        ctx.fill();
        ctx.strokeStyle = randomColor();
        ctx.stroke();
      }
    }
    // set canvas
    const canvas = document.getElementById("tentacles");
    const ctx = canvas.getContext("2d");
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    window.addEventListener('resize', resize, false);
    canvas.onselectstart = function() { return false; }
    canvas.ondragstart = function() { return false; }
    resize();
    // click event
    const click = () => {
      for (let i = 0; i < 15; i++) {
        const c = new Circle(canvas.width * .5, canvas.height * .5);
        c.draw();
      }
    }
    window.addEventListener("mousedown",  click, false );
    document.body.addEventListener("touchstart", click, false );
    // double-click
    click();
  }();

}
