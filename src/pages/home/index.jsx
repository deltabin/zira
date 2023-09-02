import { BsFire } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { homeImages } from './data';
import styles from './home.module.scss';

export function Home() {
	return (
		<section className={styles.home}>
			<div className={styles.info}>
				<p>Эксклюзивное меню на Ваш вкус</p>
				<div className={styles.menu}>
					<div />
					<span>Смотреть всю меню</span>
				</div>
				<Link to="/menu">
					<div className={styles.promo}>
						<BsFire />
						<span>Акции на сегодня</span>
					</div>
				</Link>
			</div>
			<div className={styles.images}>
				{homeImages.map((val, id) => (
					<img key={id} src={val.image} alt={val.name} />
				))}
			</div>
		</section>
	);
}
