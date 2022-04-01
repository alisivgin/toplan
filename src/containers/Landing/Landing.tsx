import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Contact from './Contact';
import Footer from './Footer';

interface LandingProps {}

function Landing({}: LandingProps) {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </>
  );
}

export default Landing;
