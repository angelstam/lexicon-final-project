import { Vehicle } from "./Vehicle";

export function get(): Vehicle[] {
  return [
    {
      id: "1",
      make: "Saab",
      model: "9-5",
      photo: "",
      odometer: 200000,
      fuelConsumption: 1.0,
    },
    {
      id: "2",
      make: "Toyota",
      model: "Land Cruiser",
      photo: "",
      odometer: 200000,
      fuelConsumption: 1.0,
    },
  ]
}

export function getById(id: string): Vehicle | undefined {
  return get().find(vehicle => vehicle.id === id);
}
