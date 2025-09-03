"use client";
import Hero from "@/components/discover/hero/HeroSection";
import "./Discover.scss";
import Categories from "@/components/discover/categories/CategoriesSection";
import NewArrivals from "@/components/discover/new_arrivals/NewArrivalsSection";

const Discover = () => {
  return (
    <main className="discover-page">
      <Hero />
      <Categories />
      <NewArrivals />
    </main>
  );
};

export default Discover;
