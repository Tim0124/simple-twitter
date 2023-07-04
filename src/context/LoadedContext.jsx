import { createContext, useEffect, useState } from 'react'

export const AvatarContext = createContext()
export const TweetsContext = createContext()

export const LoadedProvider = ({ children }) => {
	const [isAvatarLoaded, setIsAvatarLoaded] = useState(false)
	const [isTweetsLoaded, setIsTweetsLoaded] = useState(false)

	return (
		<AvatarContext.Provider value={{ isAvatarLoaded, setIsAvatarLoaded }}>
			<TweetsContext.Provider value={{ isTweetsLoaded, setIsTweetsLoaded }}>
				{children}
			</TweetsContext.Provider>
		</AvatarContext.Provider>
	)
}
