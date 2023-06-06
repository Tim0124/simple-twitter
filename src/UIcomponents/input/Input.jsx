import style from './Input.module.scss'

export default function Input({type, label, value, placeholder, onChange}) {
return (
  <label>
    <div className={`${style.inputTitle}`}>{label}</div>
    <input 
      type={type || 'text'}
      value={value || ''}
      placeholder={placeholder || ''}
      onChange={(event) => onChange?.(event.target.value)}></input>
  </label>
)
}