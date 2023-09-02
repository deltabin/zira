import { StrictMode } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from '../store';
import { router } from './router';
import './styles/index.scss';

export default function App() {
	return (
		<StrictMode>
			<Provider store={store}>
				<Toaster position="bottom-right" />
				<RouterProvider router={router} />
			</Provider>
		</StrictMode>
	);
}
