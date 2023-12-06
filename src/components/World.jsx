import { useEffect, useRef } from "react";

export default function World(props) {
  const canvasRef = useRef();

  const draw = (ctx) => {
    ctx.fillStyle = "#ff0000";
    ctx.beginPath();
    ctx.arc(50, 100, 20, 0, 2 * Math.PI);
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    draw(context);
  }, [draw]);
  return (
    <>
      <canvas id="canvas1" ref={canvasRef}></canvas>
    </>
  );
}
