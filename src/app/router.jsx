import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components';
import { About, CreateProducts, Home, Menu, Product } from '../pages';

export const router = createBrowserRouter([
	{
		element: <Layout />,
		errorElement: <h1>Error</h1>,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'menu',
				element: <Menu />,
			},
			{
				path: 'product/:id',
				element: <Product />,
			},
			{
				path: 'add',
				element: <CreateProducts />,
			},
		],
	},
]);
