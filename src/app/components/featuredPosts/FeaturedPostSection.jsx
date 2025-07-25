'use client';

import SectionTitle from './SectionTitle';
import BlogSlider from './BlogSlider';

const FeaturedPostsSection = () => {
  return (
    <section id="featured-posts" className="featured-posts section">
      <SectionTitle title="Featured Posts" subtitle="Featured Posts" />
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <BlogSlider />
      </div>
    </section>
  );
};

export default FeaturedPostsSection;
