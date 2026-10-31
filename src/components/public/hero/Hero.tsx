import BookingSearch from "./BookingSearch";

function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate z-10 flex min-h-[85svh] items-center overflow-visible bg-base-300"
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=75"
        alt=""
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/50 to-black/70"
      />

      {/* Hero content */}
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex w-full flex-col items-start gap-6 sm:gap-8">
          {/* Introduction */}
          <div className="w-full max-w-3xl text-left text-white">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200 sm:text-sm">
              Welcome to your retreat
            </p>

            <h1
              id="hero-heading"
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Slow down.
              <br />
              Stay awhile.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
              Thoughtful hospitality, peaceful surroundings, and a place to feel
              at home.
            </p>
          </div>

          {/* Booking search */}
          <div className="w-full">
            <BookingSearch />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
