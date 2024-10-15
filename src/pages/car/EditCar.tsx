import { ReactNode, useEffect, useState } from "react";
import Header from "../../shared/Header";
import ReturnButton from "../../shared/ReturnButton";
import { useNavigate, useParams } from "react-router-dom";
import { Vehicle } from "../../shared/data/Vehicle";
import * as Vehicles from "../../shared/data/Vehicles";

export default function EditCar(): ReactNode {
  const [vehicle, setVehicle] = useState<Vehicle>();

  // Hook to handle navigation
  const navigate = useNavigate();

  // Get the carId param from the URL.
  let { id } = useParams();

  useEffect(() => {
    setVehicle(Vehicles.getById(id as string));
  }, []);

  function updateVehicle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let newVehicle: Vehicle = structuredClone(vehicle) as Vehicle;
    newVehicle.make = e.currentTarget.make.value;
    newVehicle.model = e.currentTarget.model.value;
    newVehicle.photo = e.currentTarget.photo.value;
    Vehicles.update(newVehicle);
    navigate(-1);
  }

  function removeVehicle() {
    Vehicles.remove(id as string);
    navigate(-2);
  }

  return (
    <>
      <Header><ReturnButton /></Header>
      <form name="newCar" onSubmit={updateVehicle}>
        <h2>
          <button title="Remove car" className="danger" onClick={removeVehicle} type="button">
            <span className="material-symbols-outlined"> delete </span>
            remove
          </button>
          Edit Car
        </h2>
        <label>
          Make
          <input type="text" name="make" required defaultValue={vehicle?.make} />
        </label>
        <label>
          Model
          <input type="text" name="model" required defaultValue={vehicle?.model} />
        </label>
        <label>
          Photo
          <input type="text" name="photo" required defaultValue={vehicle?.photo} />
        </label>
        <section>
          <button type="submit">Update car</button>
          <button type="reset">Reset</button>
        </section>
      </form>
    </>
  );
}
