'use client'
import { useState, useEffect } from 'react';

const ArtworkAddForm = () => {
    const [mounted, setMounted] = useState(false);
    const [fields, setFields] = useState({}) // rest of fields
      
    useEffect(() => {
      setMounted(true);
    }, []);
  
    const handleChange = () => {};
    const handleAmenitiesChange = () => {};
    const handleImageChange = () => {};

  return (
<form>
            <h2 className='text-3xl text-center font-semibold mb-6 text-rose-950'>
              Add Artwork
            </h2>
            <div className='mb-4'>
              <label
                htmlFor='artwork_type'
                className='block text-gray-700 font-bold mb-2'
              >
                Artwork Type
              </label>
              <select
                id='artwork_type'
                name='artwork_type'
                className='border rounded w-full py-2 px-3'
                required
              >
                <option value='Graphite Drawing'>Graphite Drawing</option>
                <option value='Colored Pencil Drawing'>Colored Pencil</option>
                <option value='Charcoal Drawing'>Charcoal Drawing</option>
                <option value='Oil Pastels'>Oil Pastels</option>
                <option value='Pastels'>Pastels</option>
                <option value='Alcohol Markers'>Alcohol Markers</option>
                <option value='Oil Painting'>Oil ainting</option><option value='Pastels'>Room</option>
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
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='eg. Poppy Field'
                required
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
                id='description'
                name='description'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='Description of your artwork'
              ></textarea>
            </div>

            
             

            
              

            

            <div className='mb-4 bg-rose-50 p-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Rates (Leave blank if not applicable)
              </label>
              <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
                <div className='flex items-center'>
                  <label htmlFor='weekly_rate' className='mr-2'>
                    Weekly
                  </label>
                  <input
                    type='number'
                    id='weekly_rate'
                    name='rates.weekly'
                    className='border rounded w-full py-2 px-3'
                  />
                </div>
                <div className='flex items-center'>
                  <label htmlFor='monthly_rate' className='mr-2'>
                    Monthly
                  </label>
                  <input
                    type='number'
                    id='monthly_rate'
                    name='rates.monthly'
                    className='border rounded w-full py-2 px-3'
                  />
                </div>
                <div className='flex items-center'>
                  <label htmlFor='nightly_rate' className='mr-2'>
                    Nightly
                  </label>
                  <input
                    type='number'
                    id='nightly_rate'
                    name='rates.nightly'
                    className='border rounded w-full py-2 px-3'
                  />
                </div>
              </div>
            </div>

            

            <div className='mb-4'>
              <label
                htmlFor='images'
                className='block text-gray-700 font-bold mb-2'
              >
                Images (Select up to 4 images)
              </label>
              <input
                type='file'
                id='images'
                name='images'
                className='border rounded w-full py-2 px-3'
                accept='image/*'
                multiple
                required
              />
            </div>

            <div>
              <button
                className='bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
                <i className='fas fa-plus-circle mr-2'></i> Add Artwork
              </button>
            </div>
            </form>
                
    );
}


export default ArtworkAddForm;
