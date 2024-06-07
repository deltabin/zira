import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useCreateProductsMutation } from '../../store/api';
import styles from './createProducts.module.scss';

const defaultValue = {
	title: '',
	description: '',
	imageUrl: '',
	price: 0,
	category: 0,
	rating: 0,
};

export function CreateProducts() {
	const [product, setProduct] = useState(defaultValue);

	const [createProducts] = useCreateProductsMutation();

	function handleSubmit(e) {
		e.preventDefault();
		createProducts(product).then(() => {
			setProduct(defaultValue);
		});
	}

	return (
		<div className={styles.createWrapper}>
			<form onSubmit={handleSubmit} className={styles.createForm}>
				<label>
					Изображение:
					<input
						type="text"
						value={product.imageUrl}
						onChange={(e) => setProduct({ ...product, imageUrl: e.target.value })}
					/>
				</label>
				<label>
					Название:
					<input
						type="text"
						value={product.title}
						onChange={(e) => setProduct({ ...product, title: e.target.value })}
					/>
				</label>
				<label>
					Описание:
					<textarea
						value={product.description}
						onChange={(e) => setProduct({ ...product, description: e.target.value })}
					/>
				</label>
				<label>
					Цена:
					<input
						type="text"
						value={product.price}
						onChange={(e) => setProduct({ ...product, price: e.target.value })}
					/>
				</label>
				<label>
					Рейтинг:
					<input
						type="text"
						value={product.rating}
						onChange={(e) => setProduct({ ...product, rating: e.target.value })}
					/>
				</label>
				<label>
					Категория:
					<input
						type="text"
						value={product.category}
						onChange={(e) => setProduct({ ...product, category: e.target.value })}
					/>
				</label>

				<div className={styles.createButtons}>
					<button onClick={() => toast.success('Товар успешно создан!', { className: 'toast' })}>
						Создать
					</button>
					<Link to="/">
						<button>Назад</button>
					</Link>
				</div>
			</form>
		</div>
	);
}
