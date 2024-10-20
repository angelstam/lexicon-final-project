import { VehicleRefueling } from "./VehicleRefueling";
import * as LocalDB from "./LocalDB";

const LOCAL_TABLE = "vehicle-refuelings"

export function get(vehicleId: string): VehicleRefueling[] {
  return LocalDB.get<VehicleRefueling>(LOCAL_TABLE, getDefaultVehicleRefuelings)
    .filter(refueling => refueling.vehicleId === vehicleId);
}

export function getById(id: string): VehicleRefueling | undefined {
  return LocalDB.get<VehicleRefueling>(LOCAL_TABLE)
    .find(refueling => refueling.id === id);
}

function getAll(): VehicleRefueling[] {
  return LocalDB.get<VehicleRefueling>(LOCAL_TABLE);
}

export function add(newRefueling: VehicleRefueling) {
  newRefueling.id = LocalDB.getNextId(LOCAL_TABLE, "vehicle-refueling-last-id");
  LocalDB.store<VehicleRefueling>(LOCAL_TABLE, [...getAll(), newRefueling]);
}

export function update(newRefueling: VehicleRefueling) {
  LocalDB.update(LOCAL_TABLE, newRefueling);
}

export function remove(id: string) {
  LocalDB.remove(LOCAL_TABLE, id);
}

function getDefaultVehicleRefuelings(): VehicleRefueling[] {
  return [
    {
      id: "1",
      vehicleId: "1",
      date: "2024-10-15",
      fuelCost: 300,
      fuelCostCurrency: "SEK",
      fuelType: "E85",
      fuelVolume: 15,
      odometer: 200015,
    }
  ];
}
