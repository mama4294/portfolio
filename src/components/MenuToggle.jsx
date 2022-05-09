import { motion } from "framer-motion";

const Path = props => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      strokeLinecap="round"
      {...props}
    />
  );


export const MenuToggle = ({ toggle, isOpen, color }) => (
    <button onClick={toggle} className="p-4">
      <svg 
        className={color}
        width="23" 
        height="23" 
        viewBox="0 0 23 23"
        fill="currentColor"
        stroke="currentColor"
        >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
          animate={isOpen ? "open" : "closed"}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
          animate={isOpen ? "open" : "closed"}
        />
      </svg>
    </button>
)