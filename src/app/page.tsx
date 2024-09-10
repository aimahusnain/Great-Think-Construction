import Aboutus from "@/components/Aboutus";
import FAQSection from "@/components/FAQ";
import Herosection from "@/components/Herosection/Herosection";
import Herosectionv2 from "@/components/Herosection/Herosectionv2";
import Services from "@/components/Services";
import TeamMemberDashboard from "@/components/Team";
import TestimonialsCarousel from "@/components/Testimonials";

export default async function Home() {

  return (
    <main>
      <Herosection />
      {/* <Herosectionv2 /> */}
      <Aboutus />
      <Services />
      <TeamMemberDashboard />
      <FAQSection />
      <TestimonialsCarousel />
    </main>
  );
}
