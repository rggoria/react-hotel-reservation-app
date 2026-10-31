import { useEffect, useState, type FormEvent } from "react";
import {
  BedDouble,
  CalendarDays,
  Check,
  CircleAlert,
  Mail,
  Users,
  X,
  Sparkles,
  Utensils,
} from "lucide-react";

import type { Room } from "../../../types/room";
import { amenities } from "../../../data/amenities";
import { foodItems } from "../../../data/food";

interface RoomReservationModalProps {
  room: Room;
  onClose: () => void;
}

function getToday(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function RoomReservationModal({ room, onClose }: RoomReservationModalProps) {
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState(String(room.minGuests));
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");

  const today = getToday();

  // Match room amenity IDs with actual amenity objects.
  const includedAmenities = amenities.filter((amenity) =>
    room.amenities.includes(amenity.id),
  );

  // Match room food IDs with actual food objects.
  const includedFood = foodItems.filter((food) => room.food.includes(food.id));

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // Reset form when selected room changes.
  useEffect(() => {
    setGuests(String(room.minGuests));
    setEmail("");
    setCheckIn("");
    setCheckOut("");
    setNote("");
    setMessage("");
  }, [room.id, room.minGuests, room.maxGuests]);

  const guestRange =
    room.minGuests === room.maxGuests
      ? `${room.maxGuests} ${room.maxGuests === 1 ? "guest" : "guests"}`
      : `${room.minGuests}–${room.maxGuests} guests`;

  const isUnavailable =
    room.availability === "unavailable" || room.availableRooms <= 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (isUnavailable) {
      setMessage("This room is currently unavailable.");
      return;
    }

    if (checkIn < today) {
      setMessage("Check-in cannot be earlier than today.");
      return;
    }

    if (checkOut <= checkIn) {
      setMessage("Check-out must be after check-in.");
      return;
    }

    const guestCount = Number(guests);

    if (
      !Number.isInteger(guestCount) ||
      guestCount < room.minGuests ||
      guestCount > room.maxGuests
    ) {
      setMessage(
        `This room accommodates ${guestRange}. Please adjust your guest count.`,
      );
      return;
    }

    const reservationRequest = {
      roomId: room.id,
      roomName: room.name,
      email: email.trim(),
      guests: guestCount,
      checkIn,
      checkOut,
      note: note.trim(),
    };

    // Replace this with your Laravel API request later.
    console.log("Reservation request:", reservationRequest);

    setMessage(
      "Your request is ready for integration. No reservation has been submitted or confirmed yet.",
    );
  }

  return (
    <div className="modal modal-open z-[100]">
      <button
        type="button"
        className="modal-backdrop"
        aria-label="Close room reservation"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`reservation-title-${room.id}`}
        className="modal-box relative max-h-[92dvh] w-11/12 max-w-6xl overflow-y-auto rounded-2xl bg-base-100 p-0 text-base-content shadow-2xl"
      >
        {/* Header */}
        <div className="relative h-48 sm:h-56">
          <img
            src={room.image}
            alt={`Interior of the ${room.name}`}
            className="h-full w-full object-cover"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          />

          <button
            type="button"
            className="btn btn-circle btn-sm absolute right-4 top-4 border-0 bg-base-100/90 text-base-content shadow-md hover:bg-base-100"
            onClick={onClose}
            aria-label="Close room reservation"
            autoFocus
          >
            <X size={18} aria-hidden="true" />
          </button>

          <div className="absolute bottom-5 left-5 right-5 text-white sm:left-8">
            <p className="text-sm font-medium text-white/80">
              Room reservation
            </p>

            <h2
              id={`reservation-title-${room.id}`}
              className="mt-1 text-2xl font-bold sm:text-3xl"
            >
              {room.name}
            </h2>
          </div>
        </div>

        {/* Two-column content */}
        <div className="grid grid-cols-1 gap-8 p-5 sm:p-8 lg:grid-cols-2 lg:gap-10">
          {/* LEFT COLUMN: Room information */}
          <section className="min-w-0 space-y-6">
            {/* Room description */}
            <div>
              <h3 className="text-xl font-bold">About this room</h3>

              <p className="mt-2 leading-7 text-base-content/70">
                {room.description}
              </p>
            </div>

            {/* Guest capacity and bed arrangement */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-base-200 p-4">
                <Users
                  size={20}
                  className="mb-2 text-primary"
                  aria-hidden="true"
                />

                <p className="text-xs text-base-content/60">Guest capacity</p>

                <p className="mt-1 font-semibold">{guestRange}</p>
              </div>

              <div className="rounded-xl bg-base-200 p-4">
                <BedDouble
                  size={20}
                  className="mb-2 text-primary"
                  aria-hidden="true"
                />

                <p className="text-xs text-base-content/60">Bed arrangement</p>

                <p className="mt-1 font-semibold">{room.bedType}</p>
              </div>
            </div>

            {/* Room amenities */}
            <div>
              <h4 className="flex items-center gap-2 font-semibold">
                <Sparkles
                  size={18}
                  className="text-primary"
                  aria-hidden="true"
                />
                Room amenities
              </h4>

              <div className="mt-3 flex flex-wrap gap-2">
                {includedAmenities.length > 0 ? (
                  includedAmenities.map((amenity) => (
                    <span
                      key={amenity.id}
                      className="badge badge-outline border-base-300 px-3 py-3"
                    >
                      {amenity.name}
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-base-content/50">
                    No amenities listed.
                  </p>
                )}
              </div>
            </div>

            {/* Included food package */}
            <div>
              <h4 className="flex items-center gap-2 font-semibold">
                <Utensils
                  size={18}
                  className="text-primary"
                  aria-hidden="true"
                />
                Included food package
              </h4>

              <div className="mt-3 space-y-3">
                {includedFood.length > 0 ? (
                  includedFood.map((food) => (
                    <div
                      key={food.id}
                      className="rounded-xl border border-base-300 p-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-medium">{food.name}</span>

                        <span className="badge badge-success badge-outline badge-sm">
                          {food.category}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-base-content/50">
                    No food included in this room package.
                  </p>
                )}
              </div>
            </div>

            {/* Room pricing and availability */}
            <div className="rounded-xl border border-base-300 p-5">
              <p className="text-sm text-base-content/60">Price per night</p>

              <p className="mt-1 text-3xl font-bold">
                ₱{room.pricePerNight.toLocaleString("en-PH")}
              </p>

              <p className="mt-1 text-sm text-base-content/60">
                Final pricing may depend on your stay and room allocation.
              </p>

              <div className="divider my-3" />

              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-base-content/60">
                  Room availability
                </span>

                <span
                  className={`badge ${
                    isUnavailable
                      ? "badge-error"
                      : room.availability === "limited"
                        ? "badge-warning"
                        : "badge-success"
                  }`}
                >
                  {isUnavailable
                    ? "Unavailable"
                    : room.availability === "limited"
                      ? "Limited availability"
                      : "Available"}
                </span>
              </div>

              <p className="mt-2 text-sm text-base-content/60">
                {room.availableRooms} of {room.totalRooms} rooms currently
                available.
              </p>
            </div>
          </section>

          {/* RIGHT COLUMN: Reservation form */}
          <section className="min-w-0 lg:border-l lg:border-base-300 lg:pl-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="text-xl font-bold">Request your stay</h3>

                <p className="mt-1 text-sm text-base-content/60">
                  Enter your contact information and preferred dates.
                </p>
              </div>

              {/* Email */}
              <label className="form-control w-full">
                <span className="label">
                  <span className="label-text font-medium">Email address</span>
                </span>

                <div className="input input-bordered flex h-12 w-full items-center gap-3 rounded-xl">
                  <Mail
                    size={18}
                    className="shrink-0 text-base-content/50"
                    aria-hidden="true"
                  />

                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="grow"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setMessage("");
                    }}
                    required
                  />
                </div>
              </label>

              {/* Check-in and check-out */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="form-control w-full">
                  <span className="label">
                    <span className="label-text font-medium">Check-in</span>
                  </span>

                  <div className="input input-bordered flex h-12 w-full items-center gap-2 rounded-xl px-3">
                    <CalendarDays
                      size={18}
                      className="shrink-0 text-base-content/50"
                      aria-hidden="true"
                    />

                    <input
                      type="date"
                      name="checkIn"
                      className="min-w-0 w-full"
                      min={today}
                      value={checkIn}
                      onChange={(event) => {
                        const nextCheckIn = event.target.value;

                        setCheckIn(nextCheckIn);

                        if (checkOut && checkOut <= nextCheckIn) {
                          setCheckOut("");
                        }

                        setMessage("");
                      }}
                      required
                    />
                  </div>
                </label>

                <label className="form-control w-full">
                  <span className="label">
                    <span className="label-text font-medium">Check-out</span>
                  </span>

                  <div className="input input-bordered flex h-12 w-full items-center gap-2 rounded-xl px-3">
                    <CalendarDays
                      size={18}
                      className="shrink-0 text-base-content/50"
                      aria-hidden="true"
                    />

                    <input
                      type="date"
                      name="checkOut"
                      className="min-w-0 w-full"
                      min={checkIn || today}
                      value={checkOut}
                      onChange={(event) => {
                        setCheckOut(event.target.value);
                        setMessage("");
                      }}
                      required
                    />
                  </div>
                </label>
              </div>

              {/* Number of guests */}
              <label className="form-control w-full">
                <span className="label">
                  <span className="label-text font-medium">
                    Number of guests
                  </span>
                </span>

                <select
                  name="guests"
                  className="select select-bordered h-12 w-full rounded-xl"
                  value={guests}
                  onChange={(event) => {
                    setGuests(event.target.value);
                    setMessage("");
                  }}
                  required
                >
                  {Array.from(
                    {
                      length: room.maxGuests - room.minGuests + 1,
                    },
                    (_, index) => room.minGuests + index,
                  ).map((count) => (
                    <option key={count} value={String(count)}>
                      {count} {count === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>

                <span className="label">
                  <span className="label-text-alt text-base-content/60">
                    This room accommodates {guestRange}.
                  </span>
                </span>
              </label>

              {/* Additional notes */}
              <label className="form-control w-full">
                <span className="label">
                  <span className="label-text font-medium">
                    Additional notes
                  </span>

                  <span className="label-text-alt">Optional</span>
                </span>

                <textarea
                  name="note"
                  className="textarea textarea-bordered min-h-28 w-full rounded-xl leading-6"
                  placeholder="Special requests or other details..."
                  value={note}
                  onChange={(event) => {
                    setNote(event.target.value);
                    setMessage("");
                  }}
                  maxLength={1000}
                />

                <span className="label">
                  <span className="label-text-alt text-base-content/50">
                    {note.length}/1000 characters
                  </span>
                </span>
              </label>

              {/* Feedback */}
              {message && (
                <div
                  role="status"
                  className="alert alert-info items-start text-sm"
                >
                  <CircleAlert size={20} aria-hidden="true" />
                  <span>{message}</span>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  className="btn btn-ghost rounded-xl"
                  onClick={onClose}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn btn-primary rounded-xl"
                  disabled={isUnavailable}
                >
                  <Check size={18} aria-hidden="true" />
                  Request reservation
                </button>
              </div>

              <p className="text-xs leading-5 text-base-content/50">
                This is a demonstration form. Your request is not sent to a
                server, and room availability is not confirmed until your
                reservation is verified.
              </p>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RoomReservationModal;
