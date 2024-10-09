import { ReactNode, useEffect, useState } from "react";
import Header from "../../shared/Header";
import ReturnButton from "../../shared/ReturnButton";
import { Vehicle } from "../../shared/data/Vehicle";
import { useParams } from "react-router-dom";
import * as Vehicles from "../../shared/data/Vehicles";

export default function CarDetail(): ReactNode {
  const [vehicle, setVehicle] = useState<Vehicle>();

  // Get the carId param from the URL.
  let { id } = useParams();

  useEffect(() => {
    setVehicle(Vehicles.getById(id as string));
  }, []);

  return (
    <article className="car-detail">
      <Header><ReturnButton /></Header>
      <h2>{vehicle?.make} {vehicle?.model}</h2>
      <figure><img src={vehicle?.photo} alt="Photo of car" /></figure>
      <section>
        <p>{vehicle?.odometer} km</p>
        <p>{vehicle?.fuelConsumption} l / 10 km</p>
      </section>
    </article>
  );
}
