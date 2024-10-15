import { ReactNode, useEffect, useState } from "react";
import Header from "../../shared/Header";
import ReturnButton from "../../shared/ReturnButton";
import { Vehicle } from "../../shared/data/Vehicle";
import { useNavigate, useParams } from "react-router-dom";
import * as Vehicles from "../../shared/data/Vehicles";
import "./CarDetail.css";
import FuelLog from "./FuelLog";

export default function CarDetail(): ReactNode {
  const [vehicle, setVehicle] = useState<Vehicle>();

  // Hook to handle navigation
  const navigate = useNavigate();

  // Get the carId param from the URL.
  let { id } = useParams();

  useEffect(() => {
    setVehicle(Vehicles.getById(id as string));
  }, []);

  return (
    <>
      <Header><ReturnButton /></Header>
      <article className="car-detail">
        <h2>
          {vehicle?.make} {vehicle?.model}
          <button title="Edit car details" onClick={() => navigate(`/car/${vehicle?.id}/edit`)}>
            <span className="material-symbols-outlined"> edit </span>
            edit
          </button>
        </h2>
        <figure><img src={vehicle?.photo} alt="Photo of car" /></figure>
        <section>
          <p>{vehicle?.odometer} km</p>
          <p>{vehicle?.fuelConsumption} l / 10 km</p>
        </section>
      </article>
      <FuelLog vehicleId={vehicle?.id as string} />
    </>
  );
}
