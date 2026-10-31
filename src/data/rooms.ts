import type { Room } from "../types/room";

export const rooms: Room[] = [
  {
    id: 1,
    name: "Deluxe King Room",
    description:
      "A spacious and comfortable room designed for a relaxing stay.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80",
    pricePerNight: 3200,
    minGuests: 1,
    maxGuests: 2,
    bedType: "1 King Bed",
    amenities: [1, 2, 5, 9],
    food: [1, 2, 5, 9, 25, 26],
    featured: true,
    totalRooms: 10,
    availableRooms: 4,
    availability: "available",
  },
  {
    id: 2,
    name: "Superior Twin Room",
    description:
      "A welcoming space with twin beds, ideal for friends or colleagues.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
    pricePerNight: 2800,
    minGuests: 1,
    maxGuests: 2,
    bedType: "2 Single Beds",
    amenities: [2, 4, 5, 6],
    food: [3, 6, 7, 8, 13, 14, 27],
    featured: true,
    totalRooms: 8,
    availableRooms: 2,
    availability: "limited",
  },
  {
    id: 3,
    name: "Family Suite",
    description:
      "Extra space for families, with comfortable sleeping arrangements.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
    pricePerNight: 4800,
    minGuests: 2,
    maxGuests: 4,
    bedType: "1 King Bed + Sofa Bed",
    amenities: [1, 2, 3, 5, 8, 9, 10],
    food: [1, 2, 3, 5, 6, 9, 10, 11, 17, 21, 22, 23, 25],
    featured: true,
    totalRooms: 5,
    availableRooms: 0,
    availability: "unavailable",
  },
];
