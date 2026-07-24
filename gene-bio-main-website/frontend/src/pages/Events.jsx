import EventsHero from "../components/EventsHero";
import EventCategories from "../components/EventCategories";
import EventRoadmap from "../components/EventRoadmap";
import FeaturedEvent from "../components/FeaturedEvent";
import GallerySection from "../components/GallerySection";
import EventStats from "../components/EventStats";
import PastEventInsights from "../components/PastEventInsights";
import ConnectExperts from "../components/ConnectExperts";
import Footer from "../components/Footer";

export default function Events() {
  return (
    <>
      <EventsHero />

      <EventCategories />

      <EventRoadmap />

      <FeaturedEvent />

      <GallerySection />

      <EventStats />

      <PastEventInsights />

      <ConnectExperts />

      <Footer />
    </>
  );
}