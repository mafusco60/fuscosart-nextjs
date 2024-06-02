import React from 'react'

const Searchbar = () => {
  return (
    <div><form className='mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center'>
    <div className='w-full md:w-3/5 md:pr-2 mb-4 md:mb-0'>
        <label htmlFor='media' className='sr-only'>
            Location
        </label>
        <input
            type='text'
            id='location'
            placeholder='Enter Keyword'
            className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-rose-500'
        />
    </div>
    <div className='w-full md:w-2/5 md:pl-2'>
        <label htmlFor='artwork-type' className='sr-only'>
            Artwork Type
        </label>
        <select
            id='artwork-type'
            className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-rose-500'
        >
            <option value='All'>All</option>
            <option value='Acrylic'>Acrylic Painting</option>
            <option value='Oil Painting'>Oil Painting</option>
            <option value='Digital Painting'>Digital Painting</option>
            <option value='Graphite Pencil Drawing'>
                Graphite Pencil Drawing
            </option>
            <option value='Colored Pencil Drawing'>
                Colored Pencil Drawing
            </option>
            <option value='Pastel Painting'>Pastel Painting</option>
            <option value='Mixed Media Painting'>Mixed Media</option>
            <option value='Watercolor Painting'>Watercolor Painting</option>
            <option value='Other'>Other</option>
        </select>
    </div>
    <button
        type='submit'
        className='md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-rose-800 text-white hover:bg-rose-600 focus:outline-none focus:ring focus:ring-rose-500'
    >
        Search
    </button>
</form></div>
  )
}

export default Searchbar