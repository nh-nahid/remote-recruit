import Hero from '../components/Hero';
import Feature1 from '../components/Feature1';
import Feature2 from '../components/Feature2';
import Showcase from '../components/Showcase';
import Trial from '../components/Trial';
import Questions from '../components/Questions';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="max-w-[1600px] mx-auto">
      <Hero />
      <Feature1 />
      <Feature2 />
      <Showcase />
      <Trial />
      <Questions />
      <Footer />
    </div>
  );
}
