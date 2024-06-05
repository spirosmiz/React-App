import "../index.css";
import "../sass/bootstrap.scss";
import "../sass/font-awesome.scss";
import { ReactNode } from "react";

export type TableProps = {
  id: ReactNode;
  status: string;
  onClickOrder: (id: ReactNode) => void;
};
export default function Table({ id, status, onClickOrder }: TableProps) {
  return (
    <>
      <div
        className={`table border border-dark  ${
          status === "available"
            ? "table-available"
            : "table-unavailabe fa-regular"
        }`}
      >
        <div className="h5 text-center" onClick={() => onClickOrder(id)}>
          {id}
        </div>
      </div>
    </>
  );
}
