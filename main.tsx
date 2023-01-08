import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { ThemeProvider } from 'styled-components';
import theme from './themes';

import App from '~/App';

import 'antd/dist/reset.css';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 5 * 1000,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme.default}>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
				<Router>
					<App />
				</Router>
			</QueryClientProvider>
		</ThemeProvider>
	</React.StrictMode>,
);
