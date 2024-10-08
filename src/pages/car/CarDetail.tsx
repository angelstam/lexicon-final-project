import { ReactNode } from "react";
import Header from "../../shared/Header";
import ReturnButton from "../../shared/ReturnButton";

export default function CarDetail(): ReactNode {

  return (
    <>
      <Header><ReturnButton /></Header>
      <h2>Car Name</h2>
    </>
  );
}
