'use client';
import { useState, useEffect, use } from 'react';
import { FaBookmark} from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';


const BookmarkButton = ({ artwork }) => {

    const { data: session } = useSession();
    const userId = session?.user?.id;
    
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkBookmarkStatus = async () => {
            try {
                const res = await fetch('/api/bookmarks/check',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ artworkId: artwork._id }),
            });
            if (res.status === 200){
                const data = await res.json();
                setIsBookmarked(data.isBookmarked);
            }
                
            } catch (error) {
                console.log(error);
            } 
        };
        checkBookmarkStatus();
    },[artwork._id, userId]);



    const handleClick = async () => {
        if (!userId) {
            toast.error('Please sign in to bookmark artwork');
            return;
        }
        try {
            const res = await fetch('/api/bookmarks',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ artworkId: artwork._id }),
        });
        if (res.status === 200){
            const data = await res.json();
            toast.success(data.message);
            setIsBookmarked(data.isBookmarked);
        }
            
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    }


return isBookmarked ? (
    <button 
    onClick = { handleClick }
    className="bg-rose-800 hover:bg-rose-900 text-white 
              font-bold w-full py-2 px-4 rounded-full 
              flex items-center justify-center"
    >
    <FaBookmark className="mr-2"/> Remove Bookmark
    </button>
) : (
    <button 
    onClick = { handleClick }
    className="bg-blue-800 hover:bg-blue-900 text-white 
              font-bold w-full py-2 px-4 rounded-full 
              flex items-center justify-center"
    >
    <FaBookmark className="mr-2"/> Bookmark
</button>
);
};
export default BookmarkButton;