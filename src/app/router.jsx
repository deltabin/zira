import { createBrowserRouter } from 'react-router-dom';
import Test from '../Test';
import { Layout } from '../components/layout/Layout';
import { About } from '../pages/about';
import { Home } from '../pages/home';
import { Menu } from '../pages/menu';
import { CreateProducts } from '../pages/createProducts/index.jsx';

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
				element: <Test />,
			},
			{
				path: 'add',
				element: <CreateProducts />,
			},
		],
	},
]);
