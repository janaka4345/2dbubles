import useCanvas from "./useCanvas";
export default function Canvas2(params) {
  const draw = (ctx, frameCount, ratio) => {
    ctx.clearRect(0, 0, ctx.canvas.width * ratio, ctx.canvas.height * ratio);
    ctx.fillStyle = "#ff0000";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    // ctx.fillRect(10, 10, 100, 100);

    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  };
  const canvas = useCanvas(draw);
  return (
    <>
      <canvas id="canvas1" ref={canvas} />
    </>
  );
}
