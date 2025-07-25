// src/components/blogHero/BlogGrid.jsx
import BlogItem from './BlogItem';

export default function BlogGrid() {
  return (
    <div className="blog-grid">
      <BlogItem
        imgSrc="/img/blog/blog-post-3.webp"
        date="Apr. 14th, 2025"
        category="Technology"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        href="/blog-details"
        isFeatured
      />
      <BlogItem
        imgSrc="/img/blog/blog-post-portrait-1.webp"
        date="Apr. 14th, 2025"
        category="Security"
        title="Sed do eiusmod tempor incididunt ut labore"
        href="/blog-details"
        delay={100}
      />
      <BlogItem
        imgSrc="/img/blog/blog-post-9.webp"
        date="Apr. 14th, 2025"
        category="Career"
        title="Ut enim ad minim veniam, quis nostrud exercitation"
        href="/blog-details"
        delay={200}
      />
      <BlogItem
        imgSrc="/img/blog/blog-post-7.webp"
        date="Apr. 14th, 2025"
        category="Cloud"
        title="Adipiscing elit, sed do eiusmod tempor incididunt"
        href="/blog-details"
        delay={300}
      />
      <BlogItem
        imgSrc="/img/blog/blog-post-6.webp"
        date="Apr. 14th, 2025"
        category="Programming"
        title="Excepteur sint occaecat cupidatat non proident"
        href="/blog-details"
        delay={400}
      />
    </div>
  );
}
