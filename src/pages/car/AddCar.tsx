import { ReactNode } from "react";
import Header from "../../shared/Header";
import ReturnButton from "../../shared/ReturnButton";

export default function AddCar(): ReactNode {

  return (
    <>
      <Header><ReturnButton /></Header>
      <form name="newCar">
        <h2>Add Car</h2>
        <label>
          Make
          <input type="text" name="make"></input>
        </label>
        <label>
          Model
          <input type="text" name="brand"></input>
        </label>
        <label>
          Photo
          <input type="text" name="photo"></input>
        </label>
        <section>
          <button type="submit">Add car</button>
          <button type="reset">Reset</button>
        </section>
      </form>
    </>
  );
}
