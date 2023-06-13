import { createContext, useState } from 'react'

export const TabChangeContext = createContext()
export const ChangeTabContext = createContext()

export function UserTabContextProvider({ children }) {
	const [tab, setTab] = useState()
	const handleChangeTab = (pathname) => {
		setTab(pathname)
	}
 
	return (
		<TabChangeContext.Provider value={tab}>
			<ChangeTabContext.Provider value={handleChangeTab}>
				{children}
			</ChangeTabContext.Provider>
		</TabChangeContext.Provider>
	)
}
