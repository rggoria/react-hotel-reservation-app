import { ArrowUpRight, MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router";

import { hotel } from "../../../data/hotel";
import BackToTop from "./BackToTop";

function Footer() {
  return (
    <>
      <footer className="border-t border-base-300 bg-base-200">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {/* Brand information */}
            <div>
              <Link
                to="/"
                className="text-2xl font-bold tracking-tight text-success"
                aria-label={`${hotel.name} - Home`}
              >
                hotel<span className="text-warning">.</span>
              </Link>

              <p className="mt-4 max-w-xs text-sm leading-7 text-base-content/70">
                Thoughtful hospitality, peaceful surroundings, and a place to
                feel at home. Discover a more comfortable way to stay.
              </p>
            </div>

            {/* Explore website pages */}
            <nav aria-label="Footer navigation">
              <h2 className="text-sm font-bold uppercase tracking-wider">
                Explore
              </h2>

              <ul className="mt-5 space-y-3 text-sm text-base-content/70">
                <li>
                  <a href="/#home" className="link link-hover">
                    Home
                  </a>
                </li>

                <li>
                  <Link to="/rooms" className="link link-hover">
                    Our Rooms
                  </Link>
                </li>

                <li>
                  <Link to="/amenities" className="link link-hover">
                    Amenities
                  </Link>
                </li>

                <li>
                  <Link to="/food" className="link link-hover">
                    Food & Dining
                  </Link>
                </li>

                <li>
                  <a href="/#testimonials" className="link link-hover">
                    Guest Experiences
                  </a>
                </li>

                <li>
                  <a href="/#contact" className="link link-hover">
                    Location & Contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* Contact information */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider">
                Get in Touch
              </h2>

              <ul className="mt-5 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="mt-1 shrink-0 text-success"
                    aria-hidden="true"
                  />

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-hover leading-6 text-base-content/70"
                  >
                    {hotel.address}
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <Phone
                    size={18}
                    className="mt-0.5 shrink-0 text-success"
                    aria-hidden="true"
                  />

                  <a
                    href={`tel:${hotel.phone.replace(/\s/g, "")}`}
                    className="link link-hover text-base-content/70"
                  >
                    {hotel.phone}
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <Mail
                    size={18}
                    className="mt-0.5 shrink-0 text-success"
                    aria-hidden="true"
                  />

                  <a
                    href={`mailto:${hotel.email}`}
                    className="link link-hover break-all text-base-content/70"
                  >
                    {hotel.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Enquiry section */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider">
                Have Questions?
              </h2>

              <p className="mt-5 text-sm leading-7 text-base-content/70">
                Planning a visit or need more information? Our team is happy to
                assist you with your enquiries.
              </p>

              <a
                href={`mailto:${hotel.email}`}
                className="btn btn-success mt-5 w-full sm:w-auto"
              >
                <MessageSquare size={17} aria-hidden="true" />
                Send an Enquiry
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>

              <p className="mt-3 text-xs leading-5 text-base-content/50">
                We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright and tagline */}
        <div className="border-t border-base-300">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-base-content/60 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <p>
              © {new Date().getFullYear()} {hotel.name}. All rights reserved.
            </p>

            <p>Made with care for a better stay.</p>
          </div>
        </div>
      </footer>

      {/* Shared floating action button */}
      <BackToTop />
    </>
  );
}

export default Footer;
