import { motion } from "framer-motion"


export const About = () => {
  return (
    <section className="p-10 bg-dark" id="about">
      <div className="md:w-9/12 m-auto"
        >
            <h1 className="text-white text-4xl text-center">About<span className="text-primary">.</span></h1>
            <motion.div 
              className="my-10"
              initial={{ opacity: 0, x:-100 }}
              whileInView={{ opacity: 1, x:0 }}
              transition={{type:'spring', duration: 1, bounce: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-white">Hi, i'm Matthew Malone, a chemical engineer by training with a passion for coding. I began in industrial automation by programming automated sequences for the food and beverage industry. I built mobile applications and dashboards to report on plant metrics. Since then, I moved into front-end web development and enjoy making clean and functional websites.</p>
            </motion.div>
      </div>
    </section>
  )
}
