import BlogHero from "../components/BlogHero";
import FeaturedArticle from "../components/FeaturedArticle";
import BlogCategories from "../components/BlogCategories";
import BlogGrid from "../components/BlogGrid";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <>
      <BlogHero />
      <FeaturedArticle />
      <BlogCategories />
      <BlogGrid />
      <Footer />
    </>
  );
}