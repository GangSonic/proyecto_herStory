'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import FeaturedPostCard from './FeaturedPostCard';

const posts = [
  {
    img: './img/blog/blog-post-portrait-1.webp',
    author: 'Julia Parker',
    date: 'Jan 15, 2025',
    comments: 6,
    title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae...',
  },
  {
    img: './img/blog/blog-post-portrait-2.webp',
    author: 'Mark Wilson',
    date: 'Jan 18, 2025',
    comments: 6,
    title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    description:
      'Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero...',
  },
  // ...agrega los demás posts igual
];

const BlogSlider = () => {
  return (
    <div className="blog-posts-slider swiper init-swiper">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={800}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1200: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {posts.map((post, i) => (
          <SwiperSlide key={i}>
            <FeaturedPostCard {...post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogSlider;
