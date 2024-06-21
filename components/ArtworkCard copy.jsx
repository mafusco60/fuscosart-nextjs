import Image from "next/image";
import Link from "next/link";
import { FaBookmark } from "react-icons/fa";

const ArtworkCard = ({ artwork }) => {
  const isThereAnOriginal = () => {
    const { original } = artwork;

    /* if (artwork.orig_avail === null || artwork.orig_price === null) {
      return `${"Original Not Available"}`;
    } else if (artwork.orig_avail === true && artwork.orig_price !== null) {
      return `Original - $${artwork.orig_price}`;
    } else {
      return `${"Original Not Available"}`;
    } */
  };

  return (
    //experimental
    (
      <div class="relative group">
        <Image src={artwork.images[0]} alt="" class="w-72" />
        <div class="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
          <div class="flex justify-between w-full">
            <div class="font-normal">
              <p class="text-sm">{artwork.type}</p>
              <p class="text-xs">{artwork.name}</p>
            </div>
            <div class="flex items-center">
              <FaBookmark />{" "}
            </div>
          </div>
        </div>
      </div>
    ),
    (
      {/* <div className="rounded-xl shadow-lg bg-cyan-100 relative">
        <Image
          src={artwork.images[0]}
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          className=" w-full h-auto rounded-t-xl"
        /> */}
        // <div className="p-4">
          {/*  <div className="text-left md:text-center lg:text-left mb-6">
            <div className="text-gray-600">{artwork.type}</div>
            <h3 className="text-xl font-bold">{artwork.name}</h3>
            <div className="border border-gray-100 mb-5"></div> */}

          {/*  <div className="">
            <Link
              href={`/artworks/${artwork._id}`}
              className="flex flex-col lg:flex-row 
					justify-between h-[36px] bg-cyan-950 hover:bg-cyan-700 
						text-white px-4 py-2 mb-4 rounded-lg text-center 
						right text-sm"
            >
              Details
            </Link>
          </div> */}
          {/* <Link
						href={`/artworks/${artwork._id}/edit`}
						className=' flex flex-col lg:flex-row 
					justify-between h-[36px] bg-cyan-700 hover:bg-cyan-800 
						text-white px-4 py-2 rounded-lg text-center 
						right text-sm'
						>
				
						Edit
					</Link> */}
          {/* { </div> */}
          {/* <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-cyan-950 font-bold text-right md:text-center lg:text-right">
          {isThereAnOriginal()}
        </h3> */}
        {/* </div> */}
        
      </div>
    )
  );
};
export default ArtworkCard;
