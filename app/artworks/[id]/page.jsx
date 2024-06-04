'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
import { fetchArtwork } from '@/utils/requests';
import ArtworkHeaderImage from '@/components/ArtworkHeaderImage';
import Link from 'next/link';
import { FaArrowLeft, FaShare} from 'react-icons/fa';
import ArtworkDetails from '@/components/ArtworkDetails';
import Spinner from '@/components/Spinner';
import ArtworkImages from '@/components/ArtworkImages';
import BookmarkButton from '@/components/BookmarkButton';
import ShareButtons from '@/components/ShareButtons';
import ArtworkContactForm from '@/components/ArtworkContactForm'; 




const ArtworkPage = () => {
  const { id } = useParams();

  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworkData = async () => {
      if (!id) return;
      try {
        const artwork = await fetchArtwork(id);
        setArtwork(artwork);

      } catch (error) {
        console.error('Error fetching artwork:', error);
      } finally {
        setLoading(false);
      }
    };

    if (artwork === null) {
      fetchArtworkData();
      
    }
  }, [id, artwork]);

  if (!artwork && !loading) {
    return (
      <h1 className='text-center text-2xl font-bold mt-10'>
        Artwork Not Found
      </h1>
    );
  }


	return <>

	{loading && <Spinner  loading = { loading }/>	}
	{!loading && artwork && (
		<>

    <ArtworkHeaderImage image={artwork.images[0]} />
		<section>

    <div className="container m-auto py-6 px-6">
        <div
          
          className="text-rose-300 text-xs text-center"
        >
          
        <p className="text-rose-300 text-center"> 
        Some images may appear pixelated due to lower 
        resolution photos to discourage copyright infringement. </p> 
        <p>Original artworks and original digital images are high resolution.
        </p>
      </div>


      <div className="container m-auto py-6 px-6">
        <Link
          href="/artworks"
          className="text-rose-600 hover:text-rose-900 flex items-center"
        >
          <FaArrowLeft className="mr-2"></FaArrowLeft> 
          Back to Artworks
        </Link>
      </div>

      
</div>
      
    </section>

	<section className="bg-rose-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">

		
		    <ArtworkDetails artwork = { artwork } />
          
          
      <aside className="space-y-4">   

        <BookmarkButton artwork={artwork}/>

        <ShareButtons artwork={artwork} />

        <ArtworkContactForm artwork={artwork} />



 
            </aside>
              </div>
            </div>
          </section>
        <ArtworkImages images={artwork.images} />
          </>
      )}
    </>
  
};
export default ArtworkPage;
