import PopularUser from './PopularUser'
import style from './PopularUserList.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'


export const data = ([
  {
    id: '1',
    name: 'Pizza Hut1',
    avatar: 'https://picsum.photos/300/300?text=1',
    account: `@Pizza Hut1`,
    isFollow: true,
  },
  {
    id: '2',
    name: 'Pizza Hut2',
    avatar: 'https://picsum.photos/300/300?text=1',
    account: `@Pizza Hut2`,
    isFollow: true,
  },
  {
    id: '3',
    name: 'Pizza Hut2',
    avatar: 'https://picsum.photos/300/300?text=1',
    account: `@Pizza Hut2`,
    isFollow: false,
  },
  {
    id: '4',
    name: 'Pizza Hut2',
    avatar: 'https://picsum.photos/300/300?text=1',
    account: `@Pizza Hut2`,
    isFollow: false,
  },
  {
    id: '5',
    name: 'Pizza Hut12345678',
    avatar: 'https://picsum.photos/300/300?text=1',
    account: `@Pizza Hut2`,
    isFollow: false,
  },
  {
    id: '6',
    name: 'Pizza Hut2',
    avatar: 'https://picsum.photos/300/300?text=1',
    account: `@Pizza Hut2`,
    isFollow: false,
  },
  {
    id: '7',
    name: 'Pizza Hut2',
    avatar: 'https://picsum.photos/300/300?text=1',
    account: `@Pizza Hut2`,
    isFollow: false,
  },
  {
    id: '8',
    name: 'Pizza Hut2',
    avatar: 'https://picsum.photos/300/300?text=1',
    account: `@Pizza Hut2`,
    isFollow: false,
  }
])

export default function PopularUserList() {
  return (
    <div className={`${style.popularUserListContainer}`}>
      <h4 className={`${style.popularUserListHeader}`}>推薦跟隨</h4>
      <div className={`${style.popularUserList}`}>
        {data.map((data) => (
          <PopularUser key={data.id} {...data}/>
        ))}
      </div>
    </div>
  )
}

