import { useEffect, useRef } from "react";
import useCanvas from "./useCanvas";
export default function Canvas3(params) {
  // console.log("ren");
  const canvas = useCanvas(draw);
  // const mouse = useRef({ x: undefined, y: undefined });

  const particles = [];

  const generateRandomParticle = () => {
    const x = Math.random() * canvas.current.width;
    const y = Math.random() * canvas.current.height;
    const speedX = Math.random() - 0.5;
    const speedY = Math.random() - 0.5;
    const radius = Math.random() * 5 + 1;
    const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    }, 1)`;

    return { x, y, speedX, speedY, radius, color };
  };

  // const handleClick = (e) => {
  //   mouse.current.x = e.clientX;
  //   mouse.current.y = e.clientY;
  // };

  const drawParticle = ({ ctx, particle }) => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();
  };
  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      particles.push(generateRandomParticle());
    }
  }, []);

  function draw(ctx, frameCount, ratio) {
    // console.log(particles);
    ctx.clearRect(0, 0, ctx.canvas.width * ratio, ctx.canvas.height * ratio);
    particles.forEach((particle) => {
      drawParticle({ ctx, particle });
      particle.x += particle.speedX;
      particle.y += particle.speedY;
    });
  }
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
