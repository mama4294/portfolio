import { Navigation } from "./routes/Navigation";
import { Footer } from "./routes/Footer";
import { Intro } from "./routes/Intro";
import { Wave, WAVE_TYPE } from "./components/Wave";
import { Projects } from "./routes/Projects";
import { Contact } from "./routes/Contact";
import { Skills } from "./routes/Skills";
import { About } from "./routes/About";
function App() {
  return (
    <div className="flex flex-col h-auto">
      <Navigation />
      <main>
        <Intro />
        <Wave type={WAVE_TYPE.base} className={"text-primary"} />
        <Projects />
        <Wave
          type={WAVE_TYPE.base}
          className={"text-primary origin-center rotate-180"}
        />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
