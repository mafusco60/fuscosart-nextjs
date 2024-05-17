import Link from 'next/link';

export const metadata = {
	title: "Fusco's Art Gallery | Home",
	description: 'Find Your Favorite Artwork',
};

const HomePage = () => {
	return (
		<div>
			<h1 className='text-3xl'>Welcome</h1>
			<Link href='/artworks'>Artworks</Link>
		</div>
	);
};

export default HomePage;
