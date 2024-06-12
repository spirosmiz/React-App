import { useState, ReactNode } from "react";
import MyProduct from "../components/products";
import "../sass/bootstrap.scss";
import Button from "react-bootstrap/Button";
import { coffees, sweets, cocktails } from "../components/menu";
import { motion, MotionProps } from "framer-motion";

import axios from "axios";
import OrderProducts from "./order_products";
export type CatalogProps = {
  table: string;
  existing_order: any[];
};
export type Myprops1 = {
  id: string;
  price: number;
  quantity: number;
  category: string;
  specifications: string;
};
export type OrderProps<Myprops1> = {
  order: Myprops1[];
};

function Catalog({ table, existing_order }: CatalogProps) {
  const [productList, setProductList] = useState<Myprops1[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  function returnOrder() {
    if (existing_order != null) {
      const view_order = JSON.stringify(existing_order);

      for (const key in existing_order) {
        console.log(
          key + "  the property   " + existing_order[key].value + "  the value "
        );
      }
    }
    return existing_order;
  }

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
      order: productList,
    };

    axios
      .post(`http://192.168.2.3:3001/createOrder/${table}`, newOrder)

      .then((response) => {
        console.log(response + "the order has been created succesfully");
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
      quantity: quantity,
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
      <nav className="navbar navbar-light " style={{ backgroundColor: "#222" }}>
        <div className="container-fluid">
          <div className="row">
            <Button
              variant="primary"
              onClick={sendOrder}
              className="back-button border border-dark ml-3 "
            >
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 6L9 12l6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </Button>
          </div>
          <div className="row">
            {" "}
            <motion.div
              className="navbuttons  "
              onClick={() => handleCategory("coffees")}
            >
              <i className="nav-icons fa-solid text-white  fa-mug-saucer"></i>
            </motion.div>
          </div>

          <div className="navbar" id="navbarNav">
            <motion.div
              className="navbuttons    "
              onClick={() => handleCategory("sweets")}
            >
              <i className="nav-icons fa-solid text-white  fa-mug-saucer"></i>
            </motion.div>
          </div>

          <div className="navbar" id="navbarNav">
            <motion.div
              className="navbuttons  "
              onClick={() => handleCategory("cocktails")}
            >
              <i className="nav-icons fa-solid text-white  fa-mug-saucer"></i>
            </motion.div>
          </div>

          <div className="navbar" id="navbarNav">
            <motion.div className="navbuttons   ">
              <i className="nav-icons fa-solid text-white  fa-mug-saucer"></i>
            </motion.div>
          </div>

          <div className="navbar" id="navbarNav">
            <motion.div className="navbuttons   ">
              <i className="nav-icons fa-solid text-white  fa-mug-saucer"></i>
            </motion.div>
          </div>
          <div className="navbar" id="navbarNav">
            <motion.div className="navbuttons   ">
              <i className="nav-icons fa-solid text-white  fa-mug-saucer"></i>
            </motion.div>
          </div>
          <div className="navbar" id="navbarNav">
            <motion.div className="navbuttons   ">
              <i className="nav-icons fa-solid text-white  fa-mug-saucer"></i>
            </motion.div>
          </div>
          <div className="navbar" id="navbarNav">
            <motion.div className="navbuttons   ">
              <i className="nav-icons fa-solid text-white  fa-mug-saucer"></i>
            </motion.div>
          </div>
          <div className="navbar" id="navbarNav">
            <motion.div className="navbuttons   ">
              <i className="nav-icons fa-solid text-white  fa-mug-saucer"></i>
            </motion.div>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row d-flex flex-column ">
          <div
            className="col-16"
            style={{
              fontSize: "12px",
            }}
          >
            <h2>Τραπέζι {table}</h2>
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

              <ul className="order-list list-unstyled ">
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
              <div className="mb-3 ">
                <Button
                  variant="primary"
                  onClick={sendOrder}
                  className="modal-button-order border border-dark mr-3 "
                >
                  Send Order
                </Button>
                <Button
                  variant="primary"
                  onClick={sendOrder}
                  className="modal-button-order border border-dark ml-3 "
                >
                  Payment
                </Button>
                {returnOrder()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalog;
