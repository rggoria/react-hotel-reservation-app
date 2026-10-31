export type RoomAvailability = "available" | "limited" | "unavailable";

export interface Room {
  id: number;
  name: string;
  description: string;
  image: string;
  pricePerNight: number;
  minGuests: number;
  maxGuests: number;
  bedType: string;
  amenities: number[];
  food: number[];
  featured: boolean;
  totalRooms: number;
  availableRooms: number;
  availability: RoomAvailability;
}
