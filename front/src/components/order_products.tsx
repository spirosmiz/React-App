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

export type MyOrderprops = {
  id: string;
  price: number;
  quantity: number;
  category: string;
  specifications: string;

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
  onclickIdDelete: (id: string) => void;
};

export default function OrderProducts({
  id,
  price,
  onclickIdIncrease,
  onclickIdDecrease,
  onclickIdDelete,
  category,
  specifications,
}: MyOrderprops) {
  const [quantity, setQuantity] = useState(1);

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
      <div className="row" style={{ lineHeight: "5" }}>
        <div className="col-5 d-flex text-nowrap text-start fw-bold">{id}</div>
        <div className="col-2 d-flex text-start fw-bold"></div>
        <div className="col-5 d-flex text-center justify-content-end ">
          <motion.div
            whileTap={{ scale: 0.9 }}
            style={{ padding: "inherit" }}
            onClick={() => {
              increaseQuantity();
              onclickIdIncrease(id, price, quantity, category);
            }}
          >
            <i className="fa-solid fa-plus fa-2x "></i>
          </motion.div>
          <h5 style={{ width: "10px" }}>{quantity}</h5>
          <motion.div
            whileTap={{ scale: 0.8 }}
            style={{ padding: "inherit" }}
            onClick={() => {
              decreaseQuantity();
              onclickIdDecrease(id, price, quantity, category);
            }}
          >
            <i className="fa-solid fa-minus fa-2x"></i>
          </motion.div>
          <motion.div onClick={() => onclickIdDelete(id)}>
            <i className="fa fa-trash fa-2x ml-3" aria-hidden="true"></i>
          </motion.div>
        </div>
      </div>
    </>
  );
}
