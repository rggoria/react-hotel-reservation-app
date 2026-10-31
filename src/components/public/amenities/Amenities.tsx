import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import { amenities } from "../../../data/amenities";

function Amenities() {
  const featuredAmenities = amenities.filter((amenity) => amenity.featured);

  return (
    <section
      id="amenities"
      aria-labelledby="amenities-heading"
      className="bg-base-200/50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              The Hotel Experience
            </p>

            <h2
              id="amenities-heading"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Considered comforts.
            </h2>

            <p className="mt-3 max-w-2xl text-base-content/70">
              Everything you need to feel at home, with the little extras that
              make a stay special.
            </p>
          </div>

          <Link
            to="/amenities"
            className="link link-hover inline-flex items-center gap-2 font-semibold"
          >
            Explore all amenities
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        {/* Featured amenities gallery */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[230px] lg:grid-cols-3 lg:gap-5">
          {featuredAmenities.map((amenity, index) => (
            <article
              key={amenity.name}
              tabIndex={0}
              className={[
                "group relative isolate min-h-[280px] overflow-hidden rounded-2xl",
                "text-left shadow-md transition-all duration-300",
                "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
                "lg:min-h-0",
                index === 0 ? "lg:col-span-2 lg:row-span-2" : "",
              ].join(" ")}
            >
              <img
                src={amenity.image}
                alt={amenity.imageAlt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-700 group-hover:scale-110 group-focus:scale-110"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/25 to-black/10 transition-colors duration-300 group-hover:from-black/95 group-hover:via-black/45 group-focus:from-black/95"
              />

              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <div className="translate-y-0 transition-transform duration-300 lg:translate-y-2 lg:group-hover:translate-y-0 lg:group-focus:translate-y-0">
                  <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                    {amenity.name}
                  </h3>

                  <div className="grid grid-rows-[1fr] opacity-100 transition-all duration-300 lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100 lg:group-focus:grid-rows-[1fr] lg:group-focus:opacity-100">
                    <div className="overflow-hidden">
                      <p className="pt-3 text-sm leading-6 text-white/85">
                        {amenity.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;
