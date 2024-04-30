import { Children, ReactNode } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../index.css";
import "./buttons";
import axios from "axios";
import Button from "./buttons";
import MyButton from "./NewButton";

export default function Product() {
  function handleStatus(id: string) {
    console.log("Button pressed by the user the id is:" + id);
    const result = axios.post("http://10.10.1.74:4000/user/IO", { btn1: true });

    result
      .then((response) => {
        console.log("Request successful! Response data:", response.data);
        // Process the successful response data here
      })
      .catch((error) => {
        console.error("Request failed:", error);
        // Handle any errors that occurred during the request
      });
  }
  return (
    <article>
      <div className="container-fluid w-100">
        <div className="row d-flex w-100 ">
          <div className="col-6">
            <div className="row">
              <div className="my-border ">
                <div className="col-6">
                  <MyButton
                    id="btn1"
                    onClickId={handleStatus}
                    active={false}
                  ></MyButton>
                </div>
                <div className="my-border bg-primary ">
                  <div className="col-6">
                    <MyButton
                      id="btn2"
                      onClickId={handleStatus}
                      active={false}
                    ></MyButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
