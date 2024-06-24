import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  FaTimes,
  FaCheck,
  FaPaperPlane,
  FaBookmark,
  FaShare,
  FaMapMarker,
} from "react-icons/fa";
import { fetchArtwork } from "@/utils/requests";
// import ArtworkHeaderImage from "@/components/ArtworkHeaderImage";
import Spinner from "@/components/Spinner";

const ArtworkDetails = ({ artwork }) => {
  return (
    <>
      <main>
        <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
          <div className="text-gray-500 mb-4">{artwork.type}</div>
          <h1 className="text-3xl font-bold mb-4">{artwork.name}</h1>

          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-lg font-bold mb-6">Description & Details</h3>
            <div className="flex justify-center gap-4 text-cyan-500 mb-4 text-xl space-x-9">
              <p className="text-gray-500 mb-4">{artwork.description}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mt-6 text-center">
            <h1 className="text-lg font-bold"></h1>
            {!artwork.orig_avail ? (
              <div className="flex items-center justify-center gap-4 text-cyan-500 mb-4 text-xl">
                <FaTimes />
                <p className="text-gray-500"> Original: Not Available</p>

                {artwork.is_lands !== null && artwork.is_lands === true ? (
                  <p> Landscape </p>
                ) : (
                  <p>Portrait</p>
                )}
              </div>
            ) : (
              <div className="text-cyan-500  text-xl">
                <FaCheck className="inline" />
                <p className="inline text-gray-500 font-bold">
                  {" "}
                  Original: Available
                </p>
                <p className="text-gray-500">Price: ${artwork.orig_price}</p>
                <p className="text-gray-500">Size: {artwork.orig_dimen}</p>
                <p className="text-gray-500 pb-5">
                  {" "}
                  Substrate: {artwork.orig_subst}
                </p>
                <div>
                  {artwork.is_lands !== null && artwork.is_lands === true ? (
                    <p> Landscape </p>
                  ) : (
                    <p>Portrait</p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row justify-around">
            <div
              className="flex items-center justify-center mb-4 
                    border-b border-gray-200 md:border-b-0 pb-4 md:pb-0"
            >
              <div className="text-2xl font-bold text-cyan-500"></div>
            </div>
          </div>
        </div>

        {
          <div
            className="bg-white p-20 rounded-lg shadow-md 
                mt-6"
          >
            <h3
              className="text-lg text-center font-bold my-10 bg-cyan-800 
                  text-white p-4 rounded-lg"
            >
              <Link href={`/artworks/${artwork._id}/options`}>
                Prints: Prices & Options
              </Link>
            </h3>
          </div>
        }

        <h3
          className="text-lg text-center font-bold my-10 bg-cyan-800 
                  text-white p-4 rounded-lg"
        >
          <Link href={`/artworks/${artwork._id}/edit`}>Edit</Link>
        </h3>
      </main>
    </>
  );
};

export default ArtworkDetails;
