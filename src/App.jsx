import './App.scss'

import Router from 'Router'
import { ModalContextProvider } from 'context/ModalContext'
import { SideBarContextProvider } from 'context/SideBarContext'

function App() {
	return (
		<SideBarContextProvider>
			<ModalContextProvider>
				<div className='App'>
					<Router />
				</div>
			</ModalContextProvider>
		</SideBarContextProvider>
	)
}

export default App
