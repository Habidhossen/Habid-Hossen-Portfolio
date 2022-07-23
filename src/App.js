import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import SplashScreen from "./components/Projects/SplashScreen";
import Services from "./components/Services/Services";

function App() {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 2000);
  }, []);

  return (
    <>
      {spinner ? (
        <SplashScreen />
      ) : (
        <div>
          <Header />
          <Banner />
          <About />
          <Services />
          <Projects />
          {/* <Blogs /> */}
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
