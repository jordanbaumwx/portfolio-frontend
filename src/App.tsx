import './App.css';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-[#323F5A]">
        <Navbar />
        <Hero />
        <Experience />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
