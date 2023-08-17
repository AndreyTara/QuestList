import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			reffetchOnWindowsFocus: false,
		},
	},
}
)

render(
	<QueryClientProvider client={queryClient}>
		<StrictMode>
			<App />
		</StrictMode>
	</QueryClientProvider>,
	document.getElementById('root')
);
