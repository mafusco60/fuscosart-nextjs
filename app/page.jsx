import Hero from '../components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import Footer from '@/components/Footer';
import HomeArtworks from '@/components/HomeArtworks';

export const metadata = {
	title: "Fusco's Art Gallery | Home",
	description: 'Find Your Favorite Artwork',
};

const HomePage =  () => {
	

	return (
		<>
			<Hero />
			<InfoBoxes />
			<HomeArtworks />
		</>
	);
};

export default HomePage;
