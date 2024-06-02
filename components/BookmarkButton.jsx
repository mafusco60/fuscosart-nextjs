import { FaBookmark} from 'react-icons/fa';

const BookmarkButton = () => {
return <> 
<button
    className="bg-rose-800 hover:bg-rose-900 text-white 
              font-bold w-full py-2 px-4 rounded-full 
              flex items-center justify-center"
    >
    <FaBookmark className="mr-2"/>
        Bookmark Artwork
</button>
  
</>
}

export default BookmarkButton