import style from './ModalBlackDrop.module.scss'

export default function ModalBlackDrop({ onClick }) {
	return <div className={`${style.modalBackground}`} onClick={onClick}></div>
}
