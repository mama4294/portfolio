import { SocialLinks } from "../components/Social-Links";

export const Footer = () => {
    return (
      <footer className=" bg-primary text-sm lg:text-left p-4 flex justify-between">
        <SocialLinks/>
        <p className="text-white text-right">
          Made with React by Matthew Malone
        </p>
      </footer>
    );
  };