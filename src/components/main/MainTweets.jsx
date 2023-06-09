import { useState, useEffect } from 'react'
import style from './MainTweets.module.scss'
import MainTweetsContent from './MainTweetsContent'
import AdminTweetsItem from 'components/admin/AdminTweetsItem'
import Sidebar from 'UIcomponents/layouts/Sidebar'
import { Outlet } from 'react-router-dom'
import Layout from 'UIcomponents/layouts/Layout'
import MainContent from './MainContent'
import { Tweets } from '../../api/allAPI'


export default function MainTweets() {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    (async () => {
      try{
        const responce = await Tweets.get('/')
        const tweetData = responce.data
        setTweets(tweetData)
      }catch(error){
        console.log('fail')
      }
    })();
  },[])

  return (
    <div className={`${style.tweetsContainer}`}>
      <header className={`${style.tweetsHeader}`}>
        <nav className={`${style.tweetsNavbar}`}>
          <div className={`${style.navTitle}`}>
            <h1 className={`${style.titleText}`}>首頁</h1>
          </div>
        </nav>
      </header>
      <div className={`${style.tweetPostArea}`}>
        <MainContent />
      </div>
      <main className={`${style.mainTweets}`}>
        {tweets.map((data) => (
          <MainTweetsContent 
            key={data.id}
            name={data.User.name}
            avatar={data.User.avatar}
            account={data.User.account}
            content={data.description}
            time={data.relativeTimeFromNow}
            quantity={data.repliesCount}
            likeQuantity={data.likesCount}/>
        ))}
      </main>
    </div>
  )
}