'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import profileDefault from '@/assets/images/profile.png';
import Spinner from '@/components/Spinner';
import { toast } from 'react-toastify';
import Searchbar from '@/components/Searchbar';

const ProfilePage = () => {
  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  const profileName = session?.user?.name;
  const profileEmail = session?.user?.email;

  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserArtworks = async (userId) => {
      if (!userId) {
        return;
      }

      try {
        const res = await fetch(`/api/artworks/user/${userId}`);

        if (res.status === 200) {
          const data = await res.json();
          setArtworks(data);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    // Fetch user artworks when session is available
    if (session?.user?.id) {
      fetchUserArtworks(session.user.id);
      

    }
  }, [session]);

  const handleDeleteArtwork = async (artworkId) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${artworkId}?`
    );

    if (!confirmed) return;
    try {
      const res = await fetch(`/api/artworks/${artworkId}`, {
        method: 'DELETE',
      });
    
      
      if (res.status === 200) {

        // Remove the artwork from state
        const updatedArtworks = artworks.filter(
          (artwork) => artwork._id !== artworkId
        );

        setArtworks(updatedArtworks);

        toast.success('Artwork Deleted');
      } else {
        toast.error('Failed to delete artwork');
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to delete artwork');
    }
  };

  return (

   <section className='bg-rose-50'>
      
      <div className='container m-auto py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
       
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        < Searchbar /> </div>
          <h1 className='text-3xl font-bold mb-4 mt-10'>Your Profile</h1>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/4 mx-20 mt-10'>
              <div className='mb-4'>
                <Image
                  className='h-32 w-auto md:h-48 md:w-48 rounded-full mx-auto md:mx-0'
                  src={profileImage || profileDefault}
                  width={200}
                  height={200}
                  alt='User'
                />
              </div>
              <h2 className='text-1xl mb-4'>
                <span className='font-bold block'>Name: </span> {profileName}
              </h2>
              <h2 className='text-1xl mb-8'>
                <span className='font-bold block'>Email: </span> {profileEmail}
              </h2>
            
           

            </div>
 
            <div className='md:w-3/4 md:pl-4'>
              <h2 className='text-xl font-semibold mb-4'>Your Listings</h2>
              {!loading && artworks.length === 0 && (
                <p>You have no artwork listings</p>
              )}
              {loading ? (
                <Spinner loading={loading} />
              ) : (
                artworks.map((artwork) => (
                  <div key={artwork._id} className='mb-10'>
                    <Link href={`/artworks/${artwork._id}`}>
                      <Image
                        className='h-32  rounded-md object-cover'
                        src={artwork.images[0]}
                        alt=''
                        width={500}
                        height={100}
                        priority={true}
                      />
                    </Link>
                    <div className='mt-2'>
                      <p className='text-lg font-semibold'>{artwork.name}</p>
                      <p className='text-sm text-gray-500'>{artwork.type}</p>
                    </div>
                    <div className='mt-2'>
                      <Link
                        href={`/artworks/${artwork._id}/edit`}
                        className='bg-rose-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600'
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDeleteArtwork(artwork._id)}
                        className='bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600'
                        type='button'
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProfilePage;