import ParticlesBg from "particles-bg";
import "./App.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
      <ParticlesBg
        type="color"
        num={1}
        bg={{ position: "absolute", zIndex: 0 }}
      />
      <Header />
      <Banner />
      <About />
      <Services />
      <Projects />
      {/* <Blogs /> */}
      <Contact />
    </div>
  );
}

export default App;
