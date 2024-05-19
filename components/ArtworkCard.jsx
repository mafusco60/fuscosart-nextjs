import Image from 'next/image';
import Link from 'next/link';

const ArtworkCard = ({ artwork }) => {
	return (
		<div className='rounded-xl shadow-md relative'>
			<img
				src='images/artworks/a1.jpg'
				alt=''
				className='object-cover rounded-t-xl'
			/>
			<div className='p-4'>
				<div className='text-left md:text-center lg:text-left mb-6'>
					<div className='text-gray-600'>{artwork.type}</div>
					<h3 className='text-xl font-bold'>{artwork.name}</h3>
				</div>
				<h3 className='absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
					{artwork.rates.monthly}
				</h3>

				<div className='flex justify-center gap-4 text-gray-500 mb-4'>
					<p>
						<i className='fa-solid fa-bed'></i> {artwork.beds}
						<span className='md:hidden lg:inline'> Beds</span>
					</p>
					<p>
						<i className='fa-solid fa-bath'></i> {artwork.baths}
						<span className='md:hidden lg:inline'> Baths</span>
					</p>
					<p>
						<i className='fa-solid fa-ruler-combined'></i> {artwork.square_feet}
						<span className='md:hidden lg:inline'> sqft</span>
					</p>
				</div>

				<div className='flex justify-center gap-4 text-green-900 text-sm mb-4'>
					<p>
						<i className='fa-solid fa-money-bill'></i> Weekly
					</p>
					<p>
						<i className='fa-solid fa-money-bill'></i> Monthly
					</p>
				</div>

				<div className='border border-gray-100 mb-5'></div>

				<div className='flex flex-col lg:flex-row justify-between mb-4'>
					<div className='flex align-middle gap-2 mb-4 lg:mb-0'>
						<i className='fa-solid fa-location-dot text-lg text-orange-700'></i>
						<span className='text-orange-700'>
							{' '}
							{artwork.location.city}, {artwork.location.state}
						</span>
					</div>
					<Link
						href={`/artworks/${artwork._id}`}
						className='h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm'
					>
						Details
					</Link>
				</div>
			</div>
		</div>
	);
};
export default ArtworkCard;
