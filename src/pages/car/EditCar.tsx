import { ReactNode } from "react";
import Header from "../../shared/Header";
import ReturnButton from "../../shared/ReturnButton";

export default function EditCar(): ReactNode {

  return (
    <>
      <Header><ReturnButton /></Header>
      <h2>Edit Car</h2>
    </>
  );
}
