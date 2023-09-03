import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { setSort } from '../../store/filter/slice';
import { sortList } from './data';
import styles from './sort.module.scss';

export function Sort({ value }) {
	const sortRef = useRef();
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();
	const nodeRef = useRef(null);

	const onClickListItem = (obj) => {
		dispatch(setSort(obj));
		setOpen(false);
	};
	console.log(styles);

	return (
		<div className={styles.sortWrapper}>
			<div ref={sortRef} className={styles.sort}>
				<div className={styles.sortLabel}>
					<svg
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
							fill="#2C2C2C"
						/>
					</svg>
					<b>Сортировка по:</b>
					<span onClick={() => setOpen(!open)}>{value.name}</span>
				</div>
				<CSSTransition
					nodeRef={nodeRef}
					in={open}
					timeout={300}
					classNames={{
						enter: styles.sortPopupEnter,
						enterActive: styles.sortPopupEnterActive,
						exit: styles.sortPopupExit,
						exitActive: styles.sortPopupExitActive,
					}}
					unmountOnExit
				>
					<div ref={nodeRef} className={styles.sortPopup}>
						<ul>
							{sortList.map((obj, i) => (
								<li
									key={i}
									onClick={() => onClickListItem(obj)}
									className={value.sortProperty === obj.sortProperty ? styles.active : ''}
								>
									{obj.name}
								</li>
							))}
						</ul>
					</div>
				</CSSTransition>
			</div>
		</div>
		// <div className={styles.sort}>
		// 	<div className={styles.sortLeft}>
		// 		<div className={styles.sortValue}>
		// 			<span>Сортировка: </span>
		// 			<span>По умолчанию</span>
		// 		</div>
		// 	</div>
		// 	<div className={styles.sortRight}>
		// 		<MdViewModule size={24} className="text-orange-400" />
		// 		<MdViewList size={24} />
		// 	</div>
		// </div>
	);
}
