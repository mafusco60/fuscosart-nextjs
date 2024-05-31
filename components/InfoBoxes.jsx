import InfoBox from './InfoBox';

const InfoBoxes = () => {
	return (
		<section>
			<div className='container-xl lg:container m-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
					<InfoBox
						heading='For Browsers and Buyers'
						textColor='text-rose-800'
						backgroundColor='bg-gray-300'
						buttonInfo={{
							text: 'Browse Artworks',
							link: '/artworks',
							backgroundColor: 'bg-rose-950',
						}}
					>
						Find your dream artwork. Bookmark art pieces.
					</InfoBox>
					<InfoBox
						heading='Options for Prints'
						textColor='text-rose-800'
						backgroundColor='bg-rose-200'
						buttonInfo={{
							text: 'Browse Pricing Charts',
							link: '/artworks/add',
							backgroundColor: 'bg-rose-950',
						}}
					>
						Print your favorite art on paper, canvas and even wood.
					</InfoBox>
				</div>
			</div>
		</section>
	);
};
export default InfoBoxes;
