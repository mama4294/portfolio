import { Navigation } from "./routes/Navigation";
import { Footer } from "./routes/Footer";
import { Intro } from "./routes/Intro";
import { Wave, WAVE_TYPE } from "./components/Wave";
import { Projects } from "./routes/Projects";
import { Contact } from "./routes/Contact";
import { Skills } from "./routes/Skills";
import { About } from "./routes/About";
import { Tilt } from "./components/Tilt";
import { Routes, Route } from "react-router-dom";
import { ProjectDetails } from "./routes/ProjectDetails";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:projectTitle" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;

const Home = () => {
  return (
    <div className="flex flex-col h-auto">
      <Navigation />
      <main>
        <Intro />
        <Wave type={WAVE_TYPE.top} className={"text-primary"} />
        <Projects />
        <Wave type={WAVE_TYPE.bottom} className={"text-primary"} />
        <Skills />
        <Tilt className={"bg-dark text-primary"} />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};
