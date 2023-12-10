import { useRef } from "react";
import useCanvas from "./useCanvas";
export default function Canvas2(params) {
  const isMouseDown = useRef(false);
  const mouse = useRef({ x: undefined, y: undefined });
  const handleClick = (e) => {
    if (isMouseDown.current) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }
    // isMouseDown.current ? console.log(e.clientX) : null;
  };

  const draw = (ctx, frameCount, ratio) => {
    // ctx.clearRect(0, 0, ctx.canvas.width * ratio, ctx.canvas.height * ratio);
    ctx.fillStyle = "#ff0000";
    // ctx.strokeStyle = "white";
    // ctx.lineWidth = 5;
    // ctx.fillRect(10, 10, 100, 100);

    ctx.beginPath();
    ctx.arc(mouse.current.x, mouse.current.y, 25, 0, Math.PI * 2);
    ctx.fill();
    // ctx.stroke();
  };
  const canvas = useCanvas(draw);
  return (
    <>
      <canvas
        id="canvas1"
        ref={canvas}
        // onClick={handleClick}
        onMouseUp={() => (isMouseDown.current = false)}
        onMouseDown={() => (isMouseDown.current = true)}
        onMouseMove={handleClick}
      />
    </>
  );
}
