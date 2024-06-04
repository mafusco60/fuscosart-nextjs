'use client'
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { fetchArtwork } from '@/utils/requests';
import { toast } from 'react-toastify';


const ArtworkEditForm = () => {

    const { id } = useParams();
    const router = useRouter();

    const [mounted, setMounted] = useState(false);
    const [fields, setFields] = useState({
        type: '',
        name: '',
        description: '',
        descriptive_words: '',
        original: {
          available: '',
          price: '',
          substrate: '',
          dimensions: '',
        },
      }); 
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        setMounted(true);

         // Fetch the artwork data for form prefill
        const fetchArtworkData = async () => {
            try {
                const artworkData = await fetchArtwork(id);

               /*  // Check if Original price is null, if so make empty string
                if (artworkData.original.price === null) {
                    setFields((prevFields) => ({
                        ...prevFields,
                        original: {
                            ...prevFields.original,
                            price: '',
                        },
                    }));
                } */

                setFields(artworkData);

            } catch (error) {
              console.error(error);  
            }   finally {
                setLoading(false);
            }
        };
        fetchArtworkData();

      }, []);
  

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Check if nested field
    if (name.includes('.')) {
        const [outerKey, innerKey] = name.split('.');
    
        setFields((prevFields) => ({
          ...prevFields,
          [outerKey]: {
            ...prevFields[outerKey],
            [innerKey]: value,
          },
        }));
      } else {
        // Not nested, update directly
        setFields((prevFields) => ({
          ...prevFields,
          [name]: value,
        }));
      }
    };

  
const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const formData = new FormData(e.target);

    const res = await fetch (`/api/artworks/${id}`, {
      method: 'PUT',
      body: formData,
    });
    if (res.status === 200) {
      router.push(`/artworks/${id}`);
    } else if (res.status === 401 || res.status === 403) {
      toast.error('Permission Denied');
      //toast.success('Artwork updated successfully');
    } else {
      toast.error('Something went wrong');
    }
    
  } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
  }
}

    return (
      mounted && !loading && (
    
    <form onSubmit={handleSubmit}>
          <h2 className='text-3xl text-center font-semibold mb-6 text-rose-950'>
              Edit Artwork
          </h2>


          {<div className='mb-4'>
              <label
                htmlFor='artwork_type'
                className='block text-gray-700 font-bold mb-2'
              >
                Artwork Type
              </label>
              <select
                id='type'
                name='type'
                className='border rounded w-full py-2 px-3 focus:outline-rose-900 focus:shadow-outline'
                required
                value={ fields.type }
                onChange={ handleChange }

              >
                <option value='Graphite Drawing'>Graphite Drawing</option>
                <option value='Colored Pencil Drawing'>Colored Pencil</option>
                <option value='Charcoal Drawing'>Charcoal Drawing</option>
                <option value='Oil Pastels'>Oil Pastels</option>
                <option value='Pastels'>Pastels</option>
                <option value='Alcohol Markers'>Alcohol Markers</option>
                <option value='Oil Painting'>Oil Painting</option>
                <option value='Pastels'>Pastels</option>
                <option value='Acrylic Painting'>Acrylic Painting</option>
                <option value='Watercolor Painting'>Watercolor</option>
                <option value='Mixed Media'>Mixed Media</option>
                <option value='Digital Art'>Digital Art</option>
                <option value='Other'>Other</option>
              </select>
            </div>}


            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Listing Name
              </label>
              <textarea
                type='text'
                id='name'
                name='name'
                className='border rounded w-full py-2 px-3 mb-2
               focus:outline-rose-900 focus:shadow-outline'
                placeholder='eg. Poppy Field'
                required
                value={ fields.name }
                onChange={ handleChange }
              ></textarea>
            </div>
            
            
            <div className='mb-4'>
              <label
                htmlFor='description'
                className='block text-gray-700 font-bold mb-2'
              >
                Description
              </label>
              <textarea
                type='text'
                id='description'
                name='description'
                className='border rounded w-full py-2 px-3 focus:outline-rose-900 focus:shadow-outline'
                rows='4'
                placeholder='Description of artwork'
                required
                value={ fields.description }
                onChange={ handleChange }
              ></textarea>
            </div>

            
            <div className='mb-4'>
              <label
                htmlFor='descriptive_words'
                className='block text-gray-700 font-bold mb-2'
              >
                Descriptive Words
              </label>
              <textarea
                type='string'
                id='descriptive_words'
                name='descriptive_words'
                className='border rounded w-full py-2 px-3 focus:outline-rose-900 focus:shadow-outline'
                rows='4'
                placeholder='Descriptive Words for artwork'
                value={ fields.descriptive_words }
                onChange={ handleChange }
              ></textarea>
            </div>


            <div className='mb-4'>
              <label
                htmlFor='price_original'
                className='block text-gray-700 font-bold mb-2'
              >
                Price for Original Artwork
              </label>
              <textarea
                type='number'
                id='price_original'
                name='original.price'
                className='border rounded w-full py-2 px-3 focus:outline-rose-900 focus:shadow-outline'
                placeholder='Original Price'
                value={ fields.original.price }
                onChange={ handleChange }>
                </textarea>
            </div>


            {<div className='mb-4'>
              <label
                htmlFor='original_available'
                className='block text-gray-700 font-bold mb-2'
              >
                Original Available
              </label>
              <select
                id='original_available'
                name='original.available'
                className='border rounded w-full py-2 px-3 focus:outline-rose-900 focus:shadow-outline'
                required
                value={ fields.available }
                onChange={ handleChange }

              >
                <option value='true'>True</option>
                <option value='false'>False</option>
                
              </select>
            </div>}


            {<div className='mb-4'>
              <label
                htmlFor='substrate'
                className='block text-gray-700 font-bold mb-2'
              >
                Substrate
              </label>
              <select
                id='substrate'
                name='original.subtrate'
                className='border rounded w-full py-2 px-3 focus:outline-rose-900 focus:shadow-outline'
                required
                value={ fields.substrate }
                onChange={ handleChange }

              >
                <option value='N/A'>N/A</option>
                <option value='Canvas Panel'>Canvas Panel</option>
                <option value='Stretched Canvas'>Stretched Canvas</option>
                <option value='Artist Paper'>Artist Pape</option>
                <option value='Wood'>Wood</option>
                <option value='Metal'>Metal</option>
                <option value='Cardboard'>Cardboard</option>
                <option value='Glass'>Glass</option>
                <option value='Other'>Other</option>
              </select>
            </div>}

            

          <div className='mb-4'>
           
              <button
                className='bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Update Artwork
             </button>
            </div>
          
    </form>
    )
    );
};

     
    
              
    



export default ArtworkEditForm;
