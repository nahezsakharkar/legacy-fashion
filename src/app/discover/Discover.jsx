"use client";
import Hero from "@/components/discover/hero/Hero";
import "./Discover.scss";
import Categories from "@/components/discover/categories/Categories";
import NewArrivals from "@/components/discover/new_arrivals/NewArrivals";

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
