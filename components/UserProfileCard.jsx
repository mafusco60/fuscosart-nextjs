"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Image from "next/image";

export const dynamic = "force-dynamic";

const UserProfileCard = ({ user }) => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  // const { userId } = useParams();

  useEffect(() => {
    const fetchSavedArtworks = async () => {
      try {
        const res = await fetch(`/api/bookmarks/${user._id}`);

        if (res.status === 200) {
          const data = await res.json();
          setArtworks(data);
        } else {
          console.log(res.statusText);
          toast.error("Failed to fetch saved artworks");
        }
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch saved artworks");
      } finally {
        setLoading(false);
      }
    };
    fetchSavedArtworks();
  }, [user]);

  return (
    <>
      <div className="p-10 rounded-xl shadow-lg bg-cyan-50 text-center justify-content">
        <div>
          <Image
            src={user.image}
            className="h-26 w-26 mb-2 rounded-full mx-auto"
            width={150}
            height={150}
            alt="Profile image"
          />
        </div>

        <div className="font-normal">
          <p className="text-lg">{user.username}</p>
          <p className="text-md">
            <a href={`mailto:${user.email}`} className="text-blue-500">
              {user.email}
            </a>
          </p>

          <p className="text-xs mt-2 text-cyan-600">{user._id}</p>

          {/* {<p className="text-sm text-cyan-400">Admin</p>} */}
          <section className="">
            <div className="bg-cyan-50 pt-8">
              <h1 className="text-xl font-extrabold text-cyan-900 sm:text-xl md:text-xl text-center">
                Saved Artworks
              </h1>
              {artworks && artworks.length === 0 ? (
                <p>No saved artworks</p>
              ) : (
                <>
                  {" "}
                  <div className="grid grid-cols-3 gap-2">
                    {artworks &&
                      artworks.map((artwork, index) => (
                        <Image
                          src={artwork.images[0]}
                          className="h-26 w-26 mb-2 "
                          width={150}
                          height={150}
                          alt="Artwork image"
                          key={index}
                          priority={true}
                        />
                      ))}
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default UserProfileCard;
