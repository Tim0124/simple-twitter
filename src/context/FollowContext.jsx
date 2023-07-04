import { createContext, useState } from 'react'

export const GetRenderContext = createContext()
export const SetRenderContext = createContext()

export function GetFollowContextProvider({ children }) {
	const [render, setRender] = useState('init')
	console.log(render)
	const handleRender = (value) => {
		setRender(value)
	}
	return (
		<GetRenderContext.Provider value={render}>
			<SetRenderContext.Provider value={handleRender}>
				{children}
			</SetRenderContext.Provider>
		</GetRenderContext.Provider>
	)
}
