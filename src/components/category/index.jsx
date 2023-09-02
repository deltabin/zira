import styles from './category.module.scss';
import { categories } from './data';

export function Category({ value, onChangeCategory }) {
	return (
		<div className={styles.category}>
			<span>Наше меню</span>
			<ul className={styles.categories}>
				{categories.map((categoryName, i) => (
					<li
						onClick={() => onChangeCategory(i)}
						className={value === i ? 'text-orange-400' : ''}
						key={i}
					>
						{categoryName}
					</li>
				))}
			</ul>
		</div>
	);
}
