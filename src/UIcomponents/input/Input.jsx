import style from './Input.module.scss'

export default function Input({name, placeholder}) {
return (
  <label>
    <div className={`${style.inputTitle}`}>{name}</div>
    <input className={`${style.inputUI}`} placeholder={placeholder}></input>
  </label>
  )
}