import { useState, ReactNode } from "react";
import MyProduct from "../components/products";
import "../sass/bootstrap.scss";

import { coffees, sweets, cocktails } from "../components/menu";
import { motion, MotionProps } from "framer-motion";

import axios from "axios";
import OrderProducts from "./order_products";
export type Myprops1 = {
  id: string;
  price: number;
  quantity: number;
  category: string;
  specifications: string;
};
export type OrderProps<Myprops1> = {
  table: number;
  status: string;
  order: Myprops1[];
};

function Catalog() {
  const [productList, setProductList] = useState<Myprops1[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(
    "coffees"
  );

  function handleCategory(category: string) {
    setActiveCategory(category);
    console.log(activeCategory + "  here is the acrtive category");
  }
  const renderProducts = () => {
    const selectedProducts =
      activeCategory === "all"
        ? [...coffees, ...sweets, ...cocktails]
        : activeCategory === "coffees"
        ? coffees
        : activeCategory === "sweets"
        ? sweets
        : activeCategory === "cocktails"
        ? cocktails
        : [];

    return (
      <ul className="list-unstyled">
        {selectedProducts.map((product) => (
          <MyProduct
            key={product.id}
            id={product.id}
            quantity={product.quantity}
            price={product.price}
            category={product.category}
            onclickIdIncrease={handleOrderIncrease}
            onclickIdDecrease={handleOrderDecrease}
          />
        ))}
      </ul>
    );
  };

  function sendOrder() {
    const newOrder: OrderProps<Myprops1> = {
      table: 10,
      status: "Issued",
      order: productList,
    };
    for (let i = 0; productList.length; i++) {
      const product = productList[i];

      console.log(product.quantity + "  here is the product " + product.id);
    }

    axios
      .post("http://192.168.2.90:3001/createOrder", newOrder)

      .then((response) => {
        console.log(response + "here i sthe response");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  function handleOrderIncrease(
    id: string,
    price: number,
    quantity: number,
    category: string
  ) {
    setProductList((prevProducts) => {
      const productExists = prevProducts.find((product) => product.id === id);
      if (productExists) {
        return prevProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        const newProduct: Myprops1 = {
          id: id,
          price: price,
          quantity: 1,
          specifications: "",
          category: category,
        };
        return [...prevProducts, newProduct];
      }
    });

    const postData = {
      id: id,
      price: price,
      category: category,
    };
    console.log(postData.id + "hello data");
  }
  function handleOrderDecrease(
    id: string,
    price: number,
    quantity: number,
    category: string
  ) {
    console.log(id + "hello data");

    setProductList((prevProducts) => {
      return prevProducts.filter((product) => product.id !== id);
    });
  }
  function handleOrderDelete(id: string) {
    console.log(id + "hello data");

    setProductList((prevProducts) => {
      return prevProducts.filter((product) => product.id !== id);
    });
  }

  return (
    <>
      <nav className="navbar navbar-light bg-secondary">
        <div className="container-fluid">
          <div className="navbar" id="navbarNav">
            <motion.div
              className="navbuttons bg-secondary "
              onClick={() => handleCategory("coffees")}
            >
              <i className="nav-icons fa-solid text-white  fa-mug-saucer"></i>
            </motion.div>
          </div>

          <div className="navbar" id="navbarNav">
            <motion.div
              className="navbuttons  bg-secondary  "
              onClick={() => handleCategory("sweets")}
            >
              <i className="nav-icons fa-solid text-white  fa-mug-saucer"></i>
            </motion.div>
          </div>

          <div className="navbar" id="navbarNav">
            <motion.div
              className="navbuttons bg-secondary "
              onClick={() => handleCategory("cocktails")}
            >
              <i className="nav-icons fa-solid text-white  fa-mug-saucer"></i>
            </motion.div>
          </div>

          <div className="navbar" id="navbarNav">
            <motion.div className="navbuttons bg-secondary  ">
              <i className="nav-icons fa-solid text-white  fa-mug-saucer"></i>
            </motion.div>
          </div>

          <div className="navbar" id="navbarNav">
            <motion.div className="navbuttons bg-secondary  ">
              <i className="nav-icons fa-solid text-white  fa-mug-saucer"></i>
            </motion.div>
          </div>
          <div className="navbar" id="navbarNav">
            <motion.div className="navbuttons bg-secondary  ">
              <i className="nav-icons fa-solid text-white  fa-mug-saucer"></i>
            </motion.div>
          </div>
          <div className="navbar" id="navbarNav">
            <motion.div className="navbuttons bg-secondary  ">
              <i className="nav-icons fa-solid text-white  fa-mug-saucer"></i>
            </motion.div>
          </div>
          <div className="navbar" id="navbarNav">
            <motion.div className="navbuttons bg-secondary  ">
              <i className="nav-icons fa-solid text-white  fa-mug-saucer"></i>
            </motion.div>
          </div>
          <div className="navbar" id="navbarNav">
            <motion.div className="navbuttons bg-secondary  ">
              <i className="nav-icons fa-solid text-white  fa-mug-saucer"></i>
            </motion.div>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row d-flex flex-column ">
          <div
            className="col-12"
            style={{
              fontSize: "12px",
            }}
          >
            {renderProducts()}
          </div>
          <div className="col-12">
            <div
              className="order-border mt-6 d-flex flex-column justify-content-between"
              style={{
                minHeight: "200px",
                fontSize: "12px",
              }}
            >
              <h5>Παραγγελία</h5>

              <ul className="order-list list-unstyled">
                {productList.map((product) => (
                  <li key={product.id}>
                    <OrderProducts
                      key={product.id}
                      id={product.id}
                      quantity={product.quantity}
                      price={product.price}
                      category={product.category}
                      specifications={product.specifications}
                      onclickIdIncrease={handleOrderIncrease}
                      onclickIdDecrease={handleOrderDecrease}
                      onclickIdDelete={handleOrderDelete}
                    ></OrderProducts>
                  </li>
                ))}
              </ul>
              <div className="mb-3">
                <div
                  className="button-of-order btn btn-outline-dark m-1"
                  onClick={sendOrder}
                >
                  Submit
                </div>
                <div
                  className="button-of-order btn btn-outline-dark m-1"
                  onClick={sendOrder}
                >
                  Pay
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalog;
