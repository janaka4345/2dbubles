import { useEffect, useRef } from "react";
import useCanvas from "./useCanvas";
const particles = [];
export default function Canvas4(params) {
  // console.log("ren");
  const canvas = useCanvas(draw);
  // const mouse = useRef({ x: undefined, y: undefined });

  // const handleClick = (e) => {
  //   mouse.current.x = e.clientX;
  //   mouse.current.y = e.clientY;
  // };

  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      particles.push(generateRandomParticle(canvas));
    }
  }, []);

  return (
    <>
      <canvas
        id="canvas1"
        ref={canvas}
        // onClick={handleClick}
      />
    </>
  );
}

function generateRandomParticle(canvas) {
  const speedX = Math.random() - 0.5;
  const speedY = Math.random() - 0.5;
  const radius = Math.random() * 5 + 1;
  const x = Math.random() * canvas.current.width + radius;
  const y = Math.random() * canvas.current.height + radius;
  const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  }, 1)`;

  return { x, y, speedX, speedY, radius, color };
}

function draw(ctx, frameCount, ratio) {
  // console.log(particles);
  ctx.clearRect(0, 0, ctx.canvas.width * ratio, ctx.canvas.height * ratio);
  particles.forEach((particle) => {
    drawParticle({ ctx, particle });
    particle.x > ctx.canvas.width || particle.x < particle.radius
      ? (particle.speedX *= -1)
      : null;

    particle.y > ctx.canvas.height || particle.y < particle.radius
      ? (particle.speedY *= -1)
      : null;

    particle.x += particle.speedX;
    particle.y += particle.speedY;
  });
}
function drawParticle({ ctx, particle }) {
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
  ctx.fillStyle = particle.color;
  ctx.fill();
}
