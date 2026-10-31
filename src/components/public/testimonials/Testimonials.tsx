import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { testimonials } from "../../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically show the next testimonial every 5 seconds.
  useEffect(() => {
    if (testimonials.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const previousTestimonial = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  };

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  if (!activeTestimonial) {
    return null;
  }

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-base-200/50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Section introduction */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Guest Experiences
            </p>

            <h2
              id="testimonials-heading"
              className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Stories that make a stay special.
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-base-content/70">
              A memorable stay is about more than a room. It is the comfort,
              care, and little details that make guests want to return.
            </p>
          </div>

          {/* Active testimonial and centered carousel controls */}
          <div>
            <TestimonialCard testimonial={activeTestimonial} />

            {/* Centered previous / next buttons */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={previousTestimonial}
                className="btn btn-circle btn-outline border-base-300"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={19} aria-hidden="true" />
              </button>

              <span className="min-w-16 text-center text-sm tabular-nums text-base-content/60">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={nextTestimonial}
                className="btn btn-circle btn-primary"
                aria-label="Next testimonial"
              >
                <ArrowRight size={19} aria-hidden="true" />
              </button>
            </div>

            {/* Centered pagination dots */}
            <div
              className="mt-5 flex items-center justify-center gap-2"
              aria-label="Choose a testimonial"
            >
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={[
                    "h-2 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-base-content/25 hover:bg-base-content/50",
                  ].join(" ")}
                  aria-label={`Show testimonial ${index + 1} of ${testimonials.length}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
