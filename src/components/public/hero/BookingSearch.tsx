import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Search,
  Users,
  ChevronDown,
  Check,
  Sparkles,
  PhilippinePeso,
} from "lucide-react";

const guestOptions = [
  { value: "1", label: "1 guest", description: "Solo stay" },
  { value: "2", label: "2 guests", description: "Perfect for two" },
  { value: "3", label: "3 guests", description: "Small group" },
  { value: "4", label: "4 guests", description: "Family or friends" },
];

const roomOptions = [
  {
    value: "all",
    label: "All rooms",
    description: "Explore all accommodations",
  },
  {
    value: "featured",
    label: "Featured rooms",
    description: "Our recommended stays",
  },
];

const priceOptions = [
  { value: "all", label: "Any price", description: "All room prices" },
  { value: "budget", label: "Under ₱2,000", description: "Budget-friendly" },
  { value: "standard", label: "₱2,000 – ₱5,000", description: "Standard stay" },
  { value: "premium", label: "₱5,000 – ₱8,000", description: "Premium stay" },
  { value: "luxury", label: "Above ₱8,000", description: "Luxury stay" },
];

type DropdownType = "guests" | "room" | "price";

type DropdownOption = {
  value: string;
  label: string;
  description: string;
};

function BookingSearch() {
  const navigate = useNavigate();

  const [guests, setGuests] = useState("2");
  const [roomPreference, setRoomPreference] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const [activeDropdown, setActiveDropdown] = useState<DropdownType | null>(
    null,
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    navigate("/rooms", {
      state: {
        guests: Number(guests),
        featuredOnly: roomPreference === "featured",
        priceRange,
      },
    });
  }

  function handleSelect(callback: (value: string) => void, value: string) {
    callback(value);
    setActiveDropdown(null);
  }

  const fieldClassName =
    "flex h-12 w-full items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-3 text-left text-white transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-amber-300/50";

  const labelClassName =
    "mb-2 flex items-center gap-2 text-sm font-medium text-white";

  function renderDropdown(
    type: DropdownType,
    label: string,
    icon: React.ReactNode,
    selectedLabel: string,
    options: DropdownOption[],
    selectedValue: string,
    onSelect: (value: string) => void,
  ) {
    const isOpen = activeDropdown === type;

    return (
      <div className="relative w-full">
        <label className={labelClassName}>
          {icon}
          {label}
        </label>

        <div className="relative w-full">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            onClick={() => setActiveDropdown(isOpen ? null : type)}
            className={fieldClassName}
          >
            <span className="flex-1 truncate font-medium">{selectedLabel}</span>

            <ChevronDown
              size={18}
              aria-hidden="true"
              className={`shrink-0 text-white/70 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <ul
              role="listbox"
              aria-label={label}
              className="absolute left-0 top-full z-[999] mt-2 w-full min-w-56 rounded-xl border border-base-300 bg-base-100 p-2 text-base-content shadow-2xl"
            >
              {options.map((option) => {
                const isSelected = selectedValue === option.value;

                return (
                  <li key={option.value}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleSelect(onSelect, option.value)}
                      className={`flex w-full items-center gap-3 rounded-lg p-3 text-left transition ${
                        isSelected
                          ? "bg-amber-100 text-amber-950"
                          : "hover:bg-base-200"
                      }`}
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold">
                          {option.label}
                        </span>

                        <span className="block text-xs opacity-70">
                          {option.description}
                        </span>
                      </span>

                      {isSelected && (
                        <Check
                          size={18}
                          className="shrink-0"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-30 w-full rounded-2xl border border-white/20 bg-black/40 p-5 text-white shadow-xl backdrop-blur-xl sm:p-6"
    >
      <div className="grid grid-cols-1 items-end gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Number of guests */}
        {renderDropdown(
          "guests",
          "Number of guests",
          <Users size={18} />,
          guestOptions.find((option) => option.value === guests)?.label ??
            "2 guests",
          guestOptions,
          guests,
          setGuests,
        )}

        {/* Room preference */}
        {renderDropdown(
          "room",
          "Room preference",
          <Sparkles size={18} />,
          roomOptions.find((option) => option.value === roomPreference)
            ?.label ?? "All rooms",
          roomOptions,
          roomPreference,
          setRoomPreference,
        )}

        {/* Price range */}
        {renderDropdown(
          "price",
          "Price range",
          <PhilippinePeso size={18} />,
          priceOptions.find((option) => option.value === priceRange)?.label ??
            "Any price",
          priceOptions,
          priceRange,
          setPriceRange,
        )}

        {/* Search button */}
        <div className="w-full">
          <button
            type="submit"
            className="btn btn-warning h-12 min-h-12 w-full rounded-xl"
          >
            <Search size={18} aria-hidden="true" />
            Find a Room
          </button>
        </div>
      </div>

      <p className="mt-4 text-xs text-white/70">
        Find the perfect accommodation based on your group size and budget.
      </p>
    </form>
  );
}

export default BookingSearch;
