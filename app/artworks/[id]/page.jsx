'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
import { fetchArtwork } from '@/utils/requests';

const ArtworkPage = () => {


	const { id } = useParams();
	const [artwork, setArtwork] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect (() =>{
		const fetchArtworkData = async () => {
			if (!id) return;
			try {
				const artwork = await fetchArtwork(id);
				setArtwork(artwork);

			} catch (error) {
				console.error('Failed to fetch artwork data', error);
			} finally {
				setLoading(false);
			}
		}
		if (artwork === null) {
			fetchArtworkData();

		}
	}, [id, artwork]
);

	return <div>ArtworkPage</div>;
};
export default ArtworkPage;
