import "./App.css";
import Banner from "./components/Banner/Banner";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
      {/* <ParticlesBg type="color" num={1} bg={true} /> */}
      <Header />
      <Banner />
      <Services />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
