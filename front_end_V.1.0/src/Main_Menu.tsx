import { ReactNode, useEffect, useState } from "react";
import Catalog from "./components/catalog";
import Table, { TableProps } from "./components/tables";
import Header from "./components/header";
import { Mytables } from "./components/tablesmap";
import "./index.css";
import "./sass/bootstrap.scss";
import "./sass/font-awesome.scss";
import axios from "axios";
import { color } from "framer-motion";
import { motion, MotionProps, AnimatePresence } from "framer-motion";
import App from "./App";

function MainMenu() {
  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <div className="row d-flex">
        <Header></Header>
        <div className="border border-dark w-100">
          <div className="col-12 ">
            <h2>Παιδική Χαρά</h2>
            <App position={"Up"}></App>
          </div>
        </div>
        <div className="col-12 border border-dark w-100">
          <h2>Κάτω </h2>
          <App position={"Down"}></App>
        </div>
      </div>
    </>
  );
}

export default MainMenu;
