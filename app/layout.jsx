import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
	title: "Fusco's Art Gallery",
	description: 'Find Your Favorite Artwork',
	keywords:
		'art, gallery, artwork, painting, drawings, prints, posters, canvas, wall art, home decor, interior design, art lovers, art collectors, art enthusiasts, art buyers, art sellers, art dealers, art investors, art critics, art historians, art students, art teachers, art professors, art curators, art directors, art consultants, art advisors, art appraisers, art conservators, art restorers',
};

const MainLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
};

export default MainLayout;
