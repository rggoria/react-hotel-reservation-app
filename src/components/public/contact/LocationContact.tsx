import Location from "./Location";
import Contact from "./Contact";

function LocationContact() {
  return (
    <section
      id="contact"
      aria-labelledby="location-contact-heading"
      className="bg-base-200/50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section introduction */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Location & Contact
          </p>

          <h2
            id="location-contact-heading"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            We'd love to welcome you
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-base-content/70">
            Planning a stay or visiting us in person? Find our location and get
            in touch with our team. We're happy to help with your questions and
            reservation inquiries.
          </p>
        </div>

        {/* Location and Contact cards */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <Location />
          <Contact />
        </div>
      </div>
    </section>
  );
}

export default LocationContact;
