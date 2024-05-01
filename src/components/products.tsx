import { Children, ReactNode } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../index.css";
import axios from "axios";
import MyButton from "./NewButton";

export default function Product() {

  var data=[
    {id:"ind1",
    value:false},
    {id:"ind2",
    value:false},
    {id:"ind3",
    value:false}]

   
  
function statusDisplay (){
  const result = axios.get("http://localhost:4000/Interface/B3416");
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

 const my_var=setInterval(() => {
    statusDisplay();
}, 10000);
  function handleStatus(id: string ,active:boolean) {
    console.log("Button pressed by the user the id is:" + id);
    if (active) {
      active=false;
    } else {
      active=true;
    }
    
    const data={
      id:id,
      value:active
    }
    const result = axios.post("http://localhost:4000/Interface/B3416",data);

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
