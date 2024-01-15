import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ContextProvider from './context/Context';
import HeaderContainer from './components/Header/HeaderContainer';
import FooterContainer from './components/Footer/FooterContainer';
import NoteListContainer from './components/NoteList/NoteListContainer';
import NoteFormContainer from './components/NoteForm/NoteFormContainer';

import './App.css';
function App() {
	return (
		<BrowserRouter>
			<ContextProvider>
				<Routes>
					<Route
						path='*'
						element={
							<>
								<HeaderContainer />
								<Routes>
									<Route index element={<NoteListContainer option={'all'} />} />
									<Route
										path='/active'
										element={<NoteListContainer option={'active'} />}
									/>
									<Route
										path='/archive'
										element={<NoteListContainer option={'archive'} />}
									/>
									<Route path='/tags/:tag' element={<NoteListContainer />} />
									<Route path='/*' element={<h1>404 - No route </h1>} />
								</Routes>
								<FooterContainer />
							</>
						}
					/>
				</Routes>
			</ContextProvider>
		</BrowserRouter>
	);
}

export default App;
