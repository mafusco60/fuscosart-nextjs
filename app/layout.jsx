import '@/assets/styles/globals.css';
import AuthProvider from '@/components/AuthProvider';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ToastContainer } from 'react-toastify';
import { GlobalProvider } from '@/context/GlobalContext';
import 'react-toastify/dist/ReactToastify.css';
import 'photoswipe/dist/photoswipe.css';




export const metadata = {
	title: "Fusco's Art Gallery",
	description: 'Find Your Favorite Artwork',
	keywords:
		'art, gallery, artwork, painting, drawings, prints, posters, canvas, wall art, home decor, interior design, art lovers, art collectors, art enthusiasts, art buyers, art sellers, art dealers, art investors, art critics, art historians, art students, art teachers, art professors, art curators, art directors, art consultants, art advisors, art appraisers, art conservators, art restorers',
};

const MainLayout = ({ children }) => {
	return (
		<GlobalProvider>
			<AuthProvider>
			<html lang='en'>
				<body>
					<Navbar />
					<main>{children}</main>
					<Footer />
					<ToastContainer />
				</body>
			</html>
			</AuthProvider>
		</GlobalProvider>
	);
};

export default MainLayout;
