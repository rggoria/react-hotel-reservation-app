import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { amenities } from "../../data/amenities";
import AmenityCard from "../../components/public/amenities/AmenityCard";
import AmenityFilters from "../../components/public/amenities/AmenityFilters";

function AmenityPage() {
  const [search, setSearch] = useState("");
  const [featuredOnly, setFeaturedOnly] = useState(false);

  // Filter amenities using the selected criteria.
  const filteredAmenities = useMemo(() => {
    return amenities.filter((amenity) => {
      const searchTerm = search.toLowerCase().trim();

      const matchesSearch =
        amenity.name.toLowerCase().includes(searchTerm) ||
        amenity.description.toLowerCase().includes(searchTerm);

      const matchesFeatured = !featuredOnly || amenity.featured;

      return matchesSearch && matchesFeatured;
    });
  }, [search, featuredOnly]);

  // Restore the default filter values.
  function resetFilters() {
    setSearch("");
    setFeaturedOnly(false);
  }

  return (
    <section className="min-h-screen bg-base-200 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page introduction. */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Hotel Facilities
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Explore Our Amenities
          </h1>

          <p className="mt-3 max-w-2xl text-base-content/70">
            Discover the facilities and thoughtful conveniences that make every
            stay more comfortable and memorable.
          </p>
        </div>

        {/* Two-column amenities layout. */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          {/* Left filter sidebar. */}
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
              <AmenityFilters
                search={search}
                featuredOnly={featuredOnly}
                onSearchChange={setSearch}
                onFeaturedChange={setFeaturedOnly}
                onReset={resetFilters}
              />

              <div className="divider" />

              {/* Display the number of matching amenities. */}
              <p className="text-sm text-base-content/60">
                Showing {filteredAmenities.length} of {amenities.length}{" "}
                amenities
              </p>
            </div>
          </aside>

          {/* Right amenity collection. */}
          <main className="min-w-0">
            {/* Collection heading. */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold">All Amenities</h2>

                <p className="mt-1 text-sm text-base-content/60">
                  Browse the facilities available at our hotel.
                </p>
              </div>

              <span className="badge badge-primary badge-outline">
                {filteredAmenities.length}{" "}
                {filteredAmenities.length === 1 ? "Amenity" : "Amenities"}
              </span>
            </div>

            {/* Render matching amenity cards. */}
            {filteredAmenities.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                {filteredAmenities.map((amenity) => (
                  <AmenityCard key={amenity.id} amenity={amenity} />
                ))}
              </div>
            ) : (
              /* Display an empty state when no amenities match. */
              <div className="rounded-2xl border border-base-300 bg-base-100 px-5 py-16 text-center">
                <Search
                  size={40}
                  className="mx-auto text-base-content/30"
                  aria-hidden="true"
                />

                <h3 className="mt-4 text-lg font-bold">No amenities found</h3>

                <p className="mt-2 text-sm text-base-content/60">
                  Try another search term or adjust your filters.
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

export default AmenityPage;
