import style from './Button.module.scss'

export default function Button({ text, size, onRegister }) {
  
  return (
    <>
      <button className={`${style.button} ${style[size]}`} onClick={onRegister}>{text}</button>
    </>
  )
}