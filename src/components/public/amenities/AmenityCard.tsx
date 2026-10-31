import type { Amenity } from "../../../types/amenity";

interface AmenityCardProps {
  amenity: Amenity;
  featuredBadge?: boolean;
}

function AmenityCard({ amenity, featuredBadge = true }: AmenityCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Amenity photograph. */}
      <div className="relative h-56 overflow-hidden bg-base-300">
        <img
          src={amenity.image}
          alt={amenity.imageAlt}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Featured indicator. */}
        {featuredBadge && amenity.featured && (
          <span className="badge badge-warning absolute left-4 top-4 font-semibold">
            Featured
          </span>
        )}
      </div>

      {/* Amenity information. */}
      <div className="p-5">
        <h3 className="text-lg font-bold tracking-tight">{amenity.name}</h3>

        <p className="mt-2 text-sm leading-6 text-base-content/70">
          {amenity.description}
        </p>
      </div>
    </article>
  );
}

export default AmenityCard;
