import ArtworkCard from '@/components/ArtworkCard';
import { fetchArtworks } from '@/utils/requests';
import Searchbar from '@/components/Searchbar';


const ArtworksPage = async() => {
	const artworks = await fetchArtworks();


	// Sort the artworks by create date
	artworks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

	return (
		<section className='px-4 py-6'>
					
			<div className='bg-rose-50 py-20'>
				<h1 className='text-4xl font-extrabold text-rose-900 sm:text-5xl md:text-6xl text-center'>Art Gallery</h1>
				<p className='text-lg text-center text-gray-700 mt-4'>Explore our collection of beautiful artworks</p>

				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>

			<Searchbar /></div>
			</div>
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
