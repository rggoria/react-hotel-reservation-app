
export type FoodCategory =
  | "Breakfast"
  | "Lunch"
  | "Dinner"
  | "Supper"
  | "Special"
  | "Desserts"
  | "Beverages";

export interface Food {
  id: number;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  price: number;
  category: FoodCategory;
  featured: boolean;
  available: boolean;
}
