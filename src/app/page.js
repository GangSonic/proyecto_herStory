///pagina (body) 
///blog 
import BlogHeroSection from "./components/blogHero/BlogHeroSection";
////carrucel 
import FeaturedPostsSection from "./components/featuredPosts/FeaturedPostSection";


 

export default function HomePage() {
  return (
    <>
     

        <main className="main">
          <BlogHeroSection />
          <FeaturedPostsSection />
        </main>

      

    </>
  );
}
