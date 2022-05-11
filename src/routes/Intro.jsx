import { SocialLinks } from "../components/Social-Links";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
          className="text-white text-4xl"
          initial={{ opacity: 0, y:-50, rotate:30 }}
          animate={{ opacity: 1, y:0, rotate:0}}
          transition={{type:'spring', duration: 1.5, bounce: 0.3 }}
          >Matthew Malone
        </motion.h1>
        <TextLoop/>
        {/* <p className="text-inverted pb-4">A <span>Controls</span> Engineer</p> */}
        <SocialLinks />
      </section>
    );
  };



  const TextLoop = () => {
    const engineeringTypes = ["Process", "Controls", "Software"]
    const [index, setIndex] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        let next = index + 1;
        if (next === engineeringTypes.length) {
          next = 0;
        }
        setIndex(next);
      }, 3 * 1000);
    }, [index, setIndex]);
  
    return (
      <div className="pb-4">
          <p className="text-inverted">A <motion.div
            key={index}
            className="inline-block"
            initial={{ y: -50, x:0, opacity: 0 }}
            animate={{ y: 0,x:0, opacity: 1 }}
            exit={{ y: 100,x:0, opacity: 0 }}
            transition={{type:'spring', duration: 0.5, bounce: 0.3, delay: 0 }}
          >
            {engineeringTypes[index]}
          </motion.div> Engineer</p>
      </div>
    );
  };