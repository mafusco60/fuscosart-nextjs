"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { fetchUser } from "@/utils/requests";
const ArtworkCard = ({ artwork }) => {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [artworks, setArtworks] = useState([]);

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
  // check if user is admin
  useEffect(() => {
    const fetchUserData = async () => {
      if (!session) return;
      try {
        const user = await fetchUser(session.user.id);
        setUser(user);
        setIsAdmin(user.is_admin);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUserData();
  }, [session]);

  const handleDeleteArtwork = async (artworkId) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${artworkId}?`
    );

    if (!confirmed) return;
    try {
      const res = await fetch(`/api/artworks/${artworkId}`, {
        method: "DELETE",
      });

      if (res.status === 200) {
        // Remove the artwork from state
        const updatedArtworks = artworks.filter(
          (artwork) => artwork._id !== artworkId
        );

        setArtworks(updatedArtworks);

        toast.success("Artwork Deleted");
      } else {
        toast.error("Failed to delete artwork");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete artwork");
    }
  };
  return (
    <div className="rounded-xl shadow-lg bg-white ">
      <div className="relative group text-center">
        {!artwork.is_lands ? (
          // Portrait
          <div>
            <Image
              src={artwork.images[0]}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className="  w-full h-full rounded-t-xl"
            />
            <div className="rounded-lg absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-cyan-800 opacity-0 group-hover:opacity-100 bg-opacity-40">
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
        ) : (
          // Landscape

          <div>
            <Image
              src={artwork.images[0]}
              alt="{artwork.name}"
              width="600"
              height="0"
              // sizes="100vw"
              className="   absolute top-[70px]  rounded-t-xl"
            />
            <div className="rounded-lg absolute top-[255px] left-0 right-0 p-2 px-4 text-white duration-500 bg-cyan-800 opacity-0 group-hover:opacity-100 bg-opacity-40">
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
        )}
        {isAdmin && (
          <>
            <div className="absolute top-0 right-0 p-1 px-3 text-white bg-cyan-800 rounded-xl border border-white">
              <Link href={`/artworks/${artwork._id}/edit`}>
                <h2 className="text-md "> Edit </h2>
              </Link>
            </div>

            <button
              onClick={() => handleDeleteArtwork(artwork._id)}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              type="button"
            >
              Delete
            </button>
            {/* </div> */}
          </>
        )}
      </div>
    </div>
  );
};
export default ArtworkCard;
