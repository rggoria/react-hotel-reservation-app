import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import { foodItems } from "../../../data/food";
import FoodCard from "./FoodCard";

const categories = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Supper",
  "Special",
  "Desserts",
  "Beverages",
] as const;

type FoodCategory = (typeof categories)[number];

const MAX_FEATURED_ITEMS = 6;

function Food() {
  const [activeCategory, setActiveCategory] = useState<FoodCategory>("All");

  const filteredFood = useMemo(() => {
    const featured = foodItems.filter((food) => food.featured);

    const filtered =
      activeCategory === "All"
        ? featured
        : featured.filter((food) => food.category === activeCategory);

    return filtered.slice(0, MAX_FEATURED_ITEMS);
  }, [activeCategory]);

  const availableCategories = useMemo(() => {
    return categories.filter(
      (category) =>
        category === "All" ||
        foodItems.some((food) => food.featured && food.category === category),
    );
  }, []);

  function getCategoryCount(category: FoodCategory) {
    if (category === "All") {
      return foodItems.filter((food) => food.featured).length;
    }

    return foodItems.filter(
      (food) => food.featured && food.category === category,
    ).length;
  }

  return (
    <section
      id="food"
      aria-labelledby="food-heading"
      className="bg-base-100 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Restaurant & Dining
            </p>

            <h2
              id="food-heading"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Delicious moments.
            </h2>

            <p className="mt-3 max-w-2xl text-base-content/70">
              Discover delicious meals, refreshing drinks, and carefully
              prepared dishes to make your stay even more memorable.
            </p>
          </div>

          <Link
            to="/food"
            className="link link-hover inline-flex items-center gap-2 font-semibold"
          >
            Explore all food
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        {/* Food category filters */}
        <div className="mt-12">
          <div
            className="flex flex-wrap justify-center gap-2"
            role="group"
            aria-label="Filter food by category"
          >
            {availableCategories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={[
                    "btn btn-sm rounded-full px-5 transition-all duration-200",
                    isActive
                      ? "btn-primary shadow-md"
                      : "btn-ghost border border-base-300 hover:border-primary hover:bg-primary/10",
                  ].join(" ")}
                >
                  {category}

                  <span
                    className={[
                      "ml-1 text-xs",
                      isActive
                        ? "text-primary-content/80"
                        : "text-base-content/50",
                    ].join(" ")}
                  >
                    {getCategoryCount(category)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured food collection */}
        <div
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          aria-live="polite"
        >
          {filteredFood.length > 0 ? (
            filteredFood.map((food) => <FoodCard key={food.id} food={food} />)
          ) : (
            <div className="col-span-full rounded-2xl border border-base-300 bg-base-200/50 px-5 py-16 text-center">
              <h3 className="text-lg font-bold">No featured food available</h3>

              <p className="mt-2 text-sm text-base-content/60">
                There are currently no featured items in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Food;
