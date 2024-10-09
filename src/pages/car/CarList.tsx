import { ReactNode, useEffect, useState } from "react";
import CarListItem from "./CarListItem";
import { useNavigate } from "react-router-dom";
import Header from "../../shared/Header";
import { Vehicle } from "../../shared/data/Vehicle";
import * as Vehicles from "../../shared/data/Vehicles";

export default function CarList(): ReactNode {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  // Hook to handle navigation
  const navigate = useNavigate();

  useEffect(() => {
    setVehicles(Vehicles.get());
  }, []);

  return (
    <>
      <Header />
      <h2><button title="Add a new car" onClick={() => navigate("/car/new")}>new</button>Cars</h2>
      {
        vehicles.map((vehicle) => {
          return (
            <CarListItem key={vehicle.id} vehicle={vehicle} />
          )
        })
      }
    </>
  );
}
