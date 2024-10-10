import { ReactNode, useState } from "react";
import { VehicleRefueling } from "../../shared/data/VehicleRefueling";
import "./FuelLog.css";

export default function FuelLog({ vehicleId }: { vehicleId: string }): ReactNode {
  const [vehicleRefuelings, _] = useState<VehicleRefueling[]>([]);
  console.log("vehicleId", vehicleId);

  return (
    <>
      <h3><button title="Add a new row">new</button>Gas Log</h3>
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
                  <td><span className="material-symbols-outlined"> edit </span></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
}
