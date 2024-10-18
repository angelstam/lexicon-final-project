import { ReactNode, useEffect, useState } from "react";
import Header from "../../shared/Header";
import ReturnButton from "../../shared/ReturnButton";
import { useNavigate, useParams } from "react-router-dom";
import { VehicleRefueling } from "../../shared/data/VehicleRefueling";
import * as VehicleRefuelings from "../../shared/data/VehicleRefuelings";

export default function FuelLogForm(): ReactNode {
  const [vehicleRefueling, setVehicleRefueling] = useState<VehicleRefueling>();

  // Hook to handle navigation
  const navigate = useNavigate();

  // Get the params from the URL.
  const { id, logId } = useParams();

  useEffect(() => {
    setVehicleRefueling(VehicleRefuelings.getById(logId as string));
  }, []);

  useEffect(() => {
    // Set HTMLOptionElement.defaultSelected to make reset work.
    Array.from(
      (document.querySelector('form[name="vehicleRefueling"] select[name="fuelCostCurrency"]') as HTMLSelectElement)
        .options).forEach(element => {
          if (element.value === vehicleRefueling?.fuelCostCurrency) {
            element.defaultSelected = true;
          }
        });

    Array.from(
      (document.querySelector('form[name="vehicleRefueling"] select[name="fuelType"]') as HTMLSelectElement)
        .options).forEach(element => {
          if (element.value === vehicleRefueling?.fuelType) {
            element.defaultSelected = true;
          }
        });
  }, [vehicleRefueling]);

  function updateVehicleRefueling(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.currentTarget));
    var newRefueling: VehicleRefueling;

    if (logId === "new") {
      newRefueling = {
        id: logId,
        vehicleId: id as string,
        date: form.date.toString(),
        odometer: Number.parseInt(form.odometer.toString()),
        fuelCost: Number.parseFloat(form.fuelCost.toString()),
        fuelCostCurrency: form.fuelCostCurrency.toString(),
        fuelType: form.fuelType.toString(),
        fuelVolume: Number.parseFloat(form.fuelVolume.toString()),
      };
      VehicleRefuelings.add(newRefueling);
    } else {
      newRefueling = structuredClone(vehicleRefueling) as VehicleRefueling;
      newRefueling.date = form.date.toString();
      newRefueling.odometer = Number.parseInt(form.odometer.toString());
      newRefueling.fuelCost = Number.parseFloat(form.fuelCost.toString());
      newRefueling.fuelCostCurrency = form.fuelCostCurrency.toString();
      newRefueling.fuelType = form.fuelType.toString();
      newRefueling.fuelVolume = Number.parseFloat(form.fuelVolume.toString());
      VehicleRefuelings.update(newRefueling);
    }
    navigate(-1);
  }

  function removeVehicleRefueling() {
    VehicleRefuelings.remove(logId as string);
    navigate(-1);
  }

  return (
    <>
      <Header><ReturnButton /></Header>
      <form name="vehicleRefueling" onSubmit={updateVehicleRefueling}>
        <h2>
          {logId !== "new" ? (
            <button title="Remove car" className="danger" onClick={removeVehicleRefueling} type="button">
              <span className="material-symbols-outlined"> delete </span>
              remove
            </button>) : ""}
          {logId === "new" ? "New" : "Edit"} Fuel Log
        </h2>
        <label>
          Date
          <input type="date" name="date" required defaultValue={vehicleRefueling?.date} />
        </label>
        <label>
          Odometer (km)
          <input type="text" name="odometer" required defaultValue={vehicleRefueling?.odometer} />
        </label>
        <div className="group">
          <label>
            Fuel Cost
            <input type="text" name="fuelCost" required defaultValue={vehicleRefueling?.fuelCost} />
          </label>
          <label>
            Currency
            <select name="fuelCostCurrency" required>
              <option value="USD">US Dolar (USD)</option>
              <option value="SEK">Svenska kronor (SEK)</option>
              <option value="EUR">Euro (EUR)</option>
            </select>
          </label>
        </div>
        <div className="group">
          <label>
            Fuel Type
            <select name="fuelType" required>
              <option value="95">95</option>
              <option value="98">98</option>
              <option value="E85">E85</option>
              <option value="Diesel">Diesel</option>
            </select>
          </label>
          <label>
            Volume (liter)
            <input type="text" name="fuelVolume" required defaultValue={vehicleRefueling?.fuelVolume} />
          </label>
        </div>
        <section>
          <button type="submit">{logId === "new" ? "Add to" : "Update"} log</button>
          <button type="reset">Reset</button>
        </section>
      </form>
    </>
  );
}
