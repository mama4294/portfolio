import { SocialLinks } from "../components/Social-Links";

export const Intro = () => {
    return (
      <section id="home" className="p-5 sm:p-10 bg-primary">
        <span className="text-inverted">Hello, I'm</span>
        <h1 className="text-white text-4xl pb-4">Matthew Malone</h1>
        <SocialLinks />
      </section>
    );
  };