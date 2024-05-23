import Hero from '../components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeArtworks from '@/components/HomeArtworks';
import Footer from '@/components/Footer';


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
