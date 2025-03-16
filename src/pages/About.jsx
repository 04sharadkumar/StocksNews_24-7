// pages/AboutPage.js
import MissionSection from "@/components/About/MissionSection";
import WhyChooseUs from "@/components/About/WhyChooseUs";
import TimelineSection from "@/components/About/TimelineSection";
import EditorialValues from "@/components/About/EditorialValues";
import TeamSection from "@/components/About/TeamSection";

export default function AboutPage() {
  return (
    <div className="bg-blue-100 min-h-screen">
      <div className="container mx-auto px-6 py-12 text-center">
        {/* Hero Section */}
        <section className="max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl font-bold text-black font-poppins">
            About <span className="text-red-600">NewsScope</span>
          </h1>
          <p className="text-lg text-gray-700 mt-4 font-inter leading-relaxed">
            Your trusted source for <span className="text-black font-semibold">accurate</span>, 
            <span className="text-red-600 font-semibold">unbiased</span>, and <span className="text-black font-semibold">up-to-the-minute</span> news from around the world.
          </p>
        </section>

        {/* Mission Statement */}
        <MissionSection />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Company Timeline */}
        <TimelineSection />

        {/* Editorial Values */}
        <EditorialValues />

        {/* Meet the Team */}
        <TeamSection />
      </div>
    </div>
  );
}
