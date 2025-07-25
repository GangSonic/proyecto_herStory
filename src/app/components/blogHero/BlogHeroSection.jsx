// src/components/blogHero/BlogHeroSection.jsx
'use client';
import BlogGrid from './BlogGrid';

export default function BlogHeroSection() {
  return (
    <section id="blog-hero" className="blog-hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <BlogGrid />
      </div>
    </section>
  );
}
