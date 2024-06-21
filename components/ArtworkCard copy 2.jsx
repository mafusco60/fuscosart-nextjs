import Image from "next/image";
import Link from "next/link";
import { FaBookmark } from "react-icons/fa";

const ArtworkCard = ({ artwork }) => {
  const isThereAnOriginal = () => {
    const { original } = artwork;

    if (artwork.orig_avail === null || artwork.orig_price === null) {
      return `${"Original Not Available"}`;
    } else if (artwork.orig_avail === true && artwork.orig_price !== null) {
      return `Original - $${artwork.orig_price}`;
    } else {
      return `${"Original Not Available"}`;
    }
  };

  return (
    <div className="rounded-xl shadow-lg bg-cyan-100 relative">
      <div className="">
        <Link
          href={`/artworks/${artwork._id}`}
          className="flex flex-col lg:flex-row 
					justify-between h-[36px] bg-cyan-950 hover:bg-cyan-700 
						text-white px-4 py-2 mb-4 rounded-lg text-center 
						right text-sm"
        >
          Details
        </Link>
      </div>
      <div className="relative group text-center">
        <Image
          src={artwork.images[0]}
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          className="  w-full h-auto rounded-t-xl"
        />
        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-cyan-800 opacity-0 group-hover:opacity-100 bg-opacity-40">
          <div className="flex justify-between w-full">
            <div className="font-normal">
              <p className="text-sm">"{artwork.name}"</p>
              <p className="text-xs">{artwork.type}</p>
              <p className="text-sm">{isThereAnOriginal()}</p>
            </div>
            <div className="flex items-center">
              <FaBookmark />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArtworkCard;
