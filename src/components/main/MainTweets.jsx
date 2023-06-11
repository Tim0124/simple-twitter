import { useState, useEffect } from 'react'
import style from './MainTweets.module.scss'
import MainTweetsContent from './MainTweetsContent'
import AdminTweetsItem from 'components/admin/AdminTweetsItem'
import Sidebar from 'UIcomponents/layouts/Sidebar'
import { Outlet } from 'react-router-dom'
import Layout from 'UIcomponents/layouts/Layout'
import MainContent from './MainContent'
import { getTweets } from '../../api/allAPI'
import MainHeader from './MainHeader'
import { useNavigate } from 'react-router-dom'
import { checkPermission } from 'api/auth'
import followingAPI from 'api/followingAPI'
import likeAPI from 'api/likeAPI'


export default function MainTweets({ onTweetClick }) {
  const [tweets, setTweets] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      try {
        const responce = await getTweets.get('/')
        const tweetData = responce.data
        setTweets(tweetData)
      } catch (error) {
        console.log('Failed to tweets:', error)
      }
    })();
  }, [])

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        navigate('/login');
      }
      const result = await checkPermission(authToken);
      if (!result) {
        navigate('/login');
      }
    };

    checkTokenIsValid();
  }, [navigate]);

  const handleCurrentClick = (id) => {
    followingAPI.getCurrentUser(id).then((response) => {
      console.log(response)
    })
  }

  return (
    <div className={`${style.tweetsContainer}`}>
      <header className={`${style.tweetsHeader}`}>
        <MainHeader />
      </header>
      <div className={`${style.tweetPostArea}`}>
        <MainContent onClick={onTweetClick} />
      </div>
      <main className={`${style.mainTweets}`}>
        {tweets.map((data) => (
          <MainTweetsContent
            id={data.UserId}
            key={data.id}
            name={data.User.name}
            avatar={data.User.avatar}
            account={data.User.account}
            content={data.description}
            time={data.relativeTimeFromNow}
            isLikeQuantity={data.likesCount}
            quantity={data.repliesCount}
            likeQuantity={data.likesCount}
            onCurrentClick={handleCurrentClick}/>
        ))}
      </main>
    </div>
  )
}