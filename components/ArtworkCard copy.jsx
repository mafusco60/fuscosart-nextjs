import Image from "next/image";
import Link from "next/link";
import { FaBookmark } from "react-icons/fa";

const ArtworkCard = ({ artwork }) => {
  // Check for an original
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
      <div className="relative group text-center">
        <div>
          <Image
            src={artwork.images[0]}
            alt="{artwork.name}"
            width="0"
            height="0"
            sizes="100vw"
            className="  w-full h-full rounded-t-xl"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-cyan-800 opacity-0 group-hover:opacity-100 bg-opacity-40">
          <div className="flex justify-between w-full">
            <div className="font-normal">
              <p className="text-sm">"{artwork.name}"</p>
              <p className="text-xs">{artwork.type}</p>
              <p className="text-sm">{isThereAnOriginal()}</p>
            </div>
            <div className="flex items-center">
              <Link href={`/artworks/${artwork._id}`}>
                <h2 className="text-xs"> See Details </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};
export default ArtworkCard;
