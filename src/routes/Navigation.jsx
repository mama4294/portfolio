import { Link, animateScroll as scroll} from 'react-scroll'

export const Navigation = () => {
  return (
    <nav className="fixed z-50 top-0 w-full ease-in-out duration-300 shadow-sm bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <ul>
                <NavItem to="home">Home</NavItem>
                <NavItem to="skills">Skills</NavItem>
                <NavItem to="projects">Projects</NavItem>
                <NavItem to="about">About</NavItem>
                <NavItem to="contact">Contact</NavItem>
                </ul>
            </div>
        </div>
    </nav>
  )
}

const NavItem = ({to, children}) =>{
    return(
        <Link to={to} spy={true} smooth={true} offset={50} duration={500} className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium ease-in-out duration-300 text-muted hover:text-default">
        {children}
        </Link>
    )
}

