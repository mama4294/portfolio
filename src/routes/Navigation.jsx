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
        <div className='sm:hidden mx-auto ml-auto'>
                <Hamburger isOpen={mobileMenuOpen} onClick={toggleMobileMenu} color={scrolledFromTop ? "text-primary" : "text-white"}/>
                {mobileMenuOpen && 
                <ul className='px-2 pb-3 space-y-1 sm:px-3'>
                  <MobileNavItem to="home" scrolledFromTop={scrolledFromTop} onClick={toggleMobileMenu}>Home</MobileNavItem>
                  <MobileNavItem to="projects" scrolledFromTop={scrolledFromTop} onClick={toggleMobileMenu}>Projects</MobileNavItem>
                  <MobileNavItem to="skills" scrolledFromTop={scrolledFromTop} onClick={toggleMobileMenu}>Skills</MobileNavItem>
                  <MobileNavItem to="about" scrolledFromTop={scrolledFromTop} onClick={toggleMobileMenu}>About</MobileNavItem>
                  <MobileNavItem to="contact" scrolledFromTop={scrolledFromTop} onClick={toggleMobileMenu}>Contact</MobileNavItem>
                </ul>}
            </div>
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

const MobileNavItem = ({to, children, scrolledFromTop, onClick}) =>{
  return(
      <Link onClick={onClick} to={to} offset={-272} spy={true} smooth={true} duration={500} className={`block cursor-pointer px-3 py-2 rounded-md text-sm font-medium ease-in-out duration-300  ${scrolledFromTop ? "text-default hover:text-primary" : "text-inverted hover:text-white"} `}>
      {children}
      </Link>
  )
}

