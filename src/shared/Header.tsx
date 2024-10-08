import { ReactNode } from "react";
import "./Header.css";

export default function Header({ children }: { children?: ReactNode }): ReactNode {

  return (
    <header>
      <h1>Gas Guzzlers</h1>
      <nav>
        {children}
      </nav>
    </header>);
}
