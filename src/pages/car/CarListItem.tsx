import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Vehicle } from "../../shared/data/Vehicle";
import "./CarListItem.css";

export default function CarListItem({ vehicle }: { vehicle: Vehicle }): ReactNode {

  return (
    <Link className="car-list-item" to={`/car/${vehicle.id}`}>
      <figure><img src={vehicle.photo} alt="Photo of car" /></figure>
      <section>
        <h3>{vehicle?.make} {vehicle?.model}</h3>
        <p>{vehicle?.odometer} km</p>
        <p>{vehicle?.fuelConsumption} l / 10 km</p>
      </section>
    </Link>
  );
}
