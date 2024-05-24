import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import { store } from '../store';
import { router } from './router';
import './styles/index.scss';

export default function App() {
	return (
		<Provider store={store}>
			<Toaster richColors position="bottom-right" />
			<RouterProvider router={router} />
		</Provider>
	);
}
