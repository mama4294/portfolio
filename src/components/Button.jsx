export const Button = ({ children, selected, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`pointer px-4 py-2 m-2 rounded-md ${
          selected ? "bg-primary text-white" : "text-base"
        }`}
      >
        {children}
      </button>
    );
  };