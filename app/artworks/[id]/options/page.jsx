'use client'
import ArtworkHeaderImage from '@/components/ArtworkHeaderImage';
import { useParams } from 'next/navigation';
import { fetchArtwork } from '@/utils/requests';


  
    
const ArtworkOptionsPage = async () => {

  const { id } = useParams();
  const artwork = await fetchArtwork(id);

  return ( 
 
    <div className='container-sm'>
<ArtworkHeaderImage image={artwork.images[0]} />
   <div className='text-xl text-bold text-center'>
    Original Not Available
    </div>
  </div>
  )
}
export default ArtworkOptionsPage

