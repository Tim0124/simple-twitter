import style from './Loader.module.scss'

export default function Loader() {
	return (
		<div className={style.lds_ring}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}
