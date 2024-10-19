import { HeroSection } from '@/sections/Hero';
import { Header } from '../sections/Header';
import { ProjectsSection } from '@/sections/Projects';
import { TapeSection } from '@/sections/Tape';
import { TestimonialsSection } from '@/sections/Testimonials';
import { Footer } from '@/sections/Footer';
import { ContactSection } from '@/sections/Contact';
import { AboutSection } from '@/sections/About';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
