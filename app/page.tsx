import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';
import TestimonialCarousel from '@/components/shared/TestimonialCarousel';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <TestimonialCarousel />
    </div>
  );
} 