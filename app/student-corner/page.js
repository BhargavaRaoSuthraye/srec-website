import Hero from "../components/home/Hero";
import Programs from "../components/home/Programs";
import PlacementsPreview from "../components/home/PlacementsPreview";
import CampusPreview from "../components/home/CampusPreview";
import Testimonials from "../components/home/Testimonials";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <PlacementsPreview />
      <CampusPreview />
      <Testimonials />
    </>
  );
}