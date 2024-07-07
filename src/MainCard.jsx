import React, { useState } from "react";
import "./MainCard.css";
import { motion } from "framer-motion";

function MainCard({ setData, reference }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      // Add only if input is not empty
      setData(inputValue); // Pass input to parent's addData
      setInputValue(""); // Clear input after adding
    }
  };

  return (
    <motion.div drag dragConstraints={reference} id="inp">
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Add Task</button>
    </motion.div>
  );
}

export default MainCard;
