import { ThemeProvider } from 'styled-components';
import {
	Switch,
	Route,
	BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import WrongPath from 'components/wrongPath/wrongPath';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import { useState, useEffect } from 'react'

const App = () => {

	const [questsListData1, setQuestsListData1] = useState([]); // Состояние активной вкладки, по умолчанию []

	useEffect(() => {
		fetch(`http://localhost:3001/quests`)
			.then((response) => response.json())
			.then((json) => {
				setQuestsListData(json)
			})
			.catch((error) => {
				console.error('Error fetch data exchangeRate:', error)
			});
	}, [])

	return (
		<ThemeProvider theme={appTheme}>

			<S.GlobalStyle />
			<Router>
				<Switch>
					<Route exact path="/quest_:id">
						<DetailedQuest questsListData={questsListData1} />
					</Route>
					<Route exact path="/contacts">
						<Contacts />
					</Route>
					<Route exact path="/wrongPath">
						<WrongPath />
					</Route>
					<Route exact path="/wrongPath1">
						<WrongPath />
					</Route>
					<Route exact path="/wrongPath2">
						<WrongPath />
					</Route>
					<Route path="/">
						<Home questsListData={questsListData1} />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	)
}
	;

export default App;
