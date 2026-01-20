import { Header } from "@/components/Header";
import { HeroSection } from "@/views/HeroSection";
import { Experience } from "@/views/Experience";
import { Footer } from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsappFlowtingButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Projects from "@/views/Projects";
import { ToastContainer } from "react-toastify";
import { Contact } from "@/views/Contact";
import { Skills } from "@/views/Skills";
import { Certifications } from "@/views/Certifications";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full">
        <section id="home">
          <HeroSection />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
      <WhatsAppFloatingButton phoneNumber="917995622416" size="large" />
      <ScrollToTopButton />
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>

  );
}
