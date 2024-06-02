'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
import { fetchArtwork } from '@/utils/requests';
import ArtworkHeaderImage from '@/components/ArtworkHeaderImage';
import Link from 'next/link';
import { FaArrowLeft, FaBookmark, FaShare, FaPaperPlane} from 'react-icons/fa';
import ArtworkDetails from '@/components/ArtworkDetails';
import Spinner from '@/components/Spinner';
import ArtworkImages from '@/components/ArtworkImages';





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
        console.log(artwork);
      } catch (error) {
        console.error('Error fetching artwork:', error);
      } finally {
        setLoading(false);
      }
    };

    if (artwork === null) {
      console.log(artwork, 'artwork')
      fetchArtworkData();
      console.log(artwork, 'artwork fetched')
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
        resolution photos to discourage copyright infringement.  
        Original artworks and original digital images are high resolution.
        </p>
      </div>


      <div className="container m-auto py-6 px-6">
        <Link
          href="/artworks"
          className="text-rose-600 hover:text-rose-900 flex items-center"
        >
          <FaArrowLeft className="mr-2"></FaArrowLeft> Back to Artworks
        </Link>
      </div>
</div>
      
    </section>

	<section className="bg-rose-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">

		
		  <ArtworkDetails artwork = { artwork } />
          
          
          <aside className="space-y-4">       
            <button
              className="bg-rose-800 hover:bg-rose-900 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
            >
              <FaBookmark className="mr-2"></FaBookmark> Bookmark Artwork
            </button>
            <button
              className="bg-gray-900 hover:bg-black text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
            >
              <FaShare className="mr-2"></FaShare> Share Artwork
            </button>

            {/*<!-- Contact Form -->*/}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Contact Artist</h3>
              <form>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='name'
                >
                  Name:
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='name'
                  type='text'
                  placeholder='Enter your name'             
                  required
                />
              </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor='phone'
                  >
                    Phone:
                  </label>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='phone'
                    type='text'
                    placeholder='Enter your phone number'
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message:
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div>
                  <button
                    className="bg-rose-900 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
                    type="submit"
                  >
                    <FaPaperPlane className="mr-2"></FaPaperPlane> Send Message
                  </button>
                </div>
              </form>
            </div>
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
