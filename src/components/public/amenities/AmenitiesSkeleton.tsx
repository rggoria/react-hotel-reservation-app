function AmenitiesSkeleton() {
  return (
    <section
      aria-label="Loading amenities"
      aria-busy="true"
      className="bg-base-200/50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section introduction. */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="skeleton mx-auto h-4 w-40" />
          <div className="skeleton mx-auto mt-5 h-10 w-80 max-w-full sm:h-12 sm:w-96" />
          <div className="skeleton mx-auto mt-5 h-4 w-full max-w-xl" />
          <div className="skeleton mx-auto mt-2 h-4 w-4/5 max-w-md" />
        </div>

        {/* Featured gallery placeholders. */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[230px] lg:grid-cols-3 lg:gap-5">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <article
              key={id}
              className={[
                "relative isolate min-h-[280px] overflow-hidden rounded-2xl",
                "bg-base-300 shadow-md",
                "lg:min-h-0",
                id === 1 ? "lg:col-span-2 lg:row-span-2" : "",
              ].join(" ")}
            >
              {/* Image placeholder. */}
              <div className="skeleton absolute inset-0 rounded-none" />

              {/* Text placeholders. */}
              <div className="absolute inset-x-0 bottom-0 space-y-3 p-5 sm:p-6">
                <div className="skeleton h-6 w-2/3 rounded-lg" />
                <div className="skeleton h-4 w-full rounded-lg" />
                <div className="skeleton h-4 w-4/5 rounded-lg" />
              </div>
            </article>
          ))}
        </div>

        {/* Explore button placeholder. */}
        <div className="mt-12 flex justify-center">
          <div className="skeleton h-12 w-52 rounded-xl" />
        </div>
      </div>
    </section>
  );
}

export default AmenitiesSkeleton;
