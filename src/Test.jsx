import { useParams } from 'react-router-dom';

export function Test() {
	const { id } = useParams();
	return <div>Product Id: {id}</div>;
}
