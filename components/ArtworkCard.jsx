import Image from 'next/image';
import Link from 'next/link';

const ArtworkCard = ({ artwork }) => {
	return (
		<div className='rounded-xl shadow-md relative'>
			<Image
				src={`/images/artworks/${artwork.images[0]}`}
				alt=''
				width='0'
				height='0'
				sizes='100vw'
				className=' w-full h-auto rounded-t-xl'
			/>
			<div className='p-4'>
				<div className='text-left md:text-center lg:text-left mb-6'>
					<div className='text-gray-600'>{artwork.type}</div>
					<h3 className='text-xl font-bold'>{artwork.name}</h3>
				</div>
				<h3 className='absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-rose-950 font-bold text-right md:text-center lg:text-right'>
					{artwork.rates.monthly}
				</h3>

				<div className='border border-gray-100 mb-5'></div>
			</div>
			<Link
				href={`/artworks/${artwork._id}`}
				className='h-[36px] bg-rose-950 hover:bg-rose-700 text-white px-4 py-2 rounded-lg text-center text-sm'
			>
				Details
			</Link>
		</div>
	);
};
export default ArtworkCard;
