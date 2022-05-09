import {motion} from "framer-motion"

export const SkillItem = ({children}) =>  {
    return(
      <motion.li 
      className="inline-block px-2 py-1 my-1 mr-2 text-primary bg-white rounded-sm"
      initial={{ opacity: 0, x:100 }}
      whileInView={{ opacity: 1, x:0 }}
      transition={{type:'spring', duration: 1, bounce: 0.3}}
      viewport={{ once: true }}
      >
        {children}
      </motion.li>
    )
  }