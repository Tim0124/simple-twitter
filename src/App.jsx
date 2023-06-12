import './App.scss'

import Router from 'Router'
import { ModalContextProvider } from 'context/ModalContext'
import { SideBarContextProvider } from 'context/SideBarContext'
import { UserTabContextProvider } from 'context/UserTabContext'

function App() {
	return (
		<UserTabContextProvider>
			<SideBarContextProvider>
				<ModalContextProvider>
					<div className='App'>
						<Router />
					</div>
				</ModalContextProvider>
			</SideBarContextProvider>
		</UserTabContextProvider>
	)
}

export default App
