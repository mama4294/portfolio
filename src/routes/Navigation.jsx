import { useState } from 'react';
import { Link, animateScroll as scroll} from 'react-scroll'
import { Hamburger } from '../components/Hamburger';

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
        // console.log(window.scrollY)
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
                <NavItem to="home" scrolledFromTop={scrolledFromTop}>Home</NavItem>
                <NavItem to="projects" scrolledFromTop={scrolledFromTop}>Projects</NavItem>
                <NavItem to="skills" scrolledFromTop={scrolledFromTop}>Skills</NavItem>
                <NavItem to="about" scrolledFromTop={scrolledFromTop}>About</NavItem>
                <NavItem to="contact" scrolledFromTop={scrolledFromTop}>Contact</NavItem>
                </ul>
            </div>
        </div>
        {/* Mobile Menu */}
        <div className='sm:hidden mx-auto p-4 h-16 ml-auto'>
                <Hamburger isOpen={mobileMenuOpen} onClick={toggleMobileMenu} color={scrolledFromTop ? "text-primary" : "text-white"}/>
        </div>
    </nav>
  )
}

const NavItem = ({to, children, scrolledFromTop}) =>{
    return(
        <Link to={to} spy={true} smooth={true} offset={50} duration={500} className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium ease-in-out duration-300  ${scrolledFromTop ? "text-default hover:text-primary" : "text-inverted hover:text-white"} `}>
        {children}
        </Link>
    )
}

