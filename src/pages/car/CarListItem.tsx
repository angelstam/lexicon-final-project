import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Vehicle } from "../../shared/data/Vehicle";

export default function CarListItem({ vehicle }: { vehicle: Vehicle }): ReactNode {

  // Hook to handle navigation
  const navigate = useNavigate();

  return (
    <article className="car-list-item" onClick={() => navigate(`/car/${vehicle.id}`)}>
      <figure><img src={vehicle.photo} alt="Photo of car" /></figure>
      <section>
        <h3>{vehicle?.make} {vehicle?.model}</h3>
        <p>{vehicle?.odometer} km</p>
        <p>{vehicle?.fuelConsumption} l / 10 km</p>
      </section>
    </article>
  );
}
