import style from './Button.module.scss'

export default function Button({ text, size, onClick }) {
  
  return (
    <>
      <button className={`${style.button} ${style[size]}`} onClick={onClick}>{text}</button>
    </>
  )
}