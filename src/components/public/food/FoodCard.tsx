import { CheckCircle2, Clock } from "lucide-react";

import type { Food } from "../../../types/food";

interface FoodCardProps {
  food: Food;
}

function FoodCard({ food }: FoodCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Food photograph */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={food.image}
          alt={food.imageAlt}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Category badge */}
        <div className="absolute left-4 top-4">
          <span className="badge border-0 bg-base-100/90 px-3 py-3 font-semibold text-base-content shadow-sm backdrop-blur">
            {food.category}
          </span>
        </div>

        {/* Featured badge */}
        {food.featured && (
          <div className="absolute right-4 top-4">
            <span className="badge border-0 bg-primary px-3 py-3 font-semibold text-primary-content">
              Featured
            </span>
          </div>
        )}

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Food information */}
      <div className="space-y-4 p-5">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-bold tracking-tight">{food.name}</h3>
          </div>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-base-content/65">
            {food.description}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-base-300 pt-4">
          <div>
            <p className="text-xs text-base-content/50">Price</p>

            <p className="mt-1 text-xl font-bold text-primary">
              ₱{food.price.toLocaleString("en-PH")}
            </p>
          </div>

          {food.available ? (
            <span className="flex items-center gap-1.5 text-xs font-medium text-success">
              <CheckCircle2 size={15} aria-hidden="true" />
              Available
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-xs font-medium text-error">
              <Clock size={15} aria-hidden="true" />
              Unavailable
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default FoodCard;
