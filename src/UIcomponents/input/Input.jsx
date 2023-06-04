import style from './Input.module.scss'

export default function Input({name, placeholder}) {
return (
  <label>
    <div className={`${style.inputTitle}`}>{name}</div>
    <input placeholder={placeholder}></input>
  </label>
)
}