import React, { useState, useRef } from "react";
import "./Foreground.css";
import Card from "./Card.jsx";
import MainCard from "./MainCard.jsx";
import { v4 as uuidv4 } from "uuid";

function Foreground() {
  const ref = useRef(null);
  const initialData = [
    {
      id: uuidv4(),
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ut.",
    },
    {
      id: uuidv4(),
      desc: "my name is ga.",
    },
    {
      id: uuidv4(),
      desc: "nahi jeena",
    },
    {
      id: uuidv4(),
      desc: "hello gays",
    },
  ];

  const [data, setData] = useState(initialData);

  const addData = (newItemDesc) => {
    setData([...data, { id: uuidv4(), desc: newItemDesc }]);
    console.log(data);
  };
  const deleteCard = (id) => {
    const newUpdatedData = data.filter((obj) => obj.id !== id);
    setData(newUpdatedData);
  };

  return (
    <div ref={ref} id="main2">
      <MainCard setData={addData} reference={ref} />
      {data.map((item, index) => (
        <Card
          key={index}
          updCard={deleteCard}
          dataprop={item}
          reference={ref}
        />
      ))}
    </div>
  );
}

export default Foreground;
