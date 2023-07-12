import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Project from "./components/project/project";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
      {/* <i class="fa-sharp fa-solid fa-chevron-up"></i> */}
    </>
  );
}

export default App;
