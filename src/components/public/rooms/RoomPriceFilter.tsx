import { useEffect, useState } from "react";
import { RotateCcw, Wallet } from "lucide-react";

interface RoomPriceFilterProps {
  minPrice: number;
  maxPrice: number;
  onMinPriceChange: (value: number) => void;
  onMaxPriceChange: (value: number) => void;
  onReset: () => void;
}

const MIN_LIMIT = 0;
const MAX_LIMIT = 10000;
const PRICE_STEP = 200;
const INPUT_DELAY = 500;

function RoomPriceFilter({
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  onReset,
}: RoomPriceFilterProps) {
  // Keep separate draft values so typing does not immediately filter rooms.
  const [minInput, setMinInput] = useState(String(minPrice));
  const [maxInput, setMaxInput] = useState(String(maxPrice));

  // Calculate slider positions based on the selected price range.
  const range = MAX_LIMIT - MIN_LIMIT;
  const minPosition = ((minPrice - MIN_LIMIT) / range) * 100;
  const maxPosition = ((maxPrice - MIN_LIMIT) / range) * 100;

  // Apply typed prices after the user stops typing.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const parsedMin = minInput.trim() === "" ? MIN_LIMIT : Number(minInput);

      const parsedMax = maxInput.trim() === "" ? MAX_LIMIT : Number(maxInput);

      if (!Number.isFinite(parsedMin) || !Number.isFinite(parsedMax)) {
        return;
      }

      // Keep both prices within the supported range.
      const safeMin = Math.max(MIN_LIMIT, Math.min(parsedMin, MAX_LIMIT));

      const safeMax = Math.max(MIN_LIMIT, Math.min(parsedMax, MAX_LIMIT));

      // Keep the minimum price lower than or equal to the maximum.
      const finalMin = Math.min(safeMin, safeMax);
      const finalMax = Math.max(safeMin, safeMax);

      onMinPriceChange(finalMin);
      onMaxPriceChange(finalMax);
    }, INPUT_DELAY);

    return () => window.clearTimeout(timer);
  }, [minInput, maxInput, onMinPriceChange, onMaxPriceChange]);

  // Synchronize the text fields when the slider or reset button changes the applied prices.
  useEffect(() => {
    setMinInput(String(minPrice));
    setMaxInput(String(maxPrice));
  }, [minPrice, maxPrice]);

  // Update the minimum price immediately when its slider moves.
  function handleMinChange(value: number) {
    const nextValue = Math.min(value, maxPrice);

    setMinInput(String(nextValue));
    onMinPriceChange(nextValue);
  }

  // Update the maximum price immediately when its slider moves.
  function handleMaxChange(value: number) {
    const nextValue = Math.max(value, minPrice);

    setMaxInput(String(nextValue));
    onMaxPriceChange(nextValue);
  }

  // Apply the typed prices immediately when the user presses Enter or leaves an input.
  function applyInput() {
    const parsedMin = minInput.trim() === "" ? MIN_LIMIT : Number(minInput);

    const parsedMax = maxInput.trim() === "" ? MAX_LIMIT : Number(maxInput);

    if (!Number.isFinite(parsedMin) || !Number.isFinite(parsedMax)) {
      return;
    }

    const safeMin = Math.max(MIN_LIMIT, Math.min(parsedMin, MAX_LIMIT));

    const safeMax = Math.max(MIN_LIMIT, Math.min(parsedMax, MAX_LIMIT));

    const finalMin = Math.min(safeMin, safeMax);
    const finalMax = Math.max(safeMin, safeMax);

    setMinInput(String(finalMin));
    setMaxInput(String(finalMax));

    onMinPriceChange(finalMin);
    onMaxPriceChange(finalMax);
  }

  // Restore the default range and clear any unfinished input.
  function handleReset() {
    setMinInput(String(MIN_LIMIT));
    setMaxInput(String(MAX_LIMIT));
    onReset();
  }

  return (
    <div className="space-y-5">
      {/* Price filter heading and reset action. */}
      <div className="flex items-center justify-between gap-2">
        <h2 className="flex items-center gap-2 font-bold">
          <Wallet size={19} aria-hidden="true" />
          Price Range
        </h2>

        <button
          type="button"
          onClick={handleReset}
          className="btn btn-ghost btn-xs gap-1"
        >
          <RotateCcw size={14} aria-hidden="true" />
          Reset
        </button>
      </div>

      {/* Display the currently applied price range. */}
      <div>
        <p className="text-sm text-base-content/60">Price per night</p>

        <p className="mt-2 text-xl font-bold text-primary">
          ₱{minPrice.toLocaleString("en-PH")} - ₱
          {maxPrice.toLocaleString("en-PH")}
        </p>
      </div>

      {/* Display both slider handles on one shared track. */}
      <div className="relative px-2 pt-3">
        <div className="relative h-2 rounded-full bg-base-300">
          <div
            className="absolute h-2 rounded-full bg-primary"
            style={{
              left: `${minPosition}%`,
              width: `${Math.max(0, maxPosition - minPosition)}%`,
            }}
          />

          <input
            type="range"
            min={MIN_LIMIT}
            max={MAX_LIMIT}
            step={PRICE_STEP}
            value={minPrice}
            onChange={(event) => handleMinChange(Number(event.target.value))}
            aria-label="Minimum price"
            className="dual-range-input"
            style={{
              zIndex: minPrice >= MAX_LIMIT - PRICE_STEP ? 5 : 3,
            }}
          />

          <input
            type="range"
            min={MIN_LIMIT}
            max={MAX_LIMIT}
            step={PRICE_STEP}
            value={maxPrice}
            onChange={(event) => handleMaxChange(Number(event.target.value))}
            aria-label="Maximum price"
            className="dual-range-input"
            style={{ zIndex: 4 }}
          />
        </div>
      </div>

      {/* Show the available slider limits. */}
      <div className="flex justify-between text-xs text-base-content/60">
        <span>₱0</span>
        <span>₱10,000</span>
      </div>

      {/* Allow users to type exact prices independently. */}
      <div className="grid grid-cols-2 gap-3">
        <div className="min-w-0">
          <label
            htmlFor="min-price"
            className="mb-2 block text-xs font-medium text-base-content/70"
          >
            Minimum Price
          </label>

          <div className="flex h-11 items-center rounded-xl border border-base-300 bg-base-100 px-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
            <span className="mr-1 text-sm text-base-content/60">₱</span>

            <input
              id="min-price"
              type="number"
              min={MIN_LIMIT}
              max={MAX_LIMIT}
              step={1}
              value={minInput}
              placeholder="0"
              onChange={(event) => setMinInput(event.target.value)}
              onBlur={applyInput}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  applyInput();
                  event.currentTarget.blur();
                }
              }}
              className="w-full min-w-0 bg-transparent text-sm font-semibold outline-none"
            />
          </div>
        </div>

        <div className="min-w-0">
          <label
            htmlFor="max-price"
            className="mb-2 block text-xs font-medium text-base-content/70"
          >
            Maximum Price
          </label>

          <div className="flex h-11 items-center rounded-xl border border-base-300 bg-base-100 px-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
            <span className="mr-1 text-sm text-base-content/60">₱</span>

            <input
              id="max-price"
              type="number"
              min={MIN_LIMIT}
              max={MAX_LIMIT}
              step={1}
              value={maxInput}
              placeholder="10000"
              onChange={(event) => setMaxInput(event.target.value)}
              onBlur={applyInput}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  applyInput();
                  event.currentTarget.blur();
                }
              }}
              className="w-full min-w-0 bg-transparent text-sm font-semibold outline-none"
            />
          </div>
        </div>
      </div>

      {/* Provide a convenient way to restore the default price range. */}
      <button
        type="button"
        onClick={handleReset}
        className="btn btn-outline btn-sm w-full rounded-xl"
      >
        <RotateCcw size={15} aria-hidden="true" />
        Reset price
      </button>
    </div>
  );
}

export default RoomPriceFilter;
