import Image from "next/image";
import Link from "next/link";

const FeaturedArtworkCard = ({ artwork }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md relative 
    flex flex-col md:flex-row"
    >
      <Image
        src={artwork.images[0]}
        alt={artwork.name}
        className="object-cover  rounded-t-xl md:rounded-tr-none 
        md:rounded-l-xl w-full md:w-2/5"
        width={200}
        height={300}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold">{artwork.name}</h3>
        <div className="text-gray-600 mb-4">{artwork.type}</div>
        <h3
          className="absolute bottom-[10px] left-[10px] bg-white px-4 py-1 rounded-lg 
          text-rose-700 font-bold text-right md:text-center lg:text-right"
        >
          {" "}
          {artwork.orig_avail
            ? `Original: $${artwork.orig_price}`
            : "Prints Available"}
        </h3>

        <div className="border border-gray-200 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between">
          {/* <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <i
            ></i>
            {<span className="text-blue-700"> 
              {artwork.description} </span>}
          </div> */}
          <Link
            href={`/artworks/${artwork._id}`}
            className="absolute bottom-[20px] right-[30px] 
            h-[36px] bg-cyan-700 hover:bg-blue-800 
            text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtworkCard;
