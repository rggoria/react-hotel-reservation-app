import { RotateCcw, Search, SlidersHorizontal, X } from "lucide-react";

interface AmenityFiltersProps {
  search: string;
  featuredOnly: boolean;
  onSearchChange: (value: string) => void;
  onFeaturedChange: (value: boolean) => void;
  onReset: () => void;
}

function AmenityFilters({
  search,
  featuredOnly,
  onSearchChange,
  onFeaturedChange,
  onReset,
}: AmenityFiltersProps) {
  return (
    <div className="space-y-5">
      {/* Filter heading */}
      <div className="flex items-center justify-between gap-2">
        <h2 className="flex items-center gap-2 font-bold">
          <SlidersHorizontal size={19} aria-hidden="true" />
          Amenity Filters
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

      {/* Search amenities */}
      <div>
        <label
          htmlFor="amenity-search"
          className="mb-3 block text-sm font-semibold"
        >
          Search Amenities
        </label>

        <label className="input input-bordered flex w-full items-center gap-2 rounded-xl">
          <Search
            size={17}
            className="text-base-content/50"
            aria-hidden="true"
          />

          <input
            id="amenity-search"
            type="search"
            placeholder="Search amenities..."
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

          <span className="flex items-center gap-2">
            Featured amenities only
          </span>
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

export default AmenityFilters;
