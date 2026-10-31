import { ArrowUpRight, MapPin } from "lucide-react";
import { hotel } from "../../../data/hotel";

function Location() {
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    hotel.mapQuery,
  )}&output=embed`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    hotel.mapQuery,
  )}`;

  return (
    <article className="card h-full overflow-hidden border border-base-300 bg-base-100 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      {/* Location information */}
      <div className="card-body gap-5 p-6 sm:p-8">
        <div className="flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <MapPin size={24} aria-hidden="true" />
          </div>

          <div>
            <h3 className="card-title text-xl">Our Location</h3>

            <p className="mt-1 text-sm text-base-content/60">
              Find us and plan your visit
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm leading-7 text-base-content/70">
            {hotel.address}
          </p>
        </div>

        {/* Google Maps embed */}
        <div className="overflow-hidden rounded-2xl border border-base-300 bg-base-200">
          <iframe
            title={`Google Maps showing ${hotel.mapQuery}`}
            src={mapUrl}
            className="h-64 w-full sm:h-72"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        {/* Directions */}
        <div className="mt-auto pt-1">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full sm:w-auto"
          >
            Get directions
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default Location;
