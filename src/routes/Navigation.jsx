import { useState } from 'react';
import { Link, animateScroll as scroll} from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion';
import { MenuToggle } from '../components/MenuToggle';

const menuItems = [
  {title:"Home", to:"home"},
  {title:"Projects", to:"projects"},
  {title:"Skills", to:"skills"},
  {title:"About", to:"about"},
  {title:"Contact", to:"contact"},
]

export const Navigation = () => {
    const [scrolledFromTop, setScrolledFromTop] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const checkScrollPosition = (e) => {
      const window = e.currentTarget;
        if (window.scrollY >= 50) {
          setScrolledFromTop(true);
        } else {
          setScrolledFromTop(false);
        }
      };
      
      //Determine if the nav should change colors on scroll
      window.addEventListener("scroll", checkScrollPosition);
      
      const toggleMobileMenu = () =>{
          setMobileMenuOpen(prev => !prev)
      }
  return (
    <nav className={`sticky top-0 w-full ease-in-out duration-300 z-50
    ${scrolledFromTop ? "bg-white shadow-lg" : "bg-primary"}`}>
        {/* Desktop Menu */}
        <div className="hidden sm:block mx-auto px-4 md:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
                <ul>
                {menuItems.map((item, i) =>{
                      const {title, to} = item;
                      return(
                        <NavItem key={i} to={to} scrolledFromTop={scrolledFromTop}>{title}</NavItem>
                      )
                    })}
                </ul>
            </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          <motion.div 
            className='sm:hidden mx-auto ml-auto'
            exit={{
              width: 0,
              transition: { delay: 3, duration: 0.3 }
            }}
            >
            <MenuToggle toggle={toggleMobileMenu} isOpen={mobileMenuOpen} color={scrolledFromTop ? "text-primary" : "text-white"}/>
            {
            mobileMenuOpen && 
            <motion.ul 
              className='px-2 pb-3 space-y-1 sm:px-3'
            >
                {menuItems.map((item, i) =>{
                  const {title, to} = item;
                  return(
                    <MobileNavItem key={i} to={to} i={i} isOpen={mobileMenuOpen} scrolledFromTop={scrolledFromTop} onClick={toggleMobileMenu}>{title}</MobileNavItem>
                  )
                })}

            </motion.ul>
            }
        </motion.div>
      </AnimatePresence>
    </nav>
  )
}

const NavItem = ({to, children, scrolledFromTop}) =>{
    return(
        <Link to={to} offset={-64} spy={true} smooth={true} duration={500} className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium ease-in-out duration-300  ${scrolledFromTop ? "text-default hover:text-primary" : "text-inverted hover:text-white"} `}>
        {children}
        </Link>
    )
}

const MobileNavItem = ({to, children, scrolledFromTop, i, onClick}) =>{
  return(
    <motion.li
      initial={{ opacity: 0, x:100 }}
      whileInView={{ opacity: 1, x:0 }}
      transition={{type:'spring', duration: 1, bounce: 0.3, delay: i * 0.025}}
      whileTap={{ scale: 0.95 }}
    >
      <Link onClick={onClick} to={to} offset={-272} spy={true} smooth={true} duration={500} className={`block cursor-pointer px-3 py-2 rounded-md text-sm font-medium  ${scrolledFromTop ? "text-default hover:text-primary" : "text-inverted hover:text-white"} `}>
      {children}
      </Link>
    </motion.li>
  )
}

