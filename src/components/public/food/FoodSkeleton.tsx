function FoodSkeleton() {
  return (
    <section
      aria-label="Loading food"
      aria-busy="true"
      className="bg-base-100 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section introduction. */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="skeleton mx-auto h-4 w-40" />
          <div className="skeleton mx-auto mt-5 h-10 w-80 max-w-full sm:h-12 sm:w-96" />
          <div className="skeleton mx-auto mt-5 h-4 w-full max-w-xl" />
          <div className="skeleton mx-auto mt-2 h-4 w-4/5 max-w-md" />
        </div>

        {/* Category filter placeholders. */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
            <div key={id} className="skeleton h-8 w-24 rounded-full" />
          ))}
        </div>

        {/* Featured food card placeholders. */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <article
              key={id}
              className="overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm"
            >
              {/* Food image placeholder. */}
              <div className="skeleton aspect-[4/3] w-full rounded-none" />

              {/* Food information placeholders. */}
              <div className="space-y-4 p-5">
                <div>
                  <div className="skeleton h-6 w-3/4 rounded-lg" />
                  <div className="skeleton mt-3 h-4 w-full rounded-lg" />
                  <div className="skeleton mt-2 h-4 w-4/5 rounded-lg" />
                </div>

                {/* Price and availability placeholders. */}
                <div className="flex items-center justify-between border-t border-base-300 pt-4">
                  <div>
                    <div className="skeleton h-3 w-12" />
                    <div className="skeleton mt-2 h-6 w-24" />
                  </div>

                  <div className="skeleton h-4 w-20 rounded-full" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Explore button placeholder. */}
        <div className="mt-12 flex justify-center">
          <div className="skeleton h-12 w-48 rounded-xl" />
        </div>
      </div>
    </section>
  );
}

export default FoodSkeleton;
