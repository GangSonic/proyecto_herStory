// src/components/Navbar.jsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        <li><Link href="/" className="active">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/category">Category</Link></li>
        <li><Link href="/blog-details">Blog Details</Link></li>
        <li><Link href="/author-profile">Author Profile</Link></li>
        <li className="dropdown">
          <a href="#"><span>Pages</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/category">Category</Link></li>
            <li><Link href="/blog-details">Blog Details</Link></li>
            <li><Link href="/author-profile">Author Profile</Link></li>
            <li><Link href="/search-results">Search Results</Link></li>
            <li><Link href="/404">404 Not Found Page</Link></li>
            <li className="dropdown">
              <a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Deep Dropdown 1</a></li>
                <li><a href="#">Deep Dropdown 2</a></li>
                <li><a href="#">Deep Dropdown 3</a></li>
                <li><a href="#">Deep Dropdown 4</a></li>
                <li><a href="#">Deep Dropdown 5</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>
  );
}
