import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Category } from '../../components/category';
import { MenuItem } from '../../components/menu-item';
import { Skeleton } from '../../components/menu-item/skeleton';
import { Sort } from '../../components/sort';
import { useGetProductsQuery } from '../../store/api/getProducts';
import { selectCategoryId, selectSort } from '../../store/filter/selectors';
import { setCategoryId } from '../../store/filter/slice';
import styles from './menu.module.scss';

export const Menu = () => {
	const categoryId = useSelector(selectCategoryId);
	const sort = useSelector(selectSort);
	const category = categoryId > 0 ? String(categoryId) : '';
	const sortBy = sort.sortProperty.replace('-', '');
	const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
	const { data, isFetching } = useGetProductsQuery({ category, sortBy, order });
	const dispatch = useDispatch();
	const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

	const onChangeCategory = useCallback(
		(idx) => {
			dispatch(setCategoryId(idx));
		},
		[dispatch],
	);

	return (
		<div className={styles.menu}>
			<Sort value={sort} />
			<div className={styles.screen}>
				<Category value={categoryId} onChangeCategory={onChangeCategory} />
				<div className="flex gap-4 flex-col w-full mr-14">
					{isFetching ? (
						skeletons
					) : data ? (
						data.map((products) => <MenuItem key={products.id} products={products} />)
					) : (
						<div>Not found</div>
					)}
				</div>
			</div>
		</div>
	);
};