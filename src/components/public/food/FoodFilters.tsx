import { RotateCcw, Search, SlidersHorizontal, X } from "lucide-react";

import type { FoodCategory } from "../../../types/food";

interface FoodFiltersProps {
  search: string;
  category: string;
  featuredOnly: boolean;
  availableOnly: boolean;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onFeaturedChange: (value: boolean) => void;
  onAvailableChange: (value: boolean) => void;
  onReset: () => void;
}

const categories: FoodCategory[] = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Supper",
  "Special",
  "Desserts",
  "Beverages",
];

function FoodFilters({
  search,
  category,
  featuredOnly,
  availableOnly,
  onSearchChange,
  onCategoryChange,
  onFeaturedChange,
  onAvailableChange,
  onReset,
}: FoodFiltersProps) {
  return (
    <div className="space-y-5">
      {/* Filter heading */}
      <div className="flex items-center justify-between gap-2">
        <h2 className="flex items-center gap-2 font-bold">
          <SlidersHorizontal size={19} aria-hidden="true" />
          Food Filters
        </h2>

        <button
          type="button"
          onClick={onReset}
          className="btn btn-ghost btn-xs gap-1"
        >
          <RotateCcw size={14} aria-hidden="true" />
          Reset
        </button>
      </div>

      {/* Search food */}
      <div>
        <label
          htmlFor="food-search"
          className="mb-3 block text-sm font-semibold"
        >
          Search Food
        </label>

        <label className="input input-bordered flex w-full items-center gap-2 rounded-xl">
          <Search
            size={17}
            className="text-base-content/50"
            aria-hidden="true"
          />

          <input
            id="food-search"
            type="search"
            placeholder="Search dishes..."
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            className="grow"
          />

          {search && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="btn btn-ghost btn-xs btn-circle"
              aria-label="Clear search"
            >
              <X size={15} aria-hidden="true" />
            </button>
          )}
        </label>
      </div>

      <div className="divider my-0" />

      {/* Food categories */}
      <div>
        <h3 className="mb-3 text-sm font-semibold">Food Categories</h3>

        <div className="space-y-3">
          <label className="flex cursor-pointer items-center gap-3 text-sm transition-colors hover:text-primary">
            <input
              type="radio"
              name="food-category"
              className="radio radio-sm radio-primary"
              checked={category === "all"}
              onChange={() => onCategoryChange("all")}
            />
            All Categories
          </label>

          {categories.map((item) => (
            <label
              key={item}
              className="flex cursor-pointer items-center gap-3 text-sm transition-colors hover:text-primary"
            >
              <input
                type="radio"
                name="food-category"
                className="radio radio-sm radio-primary"
                checked={category === item}
                onChange={() => onCategoryChange(item)}
              />

              {item}
            </label>
          ))}
        </div>
      </div>

      <div className="divider my-0" />

      {/* Additional filters */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold">Other Options</h3>

        <label className="flex cursor-pointer items-center gap-3 text-sm">
          <input
            type="checkbox"
            className="checkbox checkbox-sm checkbox-primary"
            checked={featuredOnly}
            onChange={(event) => onFeaturedChange(event.target.checked)}
          />
          Featured items only
        </label>

        <label className="flex cursor-pointer items-center gap-3 text-sm">
          <input
            type="checkbox"
            className="checkbox checkbox-sm checkbox-primary"
            checked={availableOnly}
            onChange={(event) => onAvailableChange(event.target.checked)}
          />
          Available items only
        </label>
      </div>

      <div className="divider my-0" />

      {/* Reset all filters */}
      <button
        type="button"
        onClick={onReset}
        className="btn btn-outline btn-sm w-full rounded-xl"
      >
        <RotateCcw size={15} aria-hidden="true" />
        Reset Filters
      </button>
    </div>
  );
}

export default FoodFilters;
