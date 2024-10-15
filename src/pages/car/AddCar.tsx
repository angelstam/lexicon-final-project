import { ReactNode } from "react";
import Header from "../../shared/Header";
import ReturnButton from "../../shared/ReturnButton";
import { Vehicle } from "../../shared/data/Vehicle";
import * as Vehicles from "../../shared/data/Vehicles";
import { useNavigate } from "react-router-dom";

export default function AddCar(): ReactNode {
  // Hook to handle navigation
  const navigate = useNavigate();

  function addVehicle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newVehicle: Vehicle = {
      id: "new",
      make: e.currentTarget.make.value,
      model: e.currentTarget.model.value,
      photo: e.currentTarget.photo.value,
    };
    Vehicles.add(newVehicle);
    navigate("/");
  }

  return (
    <>
      <Header><ReturnButton /></Header>
      <form name="newCar" onSubmit={addVehicle}>
        <h2>Add Car</h2>
        <label>
          Make
          <input type="text" name="make" required></input>
        </label>
        <label>
          Model
          <input type="text" name="model" required></input>
        </label>
        <label>
          Photo
          <input type="text" name="photo" required></input>
        </label>
        <section>
          <button type="submit">Add car</button>
          <button type="reset">Reset</button>
        </section>
      </form>
    </>
  );
}
