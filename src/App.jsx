import './App.css'
import { useEffect } from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import Service from './components/service'
import About from './components/about'
import Contact from './components/contact'
import FAQSection from './components/faqsection'
import Footer from './components/footer'
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>

      <Navbar />
      <Home />
      <Service />
      <About />
      <Contact />
      <FAQSection />
      <Footer />
    </>
  )
}

export default App
