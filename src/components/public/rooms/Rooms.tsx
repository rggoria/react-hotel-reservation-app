import { ArrowRight } from "lucide-react";
import { rooms } from "../../../data/rooms";
import RoomCard from "./RoomCard";
import { Link } from "react-router";

function Rooms() {
  const featuredRooms = rooms.filter((room) => room.featured);

  return (
    <section
      id="rooms"
      aria-labelledby="rooms-heading"
      className="bg-base-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Accommodation
            </p>

            <h2
              id="rooms-heading"
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Discover our rooms
            </h2>

            <p className="mt-3 max-w-2xl text-base-content/70">
              Thoughtfully designed spaces for a comfortable and memorable stay.
            </p>
          </div>

          <Link
            to="rooms"
            className="link link-hover inline-flex items-center gap-2 font-semibold"
          >
            Explore all rooms
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        {/* Room cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;
