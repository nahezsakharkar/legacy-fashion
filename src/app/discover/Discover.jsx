"use client";
import Hero from "@/components/discover/hero/Hero";
import "./Discover.scss";
import Categories from "@/components/discover/categories/Categories";
import NewArrivals from "@/components/discover/new_arrivals/NewArrivals";
import BestSellers from "@/components/discover/best_sellers/BestSellers";
import Brands from "@/components/discover/brands/Brands";

const Discover = () => {
  return (
    <main className="discover-page">
      <Hero />
      <Categories />
      <NewArrivals />
      <BestSellers />
      <Brands />
    </main>
  );
};

export default Discover;
