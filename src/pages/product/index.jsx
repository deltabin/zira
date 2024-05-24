import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { useDeleteProductMutation } from '../../store/api';

export function Product() {
	const { id } = useParams();
	const navigate = useNavigate();

	const [deleteProduct] = useDeleteProductMutation();

	function deleteProd() {
		deleteProduct(id);
		navigate('/menu');
		toast.success('Товар успешно удален!', {
			className: 'toast',
		});
	}

	return (
		<div className="ml-14 mt-14">
			<h1>Product id: {id}</h1>

			<button onClick={deleteProd} className="mt-4 px-4 py-2 rounded bg-red-500">
				Удалить
			</button>
		</div>
	);
}
