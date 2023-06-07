import UserNavbar from './UserNavbar'
import style from './UserLike.module.scss'
import UserLikeContent from './UserLikeContent'

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


export default function UserLike () {
  return (
    <div className={`${style.userTweetsContainer}`}>
      <UserNavbar/>
      <section className={`${style.UserTweetsContent}`}>
        {dummyData.map((data) => (
          <UserLikeContent key={data.id} {...data}/>
        ))}
      </section>
    </div>
  )
}