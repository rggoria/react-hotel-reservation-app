import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { BedDouble, Search, X } from "lucide-react";

import { rooms } from "../../data/rooms";
import RoomCard from "../../components/public/rooms/RoomCard";
import RoomFilter from "../../components/public/rooms/RoomFilters";
import RoomPriceFilter from "../../components/public/rooms/RoomPriceFilter";

interface BookingSearchState {
  guests: number;
  featuredOnly: boolean;
  priceRange: string;
}

function RoomPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const bookingState = location.state as BookingSearchState | null;

  // Room filters
  const [availability, setAvailability] = useState("all");
  const [guests, setGuests] = useState("all");
  const [bedType, setBedType] = useState("All");
  const [featuredOnly, setFeaturedOnly] = useState(false);

  // Price range
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  // Mobile filter panel
  const [activeMobilePanel, setActiveMobilePanel] = useState<
    "filter" | "price" | null
  >(null);

  // Apply booking search choices.
  useEffect(() => {
    const state = location.state as BookingSearchState | null;

    if (!state) return;

    setGuests(
      Number.isInteger(state.guests) && state.guests > 0
        ? String(state.guests)
        : "all",
    );

    setFeaturedOnly(state.featuredOnly === true);

    switch (state.priceRange) {
      case "budget":
        setMinPrice(0);
        setMaxPrice(2000);
        break;

      case "standard":
        setMinPrice(2000);
        setMaxPrice(5000);
        break;

      case "premium":
        setMinPrice(5000);
        setMaxPrice(8000);
        break;

      case "luxury":
        setMinPrice(8000);
        setMaxPrice(1000000);
        break;

      default:
        setMinPrice(0);
        setMaxPrice(10000);
    }
  }, [location.key]);

  // Reset filters and remove booking search state.
  function resetFilters() {
    setAvailability("all");
    setGuests("all");
    setBedType("All");
    setFeaturedOnly(false);

    setMinPrice(0);
    setMaxPrice(10000);

    setActiveMobilePanel(null);

    // Clear navigation state so the preference summary disappears.
    navigate(location.pathname, {
      replace: true,
      state: null,
    });
  }

  // Filter rooms using the selected criteria.
  const filteredRooms = rooms.filter((room) => {
    const matchesAvailability =
      availability === "all" || room.availability === availability;

    const matchesGuests =
      guests === "all" ||
      (room.minGuests <= Number(guests) && room.maxGuests >= Number(guests));

    const matchesBedType =
      bedType === "All" ||
      room.bedType.toLowerCase().includes(bedType.toLowerCase());

    const matchesFeatured = !featuredOnly || room.featured;

    const matchesPrice =
      room.pricePerNight >= minPrice && room.pricePerNight <= maxPrice;

    return (
      matchesAvailability &&
      matchesGuests &&
      matchesBedType &&
      matchesFeatured &&
      matchesPrice
    );
  });

  // Shared props for room filters.
  const filterProps = {
    availability,
    guests,
    bedType,
    featuredOnly,
    onAvailabilityChange: setAvailability,
    onGuestsChange: setGuests,
    onBedTypeChange: setBedType,
    onFeaturedChange: setFeaturedOnly,
    onReset: resetFilters,
  };

  // Shared props for price filters.
  const priceFilterProps = {
    minPrice,
    maxPrice,
    onMinPriceChange: setMinPrice,
    onMaxPriceChange: setMaxPrice,
    onReset: resetFilters,
  };

  // Display selected price range.
  function getPriceLabel(priceRange: string) {
    switch (priceRange) {
      case "budget":
        return "Under ₱2,000";

      case "standard":
        return "₱2,000 – ₱5,000";

      case "premium":
        return "₱5,000 – ₱8,000";

      case "luxury":
        return "Above ₱8,000";

      default:
        return "Any price";
    }
  }

  return (
    <section className="min-h-screen bg-base-200 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* PAGE HEADING */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Accommodation
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Explore Our Rooms
          </h1>

          <p className="mt-3 max-w-2xl text-base-content/70">
            Discover comfortable accommodations designed to make your stay
            relaxing and memorable.
          </p>
        </div>

        {/* YOUR ROOM PREFERENCES */}
        {bookingState && (
          <div className="mb-8 rounded-2xl border border-primary/20 bg-base-100 p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-bold">Your room preferences</h2>

                <p className="mt-1 text-sm text-base-content/60">
                  Rooms filtered according to your selections.
                </p>
              </div>

              <button
                type="button"
                onClick={resetFilters}
                className="btn btn-ghost btn-sm rounded-lg"
              >
                <X size={16} aria-hidden="true" />
                Clear search
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="badge badge-outline px-3 py-3">
                {bookingState.guests}{" "}
                {bookingState.guests === 1 ? "guest" : "guests"}
              </span>

              {bookingState.featuredOnly && (
                <span className="badge badge-warning badge-outline px-3 py-3">
                  Featured rooms
                </span>
              )}

              <span className="badge badge-outline px-3 py-3">
                {getPriceLabel(bookingState.priceRange)}
              </span>
            </div>
          </div>
        )}

        {/* MOBILE STICKY FILTER CONTROLS */}
        <div className="sticky top-16 z-40 -mx-4 mb-6 border-b border-base-300 bg-base-100/95 px-4 py-3 shadow-sm backdrop-blur-md sm:-mx-6 sm:px-6 lg:hidden">
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() =>
                setActiveMobilePanel(
                  activeMobilePanel === "filter" ? null : "filter",
                )
              }
              aria-expanded={activeMobilePanel === "filter"}
              className={`btn rounded-xl ${
                activeMobilePanel === "filter" ? "btn-primary" : "btn-outline"
              }`}
            >
              <Search size={17} aria-hidden="true" />
              Filters
            </button>

            <button
              type="button"
              onClick={() =>
                setActiveMobilePanel(
                  activeMobilePanel === "price" ? null : "price",
                )
              }
              aria-expanded={activeMobilePanel === "price"}
              className={`btn rounded-xl ${
                activeMobilePanel === "price" ? "btn-primary" : "btn-outline"
              }`}
            >
              <BedDouble size={17} aria-hidden="true" />
              Price
            </button>
          </div>
        </div>

        {/* MOBILE FILTER PANEL */}
        {activeMobilePanel && (
          <div className="mb-6 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-bold">
                {activeMobilePanel === "filter"
                  ? "Filter rooms"
                  : "Price range"}
              </h2>

              <button
                type="button"
                onClick={() => setActiveMobilePanel(null)}
                className="btn btn-ghost btn-sm btn-circle"
                aria-label="Close filters"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            {activeMobilePanel === "filter" ? (
              <RoomFilter {...filterProps} />
            ) : (
              <RoomPriceFilter {...priceFilterProps} />
            )}
          </div>
        )}

        {/* THREE-COLUMN DESKTOP LAYOUT */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[240px_minmax(0,1fr)_240px]">
          {/* LEFT SIDEBAR */}
          <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
            <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
              <RoomFilter {...filterProps} />
            </div>
          </aside>

          {/* CENTER ROOM LIST */}
          <main className="min-w-0">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold">Available Rooms</h2>

                <p className="mt-1 text-sm text-base-content/60">
                  {filteredRooms.length}{" "}
                  {filteredRooms.length === 1 ? "room" : "rooms"} found
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

            {/* ROOM RESULTS */}
            {filteredRooms.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                {filteredRooms.map((room) => (
                  <RoomCard key={room.id} room={room} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-base-300 bg-base-100 px-5 py-16 text-center">
                <BedDouble
                  size={42}
                  className="mx-auto text-base-content/30"
                  aria-hidden="true"
                />

                <h3 className="mt-4 text-lg font-bold">No rooms found</h3>

                <p className="mt-2 text-sm text-base-content/60">
                  Try adjusting your filters to find other rooms.
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

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
            <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
              <RoomPriceFilter {...priceFilterProps} />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default RoomPage;
