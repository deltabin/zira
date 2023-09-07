import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://64ec685df9b2b70f2bfa4221.mockapi.io/products';

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Products'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: ({ category, sortBy, order }) =>
				`/?category=${category}&sortBy=${sortBy}&order=${order}`,
			providesTags: () => [
				{
					type: 'Products',
				},
			],
		}),
		createProducts: builder.mutation({
			query: (product) => ({
				body: product,
				url: '/',
				method: 'POST',
			}),
			invalidatesTags: () => [{ type: 'Products' }],
		}),
	}),
});

export const { useGetProductsQuery, useCreateProductsMutation } = api;
