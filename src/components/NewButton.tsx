import "./products";
import "../index.css";
import React, {
  useState,
  ReactNode,
  useEffect,
  PropsWithChildren,
} from "react";
import axios from "axios";
import { motion, MotionProps } from "framer-motion";
import "../../node_modules/animate.css/animate.css";
import { ImgToParticles } from "image-to-particles";

type Myprops = {
  id: string;
  active: boolean;
  onClickId: (id: string) => void;
};

export default function MyButton({ id, onClickId }: Myprops) {
  const [isActive, setIsActive] = useState(false);
  function handleButton1() {
    console.log("geiaa");
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }
  return (
    <>
      <motion.div
        className={`btn btn-dark btn-lg  btn-circle ${
          isActive ? "mybutton" : "mybutton_green"
        }`}
        id={id}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => {
          onClickId(id);
          handleButton1();
        }}
      ></motion.div>
    </>
  );
}
