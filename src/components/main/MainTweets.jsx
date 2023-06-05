import { useState } from 'react'
import style from './MainTweets.module.scss'
import MainTweetsContent from './MainTweetsContent'
const dummyData = [
  {
    id: '1',
    name: 'Pizza Hut1',
    avatar: 'https://picsum.photos/300/300?text=1',
    account: `@Pizza Hut1`,
    content: '1234567890abcdefghijklmonp',
    at:3,
    quantity:20,
    likeQuantity:12,
  },
  {
    id: '2',
    name: 'Pizza Hut1',
    avatar: 'https://picsum.photos/300/300?text=1',
    account: `@Pizza Hut1`,
    content: '1234567890abcdefghijklmonp',
    at:1,
    quantity:20,
    likeQuantity:12,
  },
  {
    id: '3',
    name: 'Pizza Hut1',
    avatar: 'https://picsum.photos/300/300?text=1',
    account: `@Pizza Hut1`,
    content: '1234567890abcdefghijklmonp',
    at:2,
    quantity:20,
    likeQuantity:12,
  },
]



export default function MainTweets () {
  
  return (
    <div>
      <header className={`${style.tweetsHeader}`}>
        <nav className={`${style.tweetsNavbar}`}>
          <div className={`${style.navAvatarItem}`}><img className={`${style.navAvatar}`} src='https://picsum.photos/300/300?text=1' alt="" /></div>
          <div className={`${style.navTitle}`}>
            <h1 className={`${style.titleText}`}>首頁</h1>
          </div>
        </nav>
      </header>
      <main className={`${style.mainTweets}`}>
        {dummyData.map((data) => (
          <MainTweetsContent key={data.id} {...data}/>
        ))}
      </main>
    </div>
  )
}