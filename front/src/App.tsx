import { ReactNode, useState } from "react";
import Catalog from "./components/catalog";
import Table from "./components/tables";
import { Mytables } from "./components/tablesmap";
import "./index.css";
import "./sass/bootstrap.scss";
import "./sass/font-awesome.scss";
import axios from "axios";

function App() {
  const [showOrder, setShowOrder] = useState(false);
  const [showTable, setShowTable] = useState(true);
  function handleOrder1(id: ReactNode) {
    console.log(id + "here is the id of the table");
    setShowOrder(true);
    setShowTable(false);
    axios
      .post(`http://192.168.2.90:3001/viewOrder/${id}`)

      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }
  return (
    <>
      <div
        className="container-fluid w-100"
        id="table-container"
        style={{ display: showTable ? "block" : "none" }}
      >
        <div className="row mt-8">
          {Mytables.map((table) => (
            <div className="col-3">
              <Table
                status={table.status}
                id={table.id}
                onClickOrder={handleOrder1}
              ></Table>
            </div>
          ))}
        </div>
      </div>
      <div
        className="m-auto text-center "
        id="order-container"
        style={{ display: showOrder ? "block" : "none" }}
      >
        <Catalog />
      </div>
    </>
  );
}

export default App;
