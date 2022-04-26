import { Navigation } from "./routes/Navigation";
import { Footer } from "./routes/Footer";
import { SocialLinks } from "./components/Social-Links";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navigation />
      <Content>
        <Intro />
        <Skills />
        <Projects />
        <Section id="about" title="About" />
        <Section id="contact" title="Contact" />
      </Content>
      <Footer />
    </div>
  );
}

export default App;

export const Content = ({ children }) => {
  return <div className="m-5 mt-[64px]">{children}</div>;
};

export const Intro = () => {
  return (
    <section id="home" className="shadow-sm">
      <div className="p-10">
        <span className="text-muted">Hello, I'm</span>
        <h1 className="text-primary text-4xl">Matthew Malone</h1>
        <SocialLinks />
      </div>
    </section>
  );
};
export const Skills = () => {
  return (
    <section id="skills" className="shadow-sm">
      <div className="p-10">
        <h1 className="text-primary text-4xl">Skills</h1>
      </div>
    </section>
  );
};
export const Projects = () => {
  return (
    <section id="projects" className="shadow-sm">
      <div className="p-10">
        <h1 className="text-primary text-4xl">Projects</h1>
      </div>
    </section>
  );
};

export const Section = ({ id, title }) => {
  return (
    <section id={id} className="shadow-sm">
      <div className="p-10">
        <h1 className="text-primary text-4xl">{title}</h1>
      </div>
    </section>
  );
};
