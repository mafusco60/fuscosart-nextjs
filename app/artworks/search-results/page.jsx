'use client'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect} from 'react'
import Link from 'next/link' 
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import ArtworkCard from '@/components/ArtworkCard'
import Spinner from '@/components/Spinner'
import Searchbar from '@/components/Searchbar'



        const SearchResultsPage = () => {
            const searchParams = useSearchParams();
          
            const [artworks, setArtworks] = useState([]);
            const [loading, setLoading] = useState(true);
          
            const keywords = searchParams.get('keywords');
            const artworkType = searchParams.get('artworkType');
          
            useEffect(() => {
              const fetchSearchResults = async () => {
                try {
                  const res = await fetch(
                    `/api/artworks/search?keywords=${keywords}&artworkType=${artworkType}`
                  );
          
                  if (res.status === 200) {
                    const data = await res.json();
                    setArtworks(data);
                  } else {
                    setArtworks([]);
                  }
                } catch (error) {
                  console.log(error);
                } finally {
                  setLoading(false);
                }
              };
          
              fetchSearchResults();
            }, [keywords, artworkType]);
            console.log(artworks);
        
    return (<>
    <section className="bg-rose-700 py-4">

<div className="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
    <Searchbar />


</div>


    </section>
    {
        loading ? (<Spinner loading={loading} />) : (
            <section className='px-4 py-6'>
                <div className='container-xl lg:container m-auto px-4 py-6'>
                    <Link href='/artworks' className='text-rose-500 hover:text-rose-600 flex items-center mb-3'>
                    <FaArrowAltCircleLeft className='mr-2' /> Back to Artworks
                    </Link>
    
                    <h1 className="text-2xl mb-4">Search Results</h1>
                    {artworks.length === 0 ? (
                        <p>No Search Results</p>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {artworks.map((artwork, index) => (
                  <ArtworkCard artwork={artwork} key={index} />
                ))}
              </div>
                    )}
                </div>
            </section>
            
        )
    }
    </>)

    
};

export default SearchResultsPage