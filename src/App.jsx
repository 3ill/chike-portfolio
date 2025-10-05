import About from "./sections/about";
import Clients from "./sections/clients";
import Contact from "./sections/contact";
import Experience from "./sections/experience";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import Navbar from "./sections/navbar";
import Projects from "./sections/projects";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
