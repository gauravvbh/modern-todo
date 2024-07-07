import React, { useState } from "react";
import "./Card.css";
import { FaRegFileAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";
import "./Foreground.jsx";

function Card({ updCard, dataprop, reference }) {
  const delCard = () => {
    updCard(dataprop.id);
  };
  const [isComp, newisComp] = useState(false);
  const complete = () => {
    newisComp(!isComp);
  };
  const randomNumber = Math.floor(Math.random() * 50);
  const posVal = `${randomNumber}%`;
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      id="card"
      style={{ top: posVal, right: posVal, left: posVal }}
    >
      <div id="logo">
        <FaRegFileAlt />
      </div>
      <div id="desc" className={isComp ? "whenCompl" : undefined}>
        {dataprop.desc}
      </div>
      <button id="del" onClick={delCard}>
        <MdDelete />
      </button>
      <button id="compl" onClick={complete}>
        {isComp ? "Completed" : "Complete"}
      </button>
    </motion.div>
  );
}

export default Card;
