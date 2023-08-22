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
import { useQuery } from 'react-query'

const App = () => {
	const { data: previewList, isLoading, error } = useQuery('previewList', async () => {
		const response = await fetch('http://localhost:3001/quests');
		return response.json();
	})
	if (isLoading) {
		return <div>Loading ...</div>
	}
	if (error) {
		return <div>Error: {error.message}</div>
	}

	return (
		<ThemeProvider theme={appTheme}>

			<S.GlobalStyle />
			<Router>
				<Switch>
					<Route exact path="/quests/:id">
						<DetailedQuest previewList={previewList} />
					</Route>
					<Route exact path="/contacts">
						<Contacts />
					</Route>
					<Route exact path="/newcomers">
						<WrongPath />
					</Route>
					<Route exact path="/reviews">
						<WrongPath />
					</Route>
					<Route exact path="/stocks">
						<WrongPath />
					</Route>
					<Route path="/">
						<Home previewList={previewList} />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	)
}
	;

export default App;
