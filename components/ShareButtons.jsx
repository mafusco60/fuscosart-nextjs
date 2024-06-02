import { FaShare } from "react-icons/fa";

const ShareButtons = () => {
  return (
    <button
              className="bg-gray-900 hover:bg-black text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
            >
              <FaShare className="mr-2"></FaShare> Share Artwork
            </button>
  )
}

export default ShareButtons