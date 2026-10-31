import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router";

import Hero from "../../components/public/hero/Hero";
import RoomsSkeleton from "../../components/public/rooms/RoomsSkeleton";
import AmenitiesSkeleton from "../../components/public/amenities/AmenitiesSkeleton";
import FoodSkeleton from "../../components/public/food/FoodSkeleton";
import Testimonials from "../../components/public/testimonials/Testimonials";
import LocationContact from "../../components/public/contact/LocationContact";

const Rooms = lazy(() => import("../../components/public/rooms/Rooms"));
const Amenities = lazy(
  () => import("../../components/public/amenities/Amenities"),
);
const Food = lazy(() => import("../../components/public/food/Food"));

function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const sectionId = decodeURIComponent(hash.slice(1));

    // Wait until lazy-loaded sections have rendered.
    const timeout = setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView();
    }, 100);

    return () => clearTimeout(timeout);
  }, [hash]);

  return (
    <>
      <Hero />

      <Suspense fallback={<RoomsSkeleton />}>
        <Rooms />
      </Suspense>

      <Suspense fallback={<AmenitiesSkeleton />}>
        <Amenities />
      </Suspense>

      <Suspense fallback={<FoodSkeleton />}>
        <Food />
      </Suspense>

      <Testimonials />

      <LocationContact />
    </>
  );
}

export default HomePage;
