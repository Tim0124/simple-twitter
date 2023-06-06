import MainHeader from './MainHeader'
import style from './ModalPostTweet.module.scss'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import ModalContent from '../../components/modal/ModalContent'

export default function PostTweet () {
  return (
    <div className={`${style.postTweetContainer}`}>
      <MainHeader title='首頁' arrow={<Arrow/>}/>
      <ModalContent/>
    </div>
  )
}