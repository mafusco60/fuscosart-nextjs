import InfoBox from './InfoBox';

const InfoBoxes = () => {
	return (
		<section>
			<div className='container-xl lg:container m-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
					<InfoBox
						heading='For Browsers and Buyers'
						backgroundColor='bg-purple-100'
						buttonInfo={{
							text: 'Browse Artworks',
							link: '/artworks',
							backgroundColor: 'bg-purple-900',
						}}
					>
						Find your dream artwork. Bookmark art pieces.
					</InfoBox>
					<InfoBox
						heading='For Website Admins'
						backgroundColor='bg-purple-100'
						buttonInfo={{
							text: 'Add Artwork',
							link: '/artworks/add',
							backgroundColor: 'bg-purple-500',
						}}
					>
						List your artworks and reach potential buyers.
					</InfoBox>
				</div>
			</div>
		</section>
	);
};
export default InfoBoxes;
