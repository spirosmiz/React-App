import "./products";
import "../index.css";
import React, { useState, useEffect, PropsWithChildren } from "react";
import axios from "axios";
import { motion, MotionProps } from "framer-motion";
import "../../node_modules/animate.css/animate.css";
type Properties = {
  id: string;
  onClickID: (id: string) => void;
};
const MyMotionButton = (props: {
  handlebutton: () => void;
  children: React.ReactNode;
  active: boolean;
  id: string;
}) => {
  return (
    <motion.div
      className={`btn btn-dark btn-lg  btn-circle ${
        props.active ? "mybutton" : "mybutton_green"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
    >
      {props.children}
    </motion.div>
  );
};

export default function Button({ id, onClickID }: Properties) {
  const [isActive, setIsActive] = useState(false);
  function handleButton1() {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }
  //const result = axios.post("http://10.10.1.74:4000/user/IO", { btn1: true });
  //console.log(result);

  return (
    <div className="vstack gap-5">
      <MyMotionButton
        handlebutton={handleButton1}
        onClick={() => onClickID(id)}
        active={isActive}
        id={id}
      >
        <div className="fw-bolder"></div>
      </MyMotionButton>
    </div>
  );
}
