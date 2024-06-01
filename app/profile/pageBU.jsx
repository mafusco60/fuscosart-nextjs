'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import profileDefault from '@/assets/images/profile.png'
import Spinner from '@/components/Spinner'


const ProfilePage = () => {

  const { data: session } = useSession()
  const profileImage = session?.user?.image
  const profileName = session?.user?.name
  const profileEmail = session?.user?.email
  const profileId = session?.user?.id
  const profileIsAdmin = session?.user?.is_admin

  const[artworks, setArtworks] = useState([])
  const[loading, setLoading] = useState(true)

    useEffect(() => {
    const fetchUserArtworks = async (userId) => {
    if (!userId){
      return;

    } 
    try {
      const res = await fetch(`/api/artworks/user/${userId}`)
      if (res.status === 200){
        const data = await res.json()
        setArtworks(data)
      }
  
    } catch (error) {
        console.log(error);
}finally {
      setLoading(false)
    } 
    }
    // Fetch user artworks when session is available
    if (session?.user?.id) {
      fetchUserArtworks(session.user.id)
    }
  }, [session]);
console.log(artworks.admin)


  const handleDeleteArtwork =  () => {};
  return (
    <section className="bg-rose-50">
    <div className="container m-auto py-24">
      <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
        
       

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mx-20 mt-10">
            <div className="mb-4">
              <Image
                className="h-32 w-32 md:h-48 md:w-48 rounded-full mx-auto md:mx-0"
                src={profileImage || profileDefault}
                width={200}
                height={200}
                alt="User"
              />
            </div>
            <h2 className="text-1xl mb-4"><span className="font-bold block">Name: </span> { profileName }</h2>
            <h2 className="text-1xl mb-4"><span className="font-bold block">Email: </span> {profileEmail}</h2>
           <div></div>
          
          {(artworks.admin) ?  (<h2 className="text-2xl mb-4 font-bold block">
            Admin </h2>) 
            : ('')}
          </div>

          
 
           
 <div className= 'self-center grid sm-grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-6 "'>
      {!loading && artworks.length === 0  && (
              <p> You have no artwork listings</p>
            )}
           

            {loading ? (<Spinner loading = { loading } /> ) : (
              artworks.map((artwork) => (
                <div className='mb-10 'key={ artwork._id} >

                  <Link href={`/artworks/${artwork._id}`}>

                    <Image
                      className="w-32 h-full rounded-md object-cover 
                       "
                      src={artwork.images[0]}
                      alt=" "
                      priority={true} 
                      height = {600}
                      width = {400}
                    />
                  </Link>

                  
                  <div className="mt-2">

                    <p className="text-lg font-semibold">{artwork.name}</p>
                    <p className="text-sm text-gray-500">{artwork.type}</p>
                
                  <div className="mt-2">
                  <Link
                        href={`/artworks/${artwork._id}/edit`}
                        className='bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600'
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDeleteProperty(property._id)}
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