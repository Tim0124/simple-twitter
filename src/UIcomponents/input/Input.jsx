import style from './Input.module.scss'
import clsx from 'clsx'

export default function Input({
	type,
	label,
	value,
	placeholder,
	onChange,
	isError,
}) {
	return (
		<label className={style.inputContainer}>
			<div className={`${style.inputTitle}`}>{label}</div>
			<input
				className={clsx(style.inputUI, { [style.errorInput]: isError })}
				type={type || 'text'}
				value={value || ''}
				placeholder={placeholder || ''}
				onChange={onChange}
			></input>
		</label>
	)
}
