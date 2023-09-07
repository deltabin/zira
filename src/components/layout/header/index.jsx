import { FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { NavItem } from './data.js';
import { Search } from './search';

const setActive = ({ isActive }) => (isActive ? styles.active : '');

export function Header() {
	return (
		<header className={styles.header}>
			<Link to="/">
				<img src="/images/logo.svg" alt="zira" />
			</Link>
			<nav className={styles.nav}>
				{NavItem.map((v, id) => (
					<NavLink className={setActive} key={id} to={v.link}>
						{v.name}
					</NavLink>
				))}
			</nav>
			<div className={styles.right}>
				{/* Поиск */}
				<Search />
				{/* Корзина */}
				<div className={styles.cart}>
					<span>Корзина</span>
					<FaShoppingCart />
					{/* [TODO) add cart counter */}
					<span>0</span>
				</div>
			</div>
		</header>
	);
}
