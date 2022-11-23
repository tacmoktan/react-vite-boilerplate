import AppRouter from '~/app/AppRouter';

import { AuthContextProvider } from '~/context/AuthContext';

import './i18n';
import GlobalStyle from './styles';

function App(): JSX.Element {
	return (
		<AuthContextProvider>
			<GlobalStyle />
			<AppRouter />
		</AuthContextProvider>
	);
}

export default App;
