import { ReactNode } from "react";

export default function CarListItem(): ReactNode {

  return (
    <article className="car-list-item">
      <figure><img src="" alt="Photo of car" /></figure>
      <section>
        <h3>Make + Model</h3>
        <p>Odometer</p>
        <p>fuel consumption liter / 10 km</p>
      </section>
    </article>
  );
}
