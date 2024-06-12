import "../index.css";
import "../sass/bootstrap.scss";
import "../sass/font-awesome.scss";
import { ReactNode } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export type TableProps = {
  id: string;
  status: string;
  onClickOrder: (id: string, status: string) => void;
  onClickPay: (id: string) => void;
  onClickAddOrder: (id: string) => void;
};
export default function Table({
  id,
  status,
  onClickOrder,
  onClickPay,
  onClickAddOrder,
}: TableProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function checkModalShow(id: string) {
    if (status === "occupied") {
    }
  }

  return (
    <>
      <Modal
        className="modal-alert"
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>What you should do?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              onClickPay(id);
              handleClose();
            }}
            className="modal-button-pay border border-dark"
          >
            Payment
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              onClickAddOrder(id);
              handleClose();
            }}
            className="modal-button-order border border-dark "
          >
            Add Order
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        onClick={() => {
          onClickOrder(id, status);
          if (status === "occupied") {
            handleShow();
          }
        }}
        className={`table border border-dark  ${
          status === "available"
            ? "table-available"
            : "table-unavailabe fa-regular"
        }`}
      >
        <div className="h5 text-center">{id}</div>
      </div>
    </>
  );
}
