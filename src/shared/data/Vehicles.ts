import { Vehicle } from "./Vehicle";

export function get(): Vehicle[] {
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

export function getById(id: string): Vehicle | undefined {
  return get().find(vehicle => vehicle.id === id);
}
