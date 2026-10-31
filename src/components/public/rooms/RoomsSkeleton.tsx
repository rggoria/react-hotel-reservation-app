function RoomsSkeleton() {
  return (
    <section
      aria-label="Loading rooms"
      aria-busy="true"
      className="bg-base-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="skeleton mb-3 h-4 w-36" />
        <div className="skeleton h-10 w-80 max-w-full sm:h-12 sm:w-96" />
        <div className="skeleton mt-4 h-5 w-full max-w-2xl" />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((id) => (
            <article
              key={id}
              className="card h-full overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm"
            >
              <div className="skeleton h-60 w-full rounded-none sm:h-64" />

              <div className="card-body flex flex-1 gap-4 p-5 sm:p-6">
                <div>
                  <div className="skeleton mb-3 h-5 w-28 rounded-full" />
                  <div className="skeleton h-6 w-3/4" />
                  <div className="skeleton mt-3 h-4 w-full" />
                  <div className="skeleton mt-2 h-4 w-5/6" />
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="skeleton h-4 w-24" />
                  <div className="skeleton h-4 w-28" />
                </div>

                <div className="flex flex-wrap gap-2">
                  <div className="skeleton h-6 w-16 rounded-full" />
                  <div className="skeleton h-6 w-28 rounded-full" />
                  <div className="skeleton h-6 w-20 rounded-full" />
                </div>

                <div className="mt-auto flex items-end justify-between gap-3 border-t border-base-300 pt-4">
                  <div className="space-y-2">
                    <div className="skeleton h-3 w-20" />
                    <div className="skeleton h-7 w-28" />
                    <div className="skeleton h-3 w-16" />
                  </div>

                  <div className="skeleton h-8 w-28 rounded-btn" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoomsSkeleton;
