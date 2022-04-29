export const Button = ({ children, selected, onClick, type }) => {

    const getStyle = (type) => {
        let style = ''
        switch (type) {
          case 'selector':
            style = `pointer px-4 py-2 m-2 rounded-md ${
                selected ? "bg-primary text-white" : "text-base"
              }`
            break
            case 'form':
            style = `pointer px-4 py-2 my-2 rounded-md bg-primary text-white w-full border-white border-2  hover:bg-white hover:text-primary hover:border-slate-300`
            break
          default:
            style = `pointer px-4 py-2 rounded-md bg-primary text-white`
        }
        return style
      }

    const style = getStyle(type)

    return (
      <button
        onClick={onClick}
        className={style}
      >
        {children}
      </button>
    );
  };