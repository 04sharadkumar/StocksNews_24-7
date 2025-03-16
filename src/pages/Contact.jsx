// pages/contact.jsx
import ContactHeader from "@/components/Contact/ContactHeader";
import ContactCards from "@/components/Contact/ContactCards";
import ContactForm from "@/components/Contact/ContactForm";
import MapSection from "@/components/Contact/MapSection";
import FAQs from "@/components/Contact/FAQs";


export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 py-16">
      {/* Header Section */}
      <ContactHeader />

      {/* Contact Cards Section */}
      <ContactCards />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Map Section */}
      <MapSection />

      {/* FAQs  */}
      <FAQs />
    </div>
  );
}
