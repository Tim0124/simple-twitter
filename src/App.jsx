import './App.css'
import Router from 'Router'
import { ModalContextProvider } from 'context/ModalContext'
import { OtherUserContextProvider } from 'context/OtherUserContext'
import { SideBarContextProvider } from 'context/SideBarContext'
import { UserTabContextProvider } from 'context/UserTabContext'
import { GetFollowContextProvider } from 'context/FollowContext'
import { LoadedProvider } from 'context/LoadedContext'

function App() {
	return (
		<LoadedProvider>
			<GetFollowContextProvider>
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
			</GetFollowContextProvider>
		</LoadedProvider>
	)
}

export default App
