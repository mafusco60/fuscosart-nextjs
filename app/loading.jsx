'use client';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
	display: 'block',
	margin: '100px auto',
};
const LoadingPage = ({ loading }) => {
	return (
		<ClipLoader
			color='#2563EB'
			loading={loading}
			cssOverride={override}
			size={150}
			aria-label='Loading Spinner'
		/>
	);
};

export default LoadingPage;
