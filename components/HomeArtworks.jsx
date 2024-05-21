import artworks from '@/artworks.json';
import ArtworkCard from '@/components/ArtworkCard';
import Link from 'next/link';

const HomeArtworks = () => {
	const recentArtworks = artworks
		.sort(() => Math.random() - Math.random())
		.slice(0, 3);

	return (
		<>
			<section className='px-4 py-6'>
				<div className='container-xl lg:container m-auto'>
					<h2 className='text-3xl font-bold text-rose-800 mb-6 text-center'>
						Recent Artworks
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{recentArtworks === 0 ? (
							<p> No Artworks Found </p>
						) : (
							recentArtworks.map((artwork) => (
								<ArtworkCard key={artwork._id} artwork={artwork} />
							))
						)}
					</div>
				</div>
			</section>
			<section className='m-auto max-w-lg my-10 px-6'>
				<Link
					href='/artworks'
					className='block  bg-rose-950 text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
				>
					View All Artworks
				</Link>
			</section>
		</>
	);
};

export default HomeArtworks;
