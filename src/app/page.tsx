import Hero from "@/components/Hero";
import ACFeaturesSection from "@/components/ACFeaturesSection";
import ACInventorySection from "@/components/ACInventorySection";
import ImageSlider from "@/components/ImageSlider";
import ApplicationsSlider from "@/components/ApplicationsSlider";
import ContactButton from "@/components/ContactButton";


export default function Home() {
  return (
    <main>
      <Hero />
      <ACFeaturesSection />
      <ACInventorySection />
      <ImageSlider />
      <ApplicationsSlider />
      <div className="py-5 bg-white">
        <ContactButton />
      </div>
    </main>
  );
}
