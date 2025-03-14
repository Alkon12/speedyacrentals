import ContactUsSection from "@/components/ContactUsSection";
import ContactButton from "@/components/ContactButton";
import GoogleMapSection from "@/components/GoogleMapSection";

export default function Contact() {
  return (
    <main>
      <ContactUsSection />
      <GoogleMapSection />
      <div className="py-5 bg-white dark:bg-black">
        <ContactButton sizeClass="py-1 px-12" />
      </div>
    </main>
  )
}
