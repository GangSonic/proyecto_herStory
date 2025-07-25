'use client';

import Link from 'next/link';
import { BiSearch, BiHomeAlt, BiErrorCircle } from 'react-icons/bi';

export default function NotFound() {
  return (
    <section id="error-404" className="error-404 section py-16 text-center">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="error-icon text-6xl text-red-600 mb-4">
            <BiErrorCircle />
          </div>

          <h1 className="error-code text-7xl font-bold text-gray-800 mb-4">404</h1>

          <h2 className="error-title text-2xl font-semibold mb-3">
            Oops! Page Not Found
          </h2>

          <p className="error-text text-gray-600 mb-6">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>

         <div className="search-box mb-4" data-aos="fade-up" data-aos-delay="600">
          <form action="#" className="search-form">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for pages..."
                aria-label="Search"
              />
              <button className="btn search-btn" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>


          <div className="error-action">
            <Link href="/" className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded inline-flex items-center gap-2">
              <BiHomeAlt />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
