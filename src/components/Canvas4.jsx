import { useEffect, useRef } from "react";
import useCanvas from "./useCanvas";
const particles = [];
export default function Canvas4(params) {
  // console.log("ren");
  const canvas = useCanvas(draw);
  const mouse = useRef({ x: undefined, y: undefined });

  const handleClick = (e) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
    for (let i = 0; i < 10; i++) {
      particles.push(generateRandomParticle({ canvas, mouse }));
    }
  };

  // useEffect(() => {
  //   // for (let i = 0; i < 50; i++) {
  //   //   particles.push(generateRandomParticle({ canvas, mouse }));
  //   // }
  //   console.log(particles);
  // }, []);

  return (
    <>
      <canvas
        id="canvas1"
        ref={canvas}
        // onClick={handleClick}
        onMouseMove={handleClick}
      />
    </>
  );
}

function generateRandomParticle({ canvas, mouse }) {
  const speedX = Math.random() - 0.5;
  const speedY = Math.random() - 0.5;
  const radius = Math.random() * 5 + 1;
  // const x = Math.random() * canvas.current.width + radius;
  // const y = Math.random() * canvas.current.height + radius;
  const x = mouse.current.x + Math.random() * 20;
  const y = mouse.current.y + Math.random() * 20;
  // const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
  //   Math.random() * 255
  // }, 1)`;
  const color = "white";

  return { x, y, speedX, speedY, radius, color };
}

function draw(ctx, frameCount, ratio) {
  // console.log(particles.length);
  // ctx.clearRect(0, 0, ctx.canvas.width * ratio, ctx.canvas.height * ratio);
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.fillRect(0, 0, ctx.canvas.width * ratio, ctx.canvas.height * ratio);
  particles.forEach((particle) => {
    particle.radius > 0.3 ? drawParticle({ ctx, particle }) : null;
    particle.radius -= 0.08;
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
