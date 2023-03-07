import HeroSection from "../components/Home/HeroSection.js";
import Courses from "../components/Home/Courses.js";
import Packages from "../components/Home/Packages.js";
import Services from "../components/Home/Services.js";
import Testimonials from "../components/Home/Testimonials.js";
import Form from "../components/Home/Form.js";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Courses />
      <Packages />
      <Services />
      <Testimonials />
      <Form />
    </main>
  );
}
