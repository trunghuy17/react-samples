
interface LightProps {
  color: string;
  active: boolean;
}

function Light({ color, active }: LightProps) {
  return (
    <div
      className="traffic-light"
      style={{ backgroundColor: color, opacity: active ? 1 : 0.4 }}
    ></div>
  );
}

export default Light;
