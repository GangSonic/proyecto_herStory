// src/components/Logo.jsx
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="logo d-flex align-items-end">
      <h1 className="sitename">Blogy</h1><span>.</span>
    </Link>
  );
}
