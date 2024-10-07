import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import App from "./App";
import AddCar from "./pages/car/AddCar";
import CarDetail from "./pages/car/CarDetail";
import CarList from "./pages/car/CarList";
import EditCar from "./pages/car/EditCar";

export const routing = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route index element={<CarList />} />
    <Route path="car/new" element={<AddCar />} />
    <Route path='car/:id' element={<CarDetail />} />
    <Route path='car/:id/edit' element={<EditCar />} />
    <Route path="*" element={<Navigate to='/' />} />
  </Route>
), import.meta.env.BASE_URL ? { basename: import.meta.env.BASE_URL } : undefined);
