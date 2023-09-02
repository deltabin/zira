import ContentLoader from 'react-content-loader';

export function Skeleton({ props }) {
	return (
		<ContentLoader
			className="flex justify-between items-center bg-[#1F2125]"
			speed={2}
			width={1560.5}
			height={80}
			viewBox="0 0 1560.5 80"
			backgroundColor="#333"
			foregroundColor="#999"
			{...props}
		>
			<rect x="0" y="0" rx="4" ry="4" width="130" height="80" />
			<rect x="165" y="25" rx="4" ry="4" width="130" height="24" />

			<rect x="585" y="15" rx="4" ry="4" width="130" height="10" />
			<rect x="725" y="15" rx="4" ry="4" width="130" height="10" />
			<rect x="865" y="15" rx="4" ry="4" width="90" height="10" />
			<rect x="585" y="50" rx="4" ry="4" width="90" height="10" />
			<rect x="685" y="50" rx="4" ry="4" width="60" height="10" />
			<rect x="755" y="50" rx="4" ry="4" width="200" height="10" />
			<rect x="585" y="90" rx="4" ry="4" width="130" height="10" />
			<rect x="730" y="90" rx="4" ry="4" width="120" height="10" />
			<rect x="860" y="90" rx="4" ry="4" width="95" height="10" />
			<rect x="585" y="130" rx="4" ry="4" width="130" height="10" />
			<rect x="730" y="130" rx="4" ry="4" width="225" height="10" />

			<rect x="1280" y="15" rx="4" ry="4" width="88" height="48" />

			<rect x="1420" y="15" rx="4" ry="4" width="141" height="48" />
		</ContentLoader>
	);
}
