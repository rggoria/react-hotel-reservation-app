export type Testimonial = {
  id: number;
  name: string;
  location?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  stayType: string;
  source?: string;
};
