import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { hotel } from "../../../data/hotel";

function Contact() {
  return (
    <article className="card h-full border border-base-300 bg-base-100 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="card-body gap-6 p-6 sm:p-8">
        {/* Card heading */}
        <div className="flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Mail size={24} aria-hidden="true" />
          </div>

          <div>
            <h3 className="card-title text-xl">Contact Information</h3>

            <p className="mt-1 text-sm text-base-content/60">
              We're happy to assist you
            </p>
          </div>
        </div>

        <p className="text-sm leading-7 text-base-content/70">
          Have questions about room availability, rates, or your upcoming stay?
          Contact our team or visit us for a walk-in enquiry.
        </p>

        {/* Contact details */}
        <div className="space-y-6">
          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Phone size={20} aria-hidden="true" />
            </div>

            <div className="min-w-0">
              <h4 className="font-semibold">Phone</h4>

              <a
                href={`tel:${hotel.phone.replace(/\s/g, "")}`}
                className="link link-hover mt-1 inline-block text-sm text-base-content/70"
              >
                {hotel.phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Mail size={20} aria-hidden="true" />
            </div>

            <div className="min-w-0">
              <h4 className="font-semibold">Email</h4>

              <a
                href={`mailto:${hotel.email}`}
                className="link link-hover mt-1 inline-block break-all text-sm text-base-content/70"
              >
                {hotel.email}
              </a>
            </div>
          </div>

          {/* Reception hours */}
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Clock size={20} aria-hidden="true" />
            </div>

            <div>
              <h4 className="font-semibold">Reception Hours</h4>

              <p className="mt-1 text-sm text-base-content/70">
                {hotel.receptionHours}
              </p>
            </div>
          </div>
        </div>

        <div className="divider my-0" />

        {/* Walk-in inquiries */}
        <div className="mt-auto rounded-2xl border border-primary/15 bg-primary/5 p-5">
          <div className="flex items-start gap-3">
            <MapPin
              size={20}
              className="mt-0.5 shrink-0 text-primary"
              aria-hidden="true"
            />

            <div>
              <h4 className="font-semibold">Prefer to visit in person?</h4>

              <p className="mt-2 text-sm leading-6 text-base-content/70">
                Visit our reception to ask about room options, rates, and
                reservation requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Contact;
