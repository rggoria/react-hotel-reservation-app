import { useState } from "react";
import { UtensilsCrossed, X } from "lucide-react";

import { foodItems } from "../../data/food";
import FoodCard from "../../components/public/food/FoodCard";
import FoodFilters from "../../components/public/food/FoodFilters";

function FoodPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [availableOnly, setAvailableOnly] = useState(false);

  // Filter food items using the selected criteria.
  const filteredFood = foodItems.filter((food) => {
    const matchesSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "all" || food.category === category;

    const matchesFeatured = !featuredOnly || food.featured;

    const matchesAvailability = !availableOnly || food.available;

    return (
      matchesSearch && matchesCategory && matchesFeatured && matchesAvailability
    );
  });

  // Restore all filter values to their defaults.
  function resetFilters() {
    setSearch("");
    setCategory("all");
    setFeaturedOnly(false);
    setAvailableOnly(false);
  }

  const filterProps = {
    search,
    category,
    featuredOnly,
    availableOnly,
    onSearchChange: setSearch,
    onCategoryChange: setCategory,
    onFeaturedChange: setFeaturedOnly,
    onAvailableChange: setAvailableOnly,
    onReset: resetFilters,
  };

  return (
    <section className="min-h-screen bg-base-200 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page introduction */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Restaurant & Dining
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Discover Our Food
          </h1>

          <p className="mt-3 max-w-2xl leading-7 text-base-content/70">
            Explore a selection of delicious dishes, refreshing beverages, and
            carefully prepared favorites for your stay.
          </p>
        </div>

        {/* Two-column page layout */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          {/* Left filter sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
              <FoodFilters {...filterProps} />
            </div>
          </aside>

          {/* Right food listing */}
          <main className="min-w-0">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold">Our Menu</h2>

                <p className="mt-1 text-sm text-base-content/60">
                  {filteredFood.length}{" "}
                  {filteredFood.length === 1 ? "item" : "items"} found
                </p>
              </div>

              <button
                type="button"
                onClick={resetFilters}
                className="btn btn-ghost btn-sm"
              >
                <X size={15} aria-hidden="true" />
                Clear filters
              </button>
            </div>

            {filteredFood.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-2">
                {filteredFood.map((food) => (
                  <FoodCard key={food.id} food={food} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-base-300 bg-base-100 px-5 py-16 text-center">
                <UtensilsCrossed
                  size={42}
                  className="mx-auto text-base-content/30"
                  aria-hidden="true"
                />

                <h3 className="mt-4 text-lg font-bold">No food items found</h3>

                <p className="mt-2 text-sm text-base-content/60">
                  Try changing your search or adjusting your filters.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="btn btn-primary btn-sm mt-5 rounded-xl"
                >
                  Reset filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}

export default FoodPage;
