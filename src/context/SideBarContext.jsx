import { createContext, useState } from 'react'

export const StepContext = createContext()
export const ChangeStepContext = createContext()

export function SideBarContextProvider({ children }) {
	const [step, setStep] = useState()
	const handleChangeStep = (pathname) => {
		setStep(pathname)
	}

	return (
		<StepContext.Provider value={step}>
			<ChangeStepContext.Provider value={handleChangeStep}>
				{children}
			</ChangeStepContext.Provider>
		</StepContext.Provider>
	)
}
