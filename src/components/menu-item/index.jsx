import { toast } from 'react-hot-toast';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function MenuItem({ products }) {
	return (
		<div className="flex justify-between items-center bg-[#1F2125] rounded-[10px]">
			<div className="flex items-center gap-9">
				<img className="w-[130px] h-[80px]" src={products.imageUrl} alt={products.title} />
				<div className="text-xl font-bold text-white max-w-[387px]">
					<Link to={`/product/${products.id}`}>{products.title}</Link>
				</div>
			</div>
			<div className="text-base w-[377px] text-[#7A7F84]">{products.description}</div>
			<div className="flex gap-12">
				<div className="flex gap-2.5 text-white text-xl items-center">
					<div className="font-bold">{Math.round(products.price)}</div>т / шт
				</div>
				<div
					onClick={() =>
						toast.success('Товар добавлен в корзину!', {
							className: ' rounded-xl bg-[#1F2125] text-[#7A7F84]',
						})
					}
					style={{
						borderRadius: '22px 0px 0px 22px',
						background: 'linear-gradient(180deg, #FDB806 0%, #FD8006 100%)',
						boxShadow: '0px 4px 13px 0px rgba(255, 126, 0, 0.60)',
					}}
					className="cursor-pointer flex items-center gap-2.5 py-3 px-[22px]"
				>
					<div className="font-medium text-base">в корзину</div> <FaShoppingCart />
				</div>
			</div>
		</div>
	);
}
