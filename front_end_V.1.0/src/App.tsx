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
import { motion, MotionProps } from "framer-motion";

type propTables = {
  position: string;
};
function App({ position }: propTables) {
  const [showOrder, setShowOrder] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [table_index, setTable] = useState("");
  const [order_view, setOrder] = useState([]);

  const [tablesList, setTableList] = useState<TableProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(
          `http://192.168.2.3:3001/availabilities`
        );
        setTableList(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  function handleOrder1(id: string, status: string) {
    console.log(id + "here is the pressed table and the status " + status);
    if (status == "available") {
      setShowOrder(true);
      setShowTable(false);
      setTable(id);
    }
  }
  function nextLevel(id: string) {
    setShowOrder(true);
    setShowTable(false);
  }

  function handlePayment(id: string) {
    setShowOrder(true);
    setShowTable(false);
    setTable(id);
    axios
      .post(`http://192.168.2.3:3001/findOrder/${id}`)

      .then((response) => {
        console.log(response.data);
        setOrder(response.data);
        console.log(order_view);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  return (
    <>
      <div>
        <div
          className="container-fluid w-100 "
          id="table-container"
          style={{ display: showTable ? "block" : "none" }}
        >
          <div className="row">
            {tablesList.length > 0 &&
              tablesList.map((table) => (
                <div className="col-3">
                  <Table
                    status={table.status}
                    id={table.id}
                    onClickOrder={handleOrder1}
                    onClickPay={handlePayment}
                    onClickAddOrder={nextLevel}
                  />
                </div>
              ))}
          </div>
        </div>
        <div
          className="m-auto text-center "
          id="order-container"
          style={{ display: showOrder ? "block" : "none" }}
        >
          <Catalog table={table_index} existing_order={order_view} />
        </div>
      </div>
    </>
  );
}

export default App;
