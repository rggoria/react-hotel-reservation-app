import { useState } from "react";
import { ArrowRight, BedDouble, Sparkles, Users, Utensils } from "lucide-react";

import type { Room } from "../../../types/room";
import { amenities } from "../../../data/amenities";
import { foodItems } from "../../../data/food";

import RoomReservationModal from "../global/RoomReservationModal";

interface RoomCardProps {
  room: Room;
}

function RoomCard({ room }: RoomCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const guestRange =
    room.minGuests === room.maxGuests
      ? `${room.maxGuests} ${room.maxGuests === 1 ? "guest" : "guests"}`
      : `${room.minGuests}–${room.maxGuests} guests`;

  const includedAmenities = amenities.filter((amenity) =>
    room.amenities.includes(amenity.id),
  );

  const includedFood = foodItems.filter((food) => room.food.includes(food.id));

  let availabilityLabel: string;
  let availabilityClass: string;

  if (room.availableRooms <= 0) {
    availabilityLabel = "Not available";
    availabilityClass = "badge-error";
  } else if (room.availableRooms <= 2) {
    availabilityLabel = "Limited availability";
    availabilityClass = "badge-warning";
  } else {
    availabilityLabel = "Available";
    availabilityClass = "badge-success";
  }

  return (
    <>
      <article className="card h-full overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-shadow duration-300 hover:shadow-xl">
        {/* Room photograph */}
        <figure className="relative h-60 overflow-hidden sm:h-64">
          <img
            src={room.image}
            alt={`Interior of the ${room.name}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />

          {room.featured && (
            <span className="badge badge-warning absolute left-4 top-4 border-0 font-semibold shadow-sm">
              Featured stay
            </span>
          )}
        </figure>

        {/* Room information */}
        <div className="card-body flex flex-1 gap-4 p-5 sm:p-6">
          <div>
            <span className={`badge ${availabilityClass} badge-sm mb-2`}>
              {availabilityLabel}
            </span>

            <h3 className="card-title text-xl font-bold tracking-tight">
              {room.name}
            </h3>

            <p className="mt-2 text-sm leading-6 text-base-content/70">
              {room.description}
            </p>
          </div>

          {/* Guest capacity and bed arrangement */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold">
            <span className="inline-flex items-center gap-2">
              <Users size={16} aria-hidden="true" />
              {guestRange}
            </span>

            <span className="inline-flex items-center gap-2">
              <BedDouble size={16} aria-hidden="true" />
              {room.bedType}
            </span>
          </div>

          {/* Room amenities */}
          <div className="space-y-2">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <Sparkles size={16} aria-hidden="true" />
              Room amenities
            </p>

            <div className="flex flex-wrap gap-2">
              {includedAmenities.slice(0, 3).map((amenity) => (
                <span
                  key={amenity.id}
                  className="badge badge-outline border-base-300 px-3 py-3 text-xs"
                >
                  {amenity.name}
                </span>
              ))}

              {includedAmenities.length > 3 && (
                <span className="badge badge-ghost px-3 py-3 text-xs">
                  +{includedAmenities.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Included food package */}
          <div className="space-y-2">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <Utensils size={16} aria-hidden="true" />
              Included food package
            </p>

            <div className="flex flex-wrap gap-2">
              {includedFood.length > 0 ? (
                includedFood.slice(0, 3).map((food) => (
                  <span
                    key={food.id}
                    className="badge badge-success badge-outline px-3 py-3 text-xs"
                  >
                    {food.name}
                  </span>
                ))
              ) : (
                <span className="text-xs text-base-content/50">
                  No food included
                </span>
              )}

              {includedFood.length > 3 && (
                <span className="badge badge-ghost px-3 py-3 text-xs">
                  +{includedFood.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Price and action */}
          <div className="mt-auto flex items-end justify-between gap-3 border-t border-base-300 pt-4">
            <div>
              <p className="text-xs text-base-content/60">Starting from</p>

              <p className="mt-1 text-2xl font-bold tracking-tight">
                ₱{room.pricePerNight.toLocaleString("en-PH")}
              </p>

              <p className="text-xs text-base-content/60">per night</p>
            </div>

            <button
              type="button"
              className="btn btn-primary btn-sm rounded-xl"
              onClick={() => setIsModalOpen(true)}
              aria-haspopup="dialog"
            >
              View details
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </article>

      {/* Reservation modal */}
      {isModalOpen && (
        <RoomReservationModal
          room={room}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

export default RoomCard;
