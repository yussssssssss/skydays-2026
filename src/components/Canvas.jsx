import { useEffect, useRef } from "react";

class Circle {
  constructor(x, y, radius, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = speed;
    this.dy = speed;
  }

  draw(ctx) {
    ctx.fillStyle = "#2b68ad";
    /* ctx.filter = "blur(10px)"; */
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  update(canvasWidth, canvasHeight) {
    if (this.x + this.radius >= canvasWidth || this.x - this.radius <= 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius >= canvasHeight || this.y - this.radius <= 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const circlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.style.webkitFilter = "blur(20px)";
    const circle1 = new Circle(100, 100, 50, -0.2);
    const circle2 = new Circle(600, 300, 50, 0.2);
    const circle3 = new Circle(600, 300, 50, -0.2);

    circlesRef.current = [circle1, circle2, circle3];

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < circlesRef.current.length; i++) {
        circlesRef.current[i].update(canvas.width, canvas.height);
        circlesRef.current[i].draw(context);
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} {...props} width={1000} height={400} />;
};

export default Canvas;
