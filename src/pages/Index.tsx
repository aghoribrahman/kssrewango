import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ImpactStats from "@/components/ImpactStats";
import DistrictMap from "@/components/DistrictMap";
import ServicePillars from "@/components/ServicePillars";
import Hero from "@/features/home/components/Hero";
import FocusDistricts from "@/features/home/components/FocusDistricts";
import { Gallery4Demo } from "@/components/blocks/gallery4-demo";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <FocusDistricts />
      <ServicePillars />
      <Gallery4Demo />
      <ImpactStats />
      <DistrictMap />
    </main>
    <Footer />
  </>
);

export default Index;
