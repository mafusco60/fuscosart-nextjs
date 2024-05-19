import Hero from '../components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import Footer from '@/components/Footer';

export const metadata = {
	title: "Fusco's Art Gallery | Home",
	description: 'Find Your Favorite Artwork',
};

const HomePage = () => {
	return (
		<>
			<Hero />
			<InfoBoxes />
		</>
	);
};

export default HomePage;
