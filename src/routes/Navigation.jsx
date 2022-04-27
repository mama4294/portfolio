import { useState } from 'react';
import { Link, animateScroll as scroll} from 'react-scroll'

export const Navigation = () => {
    const [scrolledFromTop, setScrolledFromTop] = useState(false);

    const checkScrollPosition = () => {
        if (window.scrollY >= 50) {
          setScrolledFromTop(true);
        } else {
          setScrolledFromTop(false);
        }
      };

    //Determine if the nav should change colors on scroll
  window.addEventListener("scroll", checkScrollPosition);

  return (
    <nav className={`fixed z-50 top-0 w-full ease-in-out duration-300
    ${scrolledFromTop ? "bg-white shadow-lg" : "bg-primary"}`}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <ul>
                <NavItem to="home" scrolledFromTop={scrolledFromTop}>Home</NavItem>
                <NavItem to="skills" scrolledFromTop={scrolledFromTop}>Skills</NavItem>
                <NavItem to="projects" scrolledFromTop={scrolledFromTop}>Projects</NavItem>
                <NavItem to="about" scrolledFromTop={scrolledFromTop}>About</NavItem>
                <NavItem to="contact" scrolledFromTop={scrolledFromTop}>Contact</NavItem>
                </ul>
            </div>
        </div>
    </nav>
  )
}

const NavItem = ({to, children, scrolledFromTop}) =>{
    return(
        <Link to={to} spy={true} smooth={true} offset={50} duration={500} className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium ease-in-out duration-300  ${scrolledFromTop ? "text-muted hover:text-default" : "text-inverted hover:text-white"} `}>
        {children}
        </Link>
    )
}

