import {Navbar} from './pages/Navbar';
import {Hero} from './pages/Hero';
import {Features} from './pages/Features';
import {Faq} from './pages/Faq';
import {Pricing} from './pages/Pricing';
import {Cta} from './pages/Cta';
import {Footer} from './pages/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='px-[20px] lg:container lg:px-20 mx-auto'>
        <Features />
        <Faq/>
        <Pricing />
        <Cta />
        <Footer />
      </div>
      
    </>
  );
}
