// src/components/blogHero/BlogItem.jsx
'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogItem({ imgSrc, date, category, title, href, isFeatured = false, delay = 0 }) {
  return (
    <article
      className={`blog-item ${isFeatured ? 'featured' : ''}`}
      data-aos="fade-up"
      {...(delay ? { 'data-aos-delay': delay } : {})}
    >
      <Image src={imgSrc} alt="Blog Image" className="img-fluid" width={800} height={500} />
      <div className="blog-content">
        <div className="post-meta">
          <span className="date">{date}</span>
          <span className="category">{category}</span>
        </div>
        {isFeatured ? (
          <h2 className="post-title">
            <Link href={href} title={title}>{title}</Link>
          </h2>
        ) : (
          <h3 className="post-title">
            <Link href={href} title={title}>{title}</Link>
          </h3>
        )}
      </div>
    </article>
  );
}
