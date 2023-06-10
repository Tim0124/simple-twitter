import style from './AdminTweetsList.module.scss'
import AdminTweetsItem from './AdminTweetsItem'
import Sidebar from 'UIcomponents/layouts/Sidebar'

const data = [
	{
		id: 1,
		name: 'Apple',
		avatar: 'https://picsum.photos/300/300?text=1',
		account: '@apple',
		content:
			'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
		time: '6小時',
	},
	{
		id: 2,
		name: 'Apple',
		avatar: 'https://picsum.photos/300/300?text=1',
		account: '@apple',
		content:
			'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
		time: '6小時',
	},
	{
		id: 3,
		name: 'Apple',
		avatar: 'https://picsum.photos/300/300?text=1',
		account: '@apple',
		content:
			'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
		time: '6小時',
	},
	{
		id: 4,
		name: 'Apple',
		avatar: 'https://picsum.photos/300/300?text=1',
		account: '@apple',
		content:
			'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
		time: '6小時',
	},
	{
		id: 5,
		name: 'Apple',
		avatar: 'https://picsum.photos/300/300?text=1',
		account: '@apple',
		content:
			'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
		time: '6小時',
	},
	{
		id: 6,
		name: 'Apple',
		avatar: 'https://picsum.photos/300/300?text=1',
		account: '@apple',
		content:
			'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
		time: '6小時',
	},
	{
		id: 7,
		name: 'Apple',
		avatar: 'https://picsum.photos/300/300?text=1',
		account: '@apple',
		content:
			'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
		time: '6小時',
	},
	{
		id: 8,
		name: 'Apple',
		avatar: 'https://picsum.photos/300/300?text=1',
		account: '@apple',
		content:
			'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
		time: '6小時',
	},
	{
		id: 9,
		name: 'Apple',
		avatar: 'https://picsum.photos/300/300?text=1',
		account: '@apple',
		content:
			'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
		time: '6小時',
	},
	{
		id: 10,
		name: 'Apple',
		avatar: 'https://picsum.photos/300/300?text=1',
		account: '@apple',
		content:
			'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
		time: '6小時',
	},
]

export default function AdminTweetsList() {
	return (
		<div className={`${style.adminTweetsWrapper}`}>
			<div className={`${style.adminTweetsContainer}`}>
				<div className={`${style.adminTweetsHeader}`}>推文清單</div>
				<div className={`${style.adminTweetsItem}`}>
					{data.map((data) => (
						<AdminTweetsItem key={data.id} {...data} />
					))}
				</div>
			</div>
		</div>
	)
}
