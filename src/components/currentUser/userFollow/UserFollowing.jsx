import style from './UserFollowing.module.scss'
import FollowTab from 'UIcomponents/tabs/FollowTab'
import UserFollowerContent from './UserFollowContent'
import UserInfo from 'UIcomponents/layouts/UserInfo'
import UserInfoHeader from 'UIcomponents/layouts/UserInfoHeader'

const data = [
  {
    id: 1,
    avatar: 'https://picsum.photos/300/300?text=2',
    background: 'https://picsum.photos/300/300?text=1',
    name: 'John Doe',
    account: '@heyjone',
    tweet: 25,
    following: 34,
    follower: 59,
    content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
  }
]

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
    isFollow:true,
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
    isFollow:true,
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
    isFollow:true,
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
    isFollow:true,
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
    isFollow:true,
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
    isFollow:true,
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
    isFollow:true,
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
    isFollow:true,
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
    isFollow:true,
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
    isFollow:true,
  },
]

export default function UserFollowing () {
  return (
    <div className={`${style.userFollowingContainer}`}>
      <div className={`${style.userInfoHeaderContainer}`}>
        <UserInfoHeader 
          name={data[0].name}
          tweet={data[0].tweet}
        />
      </div>
      <div className={`${style.userInfoContainer}`}>
        <UserInfo/>
      </div>
      <FollowTab/>
      <section className={`${style.userFollowingContent}`}>
        {dummyData.map((data) => (
          <UserFollowerContent key={data.id} {...data}/>
        ))}
      </section>
    </div>
  )
}