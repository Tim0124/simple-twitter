import { useState } from 'react'
import style from './MainTweets.module.scss'
import MainTweetsContent from './MainTweetsContent'
import AdminTweetsItem from 'components/admin/AdminTweetsItem'
import Sidebar from 'UIcomponents/layouts/Sidebar'
import { Outlet } from 'react-router-dom'
import Layout from 'UIcomponents/layouts/Layout'
import MainContent from './MainContent'
import MainHeader from './MainHeader'

const dummyData = [
  {
    id: '1',
    name: 'Pizza Hut1',
    avatar: 'https://picsum.photos/300/300?text=1',
    account: `@Pizza Hut1`,
    content: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
    time:3,
    quantity:20,
    likeQuantity:12,
  },
  {
    id: '2',
    name: 'Pizza Hut1',
    avatar: 'https://picsum.photos/300/300?text=2',
    account: `@Pizza Hut1`,
    content: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
    time:1,
    quantity:20,
    likeQuantity:12,
  },
  {
    id: '3',
    name: 'Pizza Hut1',
    avatar: 'https://picsum.photos/300/300?text=3',
    account: `@Pizza Hut1`,
    content: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
    time:2,
    quantity:20,
    likeQuantity:12,
  },
  {
    id: '4',
    name: 'Pizza Hut1',
    avatar: 'https://picsum.photos/300/300?text=4',
    account: `@Pizza Hut1`,
    content: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
    time:2,
    quantity:20,
    likeQuantity:12,
  },
  {
    id: '5',
    name: 'Pizza Hut1',
    avatar: 'https://picsum.photos/300/300?text=5',
    account: `@Pizza Hut1`,
    content: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
    time:2,
    quantity:20,
    likeQuantity:12,
  },
  {
    id: '6',
    name: 'Pizza Hut1',
    avatar: 'https://picsum.photos/300/300?text=6',
    account: `@Pizza Hut1`,
    content: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
    time:2,
    quantity:20,
    likeQuantity:12,
  },
  {
    id: '7',
    name: 'Pizza Hut1',
    avatar: 'https://picsum.photos/300/300?text=7',
    account: `@Pizza Hut1`,
    content: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
    time:2,
    quantity:20,
    likeQuantity:12,
  },
  {
    id: '8',
    name: 'Pizza Hut1',
    avatar: 'https://picsum.photos/300/300?text=8',
    account: `@Pizza Hut1`,
    content: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
    time:2,
    quantity:20,
    likeQuantity:12,
  },
  {
    id: '9',
    name: 'Pizza Hut1',
    avatar: 'https://picsum.photos/300/300?text=9',
    account: `@Pizza Hut1`,
    content: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
    time:2,
    quantity:20,
    likeQuantity:12,
  },
  {
    id: '10',
    name: 'Pizza Hut1',
    avatar: 'https://picsum.photos/300/300?text=11',
    account: `@Pizza Hut1`,
    content: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
    time:2,
    quantity:20,
    likeQuantity:12,
  },
]



export default function MainTweets ({onTweetClick}) {
  
  return (
    <div className={`${style.tweetsContainer}`}>
      <header className={`${style.tweetsHeader}`}>
        <MainHeader/>
      </header>
      <div className={`${style.tweetPostArea}`}>
        <MainContent onClick={onTweetClick}/>
      </div>
      <main className={`${style.mainTweets}`}>
        {dummyData.map((data) => (
          <MainTweetsContent key={data.id} {...data}/>
        ))}
      </main>
    </div>
  )
}