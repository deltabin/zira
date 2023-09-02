import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './api/getProducts';
import filter from './filter/slice';

const reducers = combineReducers({
	filter,
	[api.reducerPath]: api.reducer,
});

export const store = configureStore({
	reducer: reducers,

	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
