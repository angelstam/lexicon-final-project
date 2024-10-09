export interface VehicleRefueling {
  id?: string;
  carId: string;
  date: string;
  odometer: number;
  fuelType: string;
  fuelVolume: number;
  fuelCost: number;
  fuelCostCurrency: string;
}
