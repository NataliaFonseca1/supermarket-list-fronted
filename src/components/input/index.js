import './index.css'

export const Input = ({label, placeholder, value, onChange, type}) => {
  return(
    <div className='input-container'>
    
      <span className="input-label">{label}</span>
      <input onChange={(e) => onChange(e.target.value)}
      value={value}
       className='input'
        placeholder={placeholder}
        type={ type || 'text'}
        />

    </div>


  )
};

export default Input;