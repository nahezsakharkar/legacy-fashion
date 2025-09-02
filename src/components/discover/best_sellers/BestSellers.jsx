import React from "react";
import "./BestSellers.scss";

const items = [
  { name: "Designer Bag", price: "$300", image: "/assets/best1.jpg" },
  { name: "Stylish Sunglasses", price: "$150", image: "/assets/best2.jpg" },
  { name: "Luxury Belt", price: "$100", image: "/assets/best3.jpg" },
];

const BestSellers = () => {
  return (
    <section className="best-sellers">
      <h2 className="section-title">Best Sellers</h2>
      <div className="cards">
        {items.map((p, i) => (
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

export default BestSellers;
