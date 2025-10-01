import { useEffect, useState } from "react";
import { capitalize } from "../../../helpers/capitalize";

interface ColorBox {
  id: number;
  text: string;
  backgroundColor: string;
}

function ColorBoxDemo() {
  const [data, setData] = useState<ColorBox[]>([]);
  const [currentColor, setCurrentColor] = useState("Default");

  useEffect(() => {
    import("./data/colorBox.json")
      .then((res) => setData(res.default as ColorBox[]))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  function handleBoxColor(bgColor: string) {
    //set lai color neu da click roi
    if (bgColor === currentColor) {
      return setCurrentColor("Default");
    }
    //Neu chua click thi doi mau cac box con lai
    setCurrentColor(bgColor);
  }

  return (
    <>
      <div className="mt-5">
        <h1 className="title">Color Box</h1>
        <div className="current-color mb-2">
          <p className="text-lg">Current color: {capitalize(currentColor)}</p>
        </div>
        <div className="box-color">
          {data.map((box) => (
            <div
              className="box text-lg"
              key={box.id}
              style={{
                backgroundColor:
                  currentColor === "Default"
                    ? box.backgroundColor
                    : currentColor,
              }}
              onClick={() => handleBoxColor(box.backgroundColor)}
            >
              {box.text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ColorBoxDemo;
