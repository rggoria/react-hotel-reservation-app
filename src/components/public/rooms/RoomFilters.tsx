import { RotateCcw, SlidersHorizontal } from "lucide-react";

interface RoomFilterProps {
  availability: string;
  guests: string;
  bedType: string;
  featuredOnly: boolean;
  onAvailabilityChange: (value: string) => void;
  onGuestsChange: (value: string) => void;
  onBedTypeChange: (value: string) => void;
  onFeaturedChange: (value: boolean) => void;
  onReset: () => void;
}

function RoomFilter({
  availability,
  guests,
  bedType,
  featuredOnly,
  onAvailabilityChange,
  onGuestsChange,
  onBedTypeChange,
  onFeaturedChange,
  onReset,
}: RoomFilterProps) {
  // Define the available room availability options.
  const availabilityOptions = [
    { label: "All rooms", value: "all" },
    { label: "Available", value: "available" },
    { label: "Limited availability", value: "limited" },
    { label: "Unavailable", value: "unavailable" },
  ];

  // Define the available bed arrangements.
  const bedOptions = ["All", "King", "Single", "Sofa"];

  return (
    <div className="space-y-6">
      {/* Filter heading and reset action. */}
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-bold">
          <SlidersHorizontal size={19} aria-hidden="true" />
          Room Filters
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

      {/* Filter rooms according to their availability. */}
      <div>
        <h3 className="mb-3 text-sm font-semibold">Availability</h3>

        <div className="space-y-3">
          {availabilityOptions.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-3 text-sm"
            >
              <input
                type="radio"
                name="availability"
                className="radio radio-sm radio-primary"
                checked={availability === option.value}
                onChange={() => onAvailabilityChange(option.value)}
              />

              {option.label}
            </label>
          ))}
        </div>
      </div>

      <div className="divider my-0" />

      {/* Filter rooms according to their guest capacity. */}
      <div>
        <h3 className="mb-3 text-sm font-semibold">Guest capacity</h3>

        <select
          className="select select-bordered w-full rounded-xl"
          value={guests}
          onChange={(event) => onGuestsChange(event.target.value)}
        >
          <option value="all">Any number of guests</option>
          <option value="1">1 guest</option>
          <option value="2">2 guests</option>
          <option value="3">3 guests</option>
          <option value="4">4 guests</option>
        </select>
      </div>

      <div className="divider my-0" />

      {/* Filter rooms according to their bed arrangement. */}
      <div>
        <h3 className="mb-3 text-sm font-semibold">Bed arrangement</h3>

        <div className="space-y-3">
          {bedOptions.map((bed) => (
            <label
              key={bed}
              className="flex cursor-pointer items-center gap-3 text-sm"
            >
              <input
                type="radio"
                name="bedType"
                className="radio radio-sm radio-primary"
                checked={bedType === bed}
                onChange={() => onBedTypeChange(bed)}
              />

              {bed === "All" ? "All bed types" : bed}
            </label>
          ))}
        </div>
      </div>

      <div className="divider my-0" />

      {/* Show only rooms marked as featured. */}
      <label className="flex cursor-pointer items-center gap-3 text-sm">
        <input
          type="checkbox"
          className="checkbox checkbox-sm checkbox-primary"
          checked={featuredOnly}
          onChange={(event) => onFeaturedChange(event.target.checked)}
        />
        Featured rooms only
      </label>
    </div>
  );
}

export default RoomFilter;
