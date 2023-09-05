import styles from './createProducts.module.scss';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function CreateProducts() {
	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<div className={styles.createWrapper}>
			<form onSubmit={handleSubmit} className={styles.createForm}>
				<label>
					Изображение:
					<input type="file" />
				</label>
				<label>
					Название:
					<input type="text" />
				</label>
				<label>
					Описание:
					<textarea />
				</label>
				<label>
					Цена:
					<input type="text" />
				</label>
				<label>
					Рейтинг:
					<input type="text" />
				</label>
				<label>
					Категория:
					<input type="text" />
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
