import style from './AdminTweetsCardsList.module.scss'
import AdminTweetsCard from './AdminTweetsCards'
import Sidebar from 'UIcomponents/layouts/Sidebar'

const data = [
  {
    id: 1,
    avatar: 'https://picsum.photos/300/300?text=1',
    background: 'https://picsum.photos/300/300?text=1',
    name: 'John Doe',
    account: '@heyjone',
    tweet: 999,
    like: 20,
    following: 34,
    follower: 59,
  },
  {
    id: 2,
    avatar: 'https://picsum.photos/300/300?text=1',
    background: 'https://picsum.photos/300/300?text=1',
    name: 'John Doe',
    account: '@heyjone',
    tweet: 999,
    like: 20,
    following: 34,
    follower: 59,
  },
  {
    id: 3,
    avatar: 'https://picsum.photos/300/300?text=1',
    background: 'https://picsum.photos/300/300?text=1',
    name: 'John Doe',
    account: '@heyjone',
    tweet: 999,
    like: 20,
    following: 34,
    follower: 59,
  },
  {
    id: 4,
    avatar: 'https://picsum.photos/300/300?text=1',
    background: 'https://picsum.photos/300/300?text=1',
    name: 'John Doe',
    account: '@heyjone',
    tweet: 999,
    like: 20,
    following: 34,
    follower: 59,
  },
  {
    id: 5,
    avatar: 'https://picsum.photos/300/300?text=1',
    background: 'https://picsum.photos/300/300?text=1',
    name: 'John Doe',
    account: '@heyjone',
    tweet: 999,
    like: 20,
    following: 34,
    follower: 59,
  },
  {
    id: 6,
    avatar: 'https://picsum.photos/300/300?text=1',
    background: 'https://picsum.photos/300/300?text=1',
    name: 'John Doe',
    account: '@heyjone',
    tweet: 999,
    like: 20,
    following: 34,
    follower: 59,
  },
  {
    id: 7,
    avatar: 'https://picsum.photos/300/300?text=1',
    background: 'https://picsum.photos/300/300?text=1',
    name: 'John Doe',
    account: '@heyjone',
    tweet: 999,
    like: 20,
    following: 34,
    follower: 59,
  },
  {
    id: 8,
    avatar: 'https://picsum.photos/300/300?text=1',
    background: 'https://picsum.photos/300/300?text=1',
    name: 'John Doe',
    account: '@heyjone',
    tweet: 999,
    like: 20,
    following: 34,
    follower: 59,
  },
  {
    id: 9,
    avatar: 'https://picsum.photos/300/300?text=1',
    background: 'https://picsum.photos/300/300?text=1',
    name: 'John Doe',
    account: '@heyjone',
    tweet: 999,
    like: 20,
    following: 34,
    follower: 59,
  },
  {
    id: 10,
    avatar: 'https://picsum.photos/300/300?text=1',
    background: 'https://picsum.photos/300/300?text=1',
    name: 'John Doe',
    account: '@heyjone',
    tweet: 999,
    like: 20,
    following: 34,
    follower: 59,
  },
]

export default function AdminTweetsCardList() {
  return (
    <div className={`${style.adminTweetsCardListWrapper}`}>
      <div className={`${style.adminTweetsCardListSidebar}`}>
        <Sidebar />
      </div>
      <div className={`${style.adminTweetsCardListContainer}`}>
        <div className={`${style.adminTweetsCardListHeader}`}>使用者列表</div>
        <div className={`${style.adminTweetsCardListItem}`}>
          {data.map((data) => (
            <AdminTweetsCard key={data.id} {...data} />
          ))}
        </div>
      </div>
    </div>
  )
}