import artworks from '@/artworks.json';
import ArtworkCard from '@/components/ArtworkCard';

const ArtworksPage = () => {
	return (
		<section className='px-4 py-6'>
			<div className='container-xl lg:container m-auto px-4 py-6'>
				{artworks.length === 0 ? (
					<p>No artworks found</p>
				) : (
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{artworks.map((artwork, index) => (
							<ArtworkCard artwork={artwork} key={index} />
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default ArtworksPage;
