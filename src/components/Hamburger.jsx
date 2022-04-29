export const Hamburger = ({isOpen, color, ...otherProps}) => {


  return (
    <button className="pointer ease-in-out duration-300" {...otherProps}>
        {isOpen ? (
            <svg 
            className={`h-8 w-8 ${color}`}
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
                <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/>
             </svg>
        )
        :
            <svg
            className={`h-8 w-8 ${color}`}
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
        }

    </button>
  )
}
