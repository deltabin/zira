import { useParams } from 'react-router-dom';

const Test = () => {
	const { id } = useParams();
	return <div>Product Id: {id}</div>;
};

export default Test;
