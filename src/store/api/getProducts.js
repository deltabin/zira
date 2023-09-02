import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://64ec685df9b2b70f2bfa4221.mockapi.io';

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Products'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: ({ category, sortBy, order }) =>
				`/products/?category=${category}&sortBy=${sortBy}&order=${order}`,
			providesTags: () => [
				{
					type: 'Products',
				},
			],
		}),
	}),
});

export const { useGetProductsQuery } = api;
