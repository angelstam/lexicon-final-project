import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './shared/Header'

export default function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}
