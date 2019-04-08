<template>
  <canvas id="canvas">
  </canvas>
</template>

<script>
export default {
  name: 'Background',
  mounted() {
    function mainColor() {
		return 'rgba(24, 22, 22, 0.81)';
	};
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
    		var dx = this.px - canvas.width  * 0.5;
    		var dy = this.py - canvas.height * 0.5;
    		var d  = Math.sqrt(dx * dx + dy * dy);
    		var m = Math.min(canvas.width * 0.5, canvas.height * 0.5);
    		var radius = (-d / m + 1) * m / 15;
    		if (radius > 0) {
    			requestAnimationFrame(this.draw.bind(this));
    			ctx.beginPath();
    			ctx.arc(this.px, this.py, radius, 0, 2 * Math.PI);
    			ctx.fillStyle = mainColor();
    			ctx.fill();
    			ctx.strokeStyle = "rgba(12, 183, 207, .2)";
    			ctx.stroke();
    		}
    	}
    	// set canvas
    	var canvas  = document.getElementById("canvas");
    	var ctx     = canvas.getContext("2d");
    	function resize () {
    		canvas.width = canvas.offsetWidth;
    		canvas.height = canvas.offsetHeight;
    	}
    	window.addEventListener('resize', resize, false);
    	canvas.onselectstart = function() { return false; }
    	canvas.ondragstart = function() { return false; }
    	resize();
    	// click event
    	function click () {
    		for (var i = 0; i < 10; i++) {
    			var c = new Circle(canvas.width * .5, canvas.height * .5);
    			c.draw();
    		}
    	}
    	window.addEventListener("mousedown",  click, false );
    	document.body.addEventListener("touchstart", click, false );
    	// double-click
    	click();
    	click();
    }();
  }
}
</script>

<style lang="scss" scoped>
#canvas {
	position: absolute;
	width: 100%;
	height: 100%;
	cursor: pointer;
	background: "rgba(0, 0, 0, 0)";
  background-size: cover;
}

.fill-screen {
  margin: 0;
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
}

.fit-to-screen {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
