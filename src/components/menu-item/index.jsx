import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import styles from './menu-item.module.scss';

export function MenuItem({ products }) {
	return (
		<div className={styles.menuItem}>
			<div className={styles.menuItemTitle}>
				<img src={products.imageUrl} alt={products.title} />
				<Link className="" to={`/product/${products.id}`}>
					{products.title}
				</Link>
			</div>
			<div className={styles.menuItemDesc}>{products.description}</div>
			<div className={styles.menuItemCart}>
				<div className={styles.menuItemCartPrice}>
					{Math.round(products.price)} <span>т / шт</span>
				</div>

				<div
					onClick={() =>
						toast.success('Товар добавлен в корзину!', {
							className: 'toast',
						})
					}
					className={styles.menuItemCartButton}
				>
					<span>в корзину</span> <FaShoppingCart />
				</div>
			</div>
		</div>
	);
}
