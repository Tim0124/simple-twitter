import style from './SideItem.module.scss'
import { Link } from 'react-router-dom'

export default function SideItem({
	styleName,
	itemName,
	customName,
	page,
	onClick,
	onStepClick,
	iconName
}) {
	return (
		<>
			<Link to={page} className={`${style[customName]}`} onClick={onClick}>
				<div className={`${style.itemIcon}`} onClick={onStepClick}>
					<img className={`${style[styleName]}`} alt={styleName} />
					<div className={`${style.itemTitle}`}>
						<div className={`${style[iconName]}`}>{itemName}</div>
					</div>
				</div>
			</Link>
		</>
	)
}
