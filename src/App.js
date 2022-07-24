import { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
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
          <Contact />

          {/* Scroll to Top btn */}
          <ScrollToTop
            smooth
            className="flex justify-center items-center"
            top={480}
            component={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="#f52225"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            }
          />
        </div>
      )}
    </>
  );
}

export default App;
