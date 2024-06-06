'use client'
import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useRouter} from 'next/navigation'

const Searchbar = () => {
    const [artworkType , setArtworkType] = useState('All')
    const [keywords, setKeywords] = useState('')

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();

if (keywords === '' && artworkType === 'All') {
    router.push('/artworks');

} else {
    const query = `?keywords= ${keywords }&artworkType=${artworkType}`;
    router.push('/artworks/search-results(query)');
}
    };  
    


  return (
    <div><form onSubmit={ handleSubmit } className='mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center'>
    <div className='w-full md:w-1/3 md:pr-2 mb-4 md:mb-0'>
        <label htmlFor='keywords' className='sr-only'>
            Keywords
        </label>
        <input
            type='text'
            id='keywords'
            placeholder= 'Search by Keywords'
                
            className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-rose-500'
        
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)} 
/>
    </div>
    <div className='w-full md:w-1/3 md:pl-2 '>
        <label htmlFor='artwork-type' className='sr-only'>
            Artwork Type
        </label>
        <select
            id='artwork-type'
            className='w-full px-4 py-3 rounded-lg bg-white 
            text-gray-800 focus:outline-none focus:ring 
            focus:ring-rose-500'
        
            value={artworkType}
            onChange={(e) => setArtworkType(e.target.value)} >
        
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
    ><span> <FaSearch className='inline-block mr-2' /> </span>
        Search
    </button>
</form></div>
  )
}

export default Searchbar