import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { QueryClient, QueryClientProvider } from 'react-query';
import Experiences from './components/Experiences';

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-[#323F5A]">
        <Navbar />
        <Hero />
        <Experiences />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
