import { Quote, Star } from "lucide-react";
import type { Testimonial } from "../../../types/testimonial";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article
      className="relative overflow-hidden rounded-3xl border border-base-300/70 bg-base-100 p-6 shadow-sm sm:p-10 lg:p-12"
      aria-live="polite"
    >
      <Quote
        size={64}
        strokeWidth={1}
        className="absolute right-6 top-6 text-primary/10 sm:right-10 sm:top-10"
        aria-hidden="true"
      />

      <div className="relative">
        <div
          className="flex items-center gap-1"
          role="img"
          aria-label={`${testimonial.rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              size={18}
              className={
                index < testimonial.rating
                  ? "fill-warning text-warning"
                  : "text-base-300"
              }
              aria-hidden="true"
            />
          ))}
        </div>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {testimonial.stayType}
        </p>

        <blockquote className="mt-4 text-xl font-medium leading-relaxed tracking-tight sm:text-2xl lg:text-3xl">
          “{testimonial.comment}”
        </blockquote>

        <div className="mt-10 flex items-center gap-4 border-t border-base-300 pt-6">
          <div
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary"
            aria-hidden="true"
          >
            {testimonial.name.charAt(0)}
          </div>

          <div className="min-w-0">
            <h3 className="font-semibold">{testimonial.name}</h3>

            {testimonial.location && (
              <p className="mt-1 text-sm text-base-content/60">
                {testimonial.location}
              </p>
            )}

            {testimonial.source && (
              <p className="mt-1 text-xs text-base-content/60">
                Review source: {testimonial.source}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default TestimonialCard;
