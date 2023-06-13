import './App.scss'

import Router from 'Router'
import { ModalContextProvider } from 'context/ModalContext'
import { OtherUserContextProvider } from 'context/OtherUserContext'
import { SideBarContextProvider } from 'context/SideBarContext'
import { UserTabContextProvider } from 'context/UserTabContext'

function App() {
	return (
		<OtherUserContextProvider>
			<UserTabContextProvider>
				<SideBarContextProvider>
					<ModalContextProvider>
						<div className='App'>
							<Router />
						</div>
					</ModalContextProvider>
				</SideBarContextProvider>
			</UserTabContextProvider>
		</OtherUserContextProvider>
	)
}

export default App
