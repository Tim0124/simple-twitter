import style from './UserFollower.module.scss'
import FollowTab from 'UIcomponents/tabs/FollowTab'
import UserFollowerContent from './UserFollowContent'

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
    isFollow:false,
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
    isFollow:false,
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
    isFollow:false,
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
    isFollow:false,
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
    isFollow:false,
  },
]

export default function UserFollower () {
  return (
    <div className={`${style.userFollowerContainer}`}>
      <FollowTab/>
      <section className={`${style.userFollowerContent}`}>
        {dummyData.map((data) => (
          <UserFollowerContent key={data.id} {...data}/>
        ))}
      </section>
    </div>
  )
}