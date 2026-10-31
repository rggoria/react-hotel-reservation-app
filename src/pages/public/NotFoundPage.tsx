import { Link } from "react-router";
import { Home } from "lucide-react";

function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-8xl font-bold text-primary">404</h1>

        <h2 className="mt-6 text-2xl font-semibold">Page Not Found</h2>

        <p className="mt-3 text-base-content/70">
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        <Link to="/" className="btn btn-primary mt-8 gap-2">
          <Home size={18} />
          Back to Homepage
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
