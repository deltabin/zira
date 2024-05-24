import debounce from 'lodash/debounce';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../../../store/filter/slice';
import styles from './Search.module.scss';

export function Search() {
	const dispatch = useDispatch();
	const [value, setValue] = useState('');
	const [lastSentValue, setLastSentValue] = useState('');

	const updateSearchValue = debounce((str) => {
		if (str !== lastSentValue) {
			dispatch(setSearchValue(str));
			setLastSentValue(str);
		}
	}, 1000);

	const onChangeInput = (event) => {
		setValue(event.target.value);
		updateSearchValue(event.target.value);
	};

	console.log(value);

	return (
		<div className={styles.search}>
			<input value={value} onChange={onChangeInput} type="text" placeholder="Поиск товаров..." />
			<FaSearch />
		</div>
	);
}
