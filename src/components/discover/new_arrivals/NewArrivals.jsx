import React from "react";
import "./NewArrivals.scss";

const products = [
  { name: "Elegant Dress", price: "$120", image: "/assets/new1.jpg" },
  { name: "Classic Watch", price: "$250", image: "/assets/new2.jpg" },
  { name: "Luxury Shoes", price: "$180", image: "/assets/new3.jpg" },
];

const NewArrivals = () => {
  return (
    <section className="new-arrivals">
      <h2 className="section-title">New Arrivals</h2>
      <div className="cards">
        {products.map((p, i) => (
          <div className="card" key={i}>
            <img src={p.image} alt={p.name} />
            <div className="info">
              <h3>{p.name}</h3>
              <span>{p.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
