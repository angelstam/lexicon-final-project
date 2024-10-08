import { ReactNode } from "react";
import CarListItem from "./CarListItem";
import { useNavigate } from "react-router-dom";
import Header from "../../shared/Header";

export default function CarList(): ReactNode {

  // Hook to handle navigation
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <h2><button title="Add a new car" onClick={() => navigate("/car/new")}>new</button>Cars</h2>
      <CarListItem />
    </>
  );
}
