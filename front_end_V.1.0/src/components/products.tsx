import "../index.css";
import "../sass/bootstrap.scss";
import "../sass/font-awesome.scss";

import React, {
  useState,
  ReactNode,
  useEffect,
  PropsWithChildren,
  Children,
} from "react";

import { motion, MotionProps } from "framer-motion";

export type Myprops = {
  id: string;
  price: number;
  quantity: number;
  category: string;
  onclickIdIncrease: (
    id: string,
    price: number,
    quantity: number,
    category: string
  ) => void;
  onclickIdDecrease: (
    id: string,
    price: number,
    quantity: number,
    category: string
  ) => void;
};

export default function MyProduct({
  id,
  price,
  onclickIdIncrease,
  onclickIdDecrease,
  category,
}: Myprops) {
  const [quantity, setQuantity] = useState(0);

  function increaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function decreaseQuantity() {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 0) {
        return prevQuantity - 1;
      } else {
        return prevQuantity; // Or handle the case when quantity is 0
      }
    });
  }

  return (
    <>
      <div className="row d-flex">
        <div className="col-5 text-nowrap text-start fw-bold">{id}</div>
        <div className="col-2 d-flex text-start fw-bold"></div>
        <div className="col-5 d-flex text-center justify-content-end">
          <motion.div
            className="product-buttons btn btn-danger btn-circle"
            whileTap={{ scale: 0.9 }}
            style={{ padding: "inherit" }}
            onClick={() => {
              increaseQuantity();
              onclickIdIncrease(id, price, quantity, category);
            }}
          >
            <i className="fa-solid fa-plus "></i>
          </motion.div>
          <h5 style={{ width: "10px" }}>{quantity}</h5>
          <motion.div
            className="product-buttons btn btn-danger btn-circle"
            whileTap={{ scale: 0.8 }}
            style={{ padding: "inherit" }}
            onClick={() => {
              decreaseQuantity();
              onclickIdDecrease(id, price, quantity, category);
            }}
          >
            <i className="fa-solid fa-minus"></i>
          </motion.div>
        </div>
      </div>
    </>
  );
}
