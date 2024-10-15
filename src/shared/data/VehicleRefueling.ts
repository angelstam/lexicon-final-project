export interface VehicleRefueling {
  id: string;
  vehicleId: string;
  date: string;
  odometer: number;
  fuelType: string;
  fuelVolume: number;
  fuelCost: number;
  fuelCostCurrency: string;
}
