import './index.css';

export const Button = ({children, onClick, variant, icon}) => {
  return (
    <button onClick={onClick}  
    className={`button-container ${
      variant === "outline" ? "outline" : "main"

    }`}
    >
      {
        icon && <img src={`/imagens/${icon}.svg`} className="button-icon" alt={`supermarket_icon_${icon}`} />
      }
      {children}
      </button>
  )
}