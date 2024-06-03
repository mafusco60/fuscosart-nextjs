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
              Update Artwork
          </h2>
          <div className='mb-4'>
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
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Listing Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='border rounded w-full py-2 px-3 mb-2 focus:outline-rose-900 focus:shadow-outline'
                placeholder='eg. Poppy Field'
                required
                value={ fields.name }
                onChange={ handleChange }
              />
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
                type='text'
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
              <input
                type='number'
                id='price_original'
                name='original.price'
                className='border rounded w-full py-2 px-3 focus:outline-rose-900 focus:shadow-outline'
                placeholder='Original Price'
                value={ fields.original.price }
                onChange={ handleChange }
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='original_available'
                className='block text-gray-700 font-bold mb-2'
              >
                Original Available?
              </label>
            <input
                    type='boolean'
                    id='original_available'
                    name='original.available'
                    className='border rounded w-full py-2 px-3 focus:outline-rose-900 focus:shadow-outline'
                    placeholder='true or false'
                    value= {fields.original.available}    
                    onChange={ handleChange }
                    
                  />

            </div>

            
            <div>
              <button
                className='bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Update Artwork
{/*                 <i className='fas fa-plus-circle mr-2'></i> Edit Artwork
 */}              </button>
            </div>
            
          
    </form>
    
  ) )              
    
}


export default ArtworkEditForm;