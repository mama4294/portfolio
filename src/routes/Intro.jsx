import { SocialLinks } from "../components/Social-Links";
import { motion } from "framer-motion";

export const Intro = () => {
    return (
      <section id="home" className="p-5 sm:p-10 bg-primary">
        <motion.span 
          className="text-inverted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 0.5 }}
          >Hello, I'm
        </motion.span>
        <motion.h1 
          className="text-white text-4xl pb-4"
          initial={{ opacity: 0, y:-50, rotate:30 }}
          animate={{ opacity: 1, y:0, rotate:0}}
          transition={{type:'spring', duration: 1.5, bounce: 0.3 }}
          >Matthew Malone
        </motion.h1>
        <SocialLinks />
      </section>
    );
  };