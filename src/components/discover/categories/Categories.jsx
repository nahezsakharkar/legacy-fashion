import React from "react";
import "./Categories.scss";

const categories = [
  { name: "Clothes", image: "/assets/cat-clothes.jpg" },
  { name: "Shoes", image: "/assets/cat-shoes.jpg" },
  { name: "Watches", image: "/assets/cat-watches.jpg" },
  { name: "Bags", image: "/assets/cat-bags.jpg" },
];

const Categories = () => {
  return (
    <section className="categories">
      <h2 className="section-title">Shop by Category</h2>
      <div className="grid">
        {categories.map((cat, i) => (
          <div className="card" key={i}>
            <img src={cat.image} alt={cat.name} />
            <div className="overlay">
              <span>{cat.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
