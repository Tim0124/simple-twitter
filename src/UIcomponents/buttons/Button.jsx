import style from './Button.module.scss'

export default function Button({ text, size, onClick, onDisabled }) {
	return (
		<>
			<button className={`${style.button} ${style[size]}`} onClick={onClick} disabled={onDisabled}>
				{text}
			</button>
		</>
	)
}
