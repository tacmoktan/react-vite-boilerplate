import { useState } from 'react';
import { ConfigProvider, theme } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import { useTheme } from 'styled-components';

import AppRouter from '~/app/AppRouter';
import { AuthContextProvider } from '~/context/AuthContext';

import './i18n';
import GlobalStyle from './styles';

function App(): JSX.Element {
	const { defaultAlgorithm, darkAlgorithm } = theme;
	const [isDarkMode, setIsDarkMode] = useState(false);
	const defaultTheme: any = useTheme();
	return (
		<AuthContextProvider>
			<ConfigProvider
				theme={{
					algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
					token: {
						colorPrimary: defaultTheme.colors.primary.p6,
						colorSuccess: defaultTheme.colors.success.s6,
						colorWarning: defaultTheme.colors.warning.w6,
						colorError: defaultTheme.colors.error.e6,
						fontFamily: "'Roboto', sans-serif",
						borderRadiusSM: 8,
					},
				}}
			>
				<StyleProvider hashPriority='high'>
					<AppRouter />
				</StyleProvider>
			</ConfigProvider>
			<GlobalStyle />
		</AuthContextProvider>
	);
}

export default App;
