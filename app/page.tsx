import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarouselImages from './components/CarouselImages';
import IntroReveal from './components/IntroReveal';
import Services from './components/Services';
import Kids from './components/Kids';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <CarouselImages />
        <IntroReveal />
        <Services />
        <Kids />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
