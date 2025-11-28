import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Testimonials />
      <Comparison />
      <FAQ />
      <ContactForm />
      <FinalCTA />
    </div>
  );
}

export default App;
