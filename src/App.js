import { useState } from "react";
import { Navigation } from "./routes/Navigation";
import { Footer } from "./routes/Footer";
import { SocialLinks } from "./components/Social-Links";
import { Wave, WAVE_TYPE } from "./components/Wave";
import { Projects } from "./routes/Projects";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navigation />
      <Content>
        <ContentSection className="p-10 bg-primary">
          <Intro />
        </ContentSection>
        <Wave type={WAVE_TYPE.base} className={"text-primary"} />
        <Skills />
        {/* <Wave
          type={WAVE_TYPE.base}
          className={"text-primary origin-center rotate-180"}
        /> */}
        <ContentSection>
          <Projects />
        </ContentSection>
        <Section id="about" title="About" />
        <Section id="contact" title="Contact" />
      </Content>
      <Footer />
    </div>
  );
}

export default App;

export const Content = ({ children }) => {
  return <div className="mt-[64px]">{children}</div>;
};

export const ContentSection = ({ children, className = "p-10" }) => {
  return <div className={className}>{children}</div>;
};

export const Intro = () => {
  return (
    <section id="home" className="">
      <span className="text-inverted">Hello, I'm</span>
      <h1 className="text-white text-4xl pb-4">Matthew Malone</h1>
      <SocialLinks />
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

export const Section = ({ id, title }) => {
  return (
    <section id={id} className="shadow-sm">
      <div className="p-10">
        <h1 className="text-primary text-4xl">{title}</h1>
      </div>
    </section>
  );
};
