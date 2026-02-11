import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
    <div className="font-sans">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div></>
  );
}

export default App;
