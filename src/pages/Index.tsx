import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ImpactStats from "@/components/ImpactStats";
import DistrictMap from "@/components/DistrictMap";
import ServicePillars from "@/components/ServicePillars";
import Hero from "@/features/home/components/Hero";
import FocusDistricts from "@/features/home/components/FocusDistricts";
import { Gallery4Demo } from "@/components/blocks/gallery4-demo";
import ErrorBoundary from "@/components/shared/ErrorBoundary";
import ChaosComponent from "@/test/ChaosComponent";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <FocusDistricts />
      <ServicePillars />
      <Gallery4Demo />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <ErrorBoundary>
          <ChaosComponent />
        </ErrorBoundary>
      </div>
      <ImpactStats />
      <DistrictMap />
    </main>
    <Footer />
  </>
);

export default Index;
