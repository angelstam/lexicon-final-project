import { Vehicle } from "./Vehicle";
import * as LocalDB from "./LocalDB";

const LOCAL_TABLE = "vehicles"

export function get(): Vehicle[] {
  return LocalDB.get<Vehicle>(LOCAL_TABLE, getDefaultVehicles);
}

export function getById(id: string): Vehicle | undefined {
  return get().find(vehicle => vehicle.id === id);
}

export function add(newVehicle: Vehicle) {
  newVehicle.id = LocalDB.getNextId(LOCAL_TABLE, "vehicle-last-id");
  LocalDB.store<Vehicle>(LOCAL_TABLE, [...get(), newVehicle]);
}

export function update(newVehicle: Vehicle) {
  LocalDB.update(LOCAL_TABLE, newVehicle);
}

export function remove(id: string) {
  LocalDB.remove(LOCAL_TABLE, id);
}

function getDefaultVehicles(): Vehicle[] {
  return [
    {
      id: "1",
      make: "Saab",
      model: "9-5",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Saab_9-5_Aero_Turbo_XWD.JPG/640px-Saab_9-5_Aero_Turbo_XWD.JPG",
      odometer: 200000,
      fuelConsumption: 1.0,
    },
    {
      id: "2",
      make: "Toyota",
      model: "Land Cruiser",
      photo: "https://images.squarespace-cdn.com/content/v1/5c0f72ebf407b49c4784c8b1/1632108256151-TODFQGZA2A6LSLHHU28Z/IMG_9596-2.jpg?format=600w",
      odometer: 200000,
      fuelConsumption: 1.0,
    },
  ]
}
