import './Input.scss'

export default function Input({name, placeholder}) {
return (
  <label>
    <div className='inputTitle'>{name}</div>
    <input placeholder={placeholder}></input>
  </label>
)
}