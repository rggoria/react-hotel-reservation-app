import type { Testimonial } from "../types/testimonial";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Samantha Lee",
    rating: 5,
    comment:
      "The room was beautiful and comfortable. The peaceful atmosphere made our stay feel truly relaxing.",
    stayType: "Leisure stay",
    source: "Google Reviews",
  },
  {
    id: 2,
    name: "Daniel Cruz",
    location: "Cebu, Philippines",
    rating: 5,
    comment:
      "The staff were welcoming, and everything was well organized. I would gladly consider staying here again.",
    stayType: "Weekend getaway",
  },
  {
    id: 3,
    name: "Michelle Reyes",
    rating: 4,
    comment:
      "A lovely place to unwind after a busy week. The room was comfortable and the overall experience was pleasant.",
    stayType: "Short vacation",
    source: "Direct guest feedback",
  },
];
