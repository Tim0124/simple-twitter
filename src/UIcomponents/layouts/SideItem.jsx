import style from './SideItem.module.scss'
import { Link } from 'react-router-dom'

export default function SideItem ({styleName, itemName, customName, page}) {
  return (
    <>
      <Link to={page} className={`${style[customName]}`}>
        <div className={`${style.itemIcon}`}>
          <img className={`${style[styleName]}`} alt={styleName} />
          <div className={`${style.itemTitle}`}>
            <div>{itemName}</div>
          </div>
        </div>
      </Link>
    </>
  )
}