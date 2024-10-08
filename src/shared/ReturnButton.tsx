import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import "./ReturnButton.css";

export default function ReturnButton(): ReactNode {
  let navigate = useNavigate();

  return (
    <button className="return" onClick={() => navigate(-1)}>
      <span className="material-symbols-outlined"> arrow_back_ios </span>
      Return
    </button>
  );
}
