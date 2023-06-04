import style from './Button.module.scss'

export default function Button ({text, size}) {
  return (
    <>
      <button className={`${style.button} ${style[size]}`}>{text}</button>
    </>
  )
}