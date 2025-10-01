import { useEffect, useState } from "react";

interface AccordionData  {
  title: string;
  content: string;
}

function AccordionDemo() {
  const [data, setData] = useState<AccordionData []>([]);
  const [activeIndex, setActiveIndex] = useState<number[]>([]);

  //call data from json
  useEffect(() => {
    import("./data/accordion.json").then((res) => setData(res.default));
  },[]);

  //Toggle index
  function toggleIndex(index: number) {
    //Neu index da duoc click da co trong activeIndex thi filter ra khoi activeIndex
    if(activeIndex.includes(index)){
      setActiveIndex(activeIndex.filter((i) => i !== index));
    }
    //Neu index da duoc click chua co thi them vao trong activeIndex
    else{
      setActiveIndex([...activeIndex, index]);
    }
  }
  return (
    <>
      <div className="mt-5">
        <h1 className="title">Accordion</h1>
        <div className="accordion-list" >
          {data.map((item, index) => (
            <div className="accordion-item" key={index}>
              <button
                onClick={() => toggleIndex(index)}
                className="w-full p-4 bg-gray-200 flex justify-between"
                style={{borderBottom:'1px solid #e0e0e0'}}
              >
                <span>{item.title}</span>
              </button>
              <div className={`${activeIndex.includes(index) ? "block" : "hidden"} p-4 `}>
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AccordionDemo;
