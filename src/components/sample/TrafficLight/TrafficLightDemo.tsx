import { useEffect, useState } from "react";
import Light from "./Light";

function TrafficLightDemo() {
  const [colorIndex, setColorIndex] = useState<number>(0);
  const lightsDuration: number[] = [4000, 3000, 1000];

  useEffect(() => {
    const timer = setTimeout(() => {
      setColorIndex((prev) => (prev + 1) % 3);
    }, lightsDuration[colorIndex]);
    return () => {
      clearTimeout(timer);
    };
  }, [colorIndex]);

  return (
    <div className="mt-5">
      <h1 className="title">Traffic Light</h1>
      <div className="traffic_container">
        <div className="traffic-light-container">
          <Light color="red" active={colorIndex === 0} />
          <Light color="yellow" active={colorIndex === 2} />
          <Light color="#00CC00" active={colorIndex === 1} />
        </div>
      </div>
    </div>
  );
}

export default TrafficLightDemo;
