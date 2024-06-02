
import{ useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
    
    FaTimes,
    FaCheck,
    FaPaperPlane,
    FaBookmark,
    FaShare,
    FaMapMarker
    
  } from 'react-icons/fa';
  import { fetchArtwork } from '@/utils/requests';
  import ArtworkHeaderImage from '@/components/ArtworkHeaderImage';
  import Spinner from '@/components/Spinner';
  

const ArtworkDetails = ({ artwork }) => {
  
    return <>
 <main>


<div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                  <div className='text-gray-500 mb-4'>{artwork.type}</div>
                  <h1 className='text-3xl font-bold mb-4'>{artwork.name}</h1>


                  <h3 className='text-lg font-bold my-6 bg-rose-800 text-white p-2'>
                    <Link href={`/artworks/${artwork._id}/options`}>
                    Prices & Options</Link>
                  </h3>
                  <div className='flex flex-col md:flex-row justify-around'>
                    <div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
                      <div className='text-gray-500 mr-2 font-bold'>
                        Nightly
                      </div>
                      <div className='text-2xl font-bold'>
                       
                      </div>
                    </div>
                    <div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
                      <div className='text-gray-500 mr-2 font-bold'>Weekly</div>
                      <div className='text-2xl font-bold text-blue-500'>
                        
                      </div>
                    </div>

                    <div className='flex items-center justify-center mb-4 pb-4 md:pb-0'>
                      <div className='text-gray-500 mr-2 font-bold'>
                        Monthly
                      </div>
                      <div className='text-2xl font-bold text-blue-500'>                  
                      </div>
                    </div>

                    <div className='flex items-center justify-center mb-4 pb-4 md:pb-0'>
                      <div className='text-gray-500 mr-2 font-bold'>
                        Monthly
                      </div>
                      <div className='text-2xl font-bold text-blue-500'>                  
                      </div>
                    </div>

                  </div>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                  <h3 className='text-lg font-bold mb-6'>
                    Description & Details
                  </h3>
                  <div className='flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9'>
                    <p className='text-gray-500 mb-4'>{artwork.description}</p>
                  </div>
                  </div>


                  <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                  
                </div>

                <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                </div>
           

                 
</main>
    </>
}


export default ArtworkDetails;