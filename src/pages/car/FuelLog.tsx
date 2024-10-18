import { ReactNode, useEffect, useState } from "react";
import { VehicleRefueling } from "../../shared/data/VehicleRefueling";
import * as VehicleRefuelings from "../../shared/data/VehicleRefuelings";
import "./FuelLog.css";
import { useNavigate } from "react-router-dom";

export default function FuelLog({ vehicleId }: { vehicleId: string }): ReactNode {
  const [vehicleRefuelings, setVehicleRefuelings] = useState<VehicleRefueling[]>([]);

  // Hook to handle navigation
  const navigate = useNavigate();

  useEffect(() => {
    setVehicleRefuelings(VehicleRefuelings.get(vehicleId));
  }, []);

  return (
    <>
      <h3><button title="Add a new row" onClick={() => navigate(`/car/${vehicleId}/fuel-log/new`)}>new</button>Gas Log</h3>
      <table className="fuel-log">
        <thead>
          <tr>
            <th>Date</th>
            <th>Odometer</th>
            <th>Fuel</th>
            <th>Cost</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            vehicleRefuelings.map((log) => {
              return (
                <tr key={log.id}>
                  <td>{log?.date}</td>
                  <td>{log?.odometer}</td>
                  <td>{log?.fuelType} {log?.fuelVolume} l</td>
                  <td>{log?.fuelCost} {log?.fuelCostCurrency}</td>
                  <td>
                    <button type="button" onClick={() => navigate(`/car/${vehicleId}/fuel-log/${log.id}`)}>
                      <span className="material-symbols-outlined"> edit </span>
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
}
