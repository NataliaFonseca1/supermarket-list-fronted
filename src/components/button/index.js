import './index.css';

export const Button = ({children, onClick}) => {
  return (
    <button onClick={onClick}  className='button-container'>{children}</button>
  )
}