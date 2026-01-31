'use client';
import Hero from './components/Hero';

import Experts from './components/Experts';
import VisionMission from './components/VisionMission';
import HowWeWork from './components/HowWeWork';
import Services from './components/Services';
import CoreValues from './components/CoreValues';
import Certificates from './components/Certificates';
import Reach from './components/Reach';
import WhyChooseUs from './components/WhyChooseUs';
import StaffSupport from './components/StaffSupport';
import TurnoverGraph from './components/TurnoverGraph';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Experts />
      <VisionMission />
      <HowWeWork />
      <Services />
      <CoreValues />
      <Certificates />
      <Reach />
      <WhyChooseUs />
      <StaffSupport />
      <TurnoverGraph />
      <Contact />
      <Footer />
    </main>
  );
}
