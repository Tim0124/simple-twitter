import PopularUser from './PopularUser'
import style from './PopularUserList.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import followingAPI from 'api/followingAPI'
import { useEffect, useState } from 'react'

export default function PopularUserList() {
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const responce = await followingAPI.getTopFollower()
        const followerData = responce.data
        setFollowers(followerData)
      } catch (error) {
        console.log('Failed to follower:', error)
      }
    })();
  }, [])

  return (
    <div className={`${style.popularUserListContainer}`}>
      <h4 className={`${style.popularUserListHeader}`}>推薦跟隨</h4>
      <div className={`${style.popularUserList}`}>
        {followers.map((follower) => (
          <PopularUser 
            key={follower.id} 
            id={follower.id}
            name={follower.name}
            avatar={follower.avatar}
            account={follower.account}
          />
        ))}
      </div>
    </div>
  )
}
