import './App.css';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="bg-[#323F5A]">
      <Navbar />
      <Hero />
      <Experience />
      <Footer />
    </div>
  );
}
