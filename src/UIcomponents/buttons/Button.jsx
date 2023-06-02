import './Button.scss'

export default function Button ({text, size}) {
  return (
    <>
      <button className={`button ${size}`}>{text}</button>
    </>
  )
}