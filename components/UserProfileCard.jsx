"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import Spinner from "@/components/Spinner";
import ArtworkHeaderImage from "./ArtworkHeaderImage";
import { useParams } from "react-router-dom";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

const UserProfileCard = ({ user }) => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  // const { user } = useParams();

  useEffect(() => {
    const fetchSavedArtworks = async () => {
      try {
        const res = await fetch("/api/bookmarks/:user.id");

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
            alt="User"
          />
        </div>

        <div className="font-normal">
          <p className="text-lg">{user.username}</p>
          <p className="text-md">
            <a href={`mailto:${user.email}`} className="text-blue-500">
              {user.email}
            </a>
          </p>
          <Link href={`/users/${user._id}`}>
            <p className="text-xs mt-2 text-cyan-600">{user._id}</p>
          </Link>

          {<p className="text-sm text-cyan-400">Admin</p>}
          <section className="">
            <div className="bg-cyan-50 py-10">
              <h1 className="text-xl font-extrabold text-cyan-900 sm:text-xl md:text-xl text-center">
                Saved Artworks
              </h1>
              {artworks.length === 0 ? (
                <p>No saved artworks</p>
              ) : (
                <>
                  {artworks.map((artwork) => (
                    <ArtworkHeaderImage
                      image={artwork.images[0]}
                      // orientation={artwork.is_lands}
                      key={artwork._id}
                      alt={artwork.name}
                    />
                  ))}
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
