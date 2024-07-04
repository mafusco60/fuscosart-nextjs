"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import Spinner from "@/components/Spinner";
import ArtworkHeaderImage from "./ArtworkHeaderImage";
import { useParams } from "react-router-dom";
export const dynamic = "force-dynamic";

const ArtworksSaved = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useParams();

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

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <section className="">
      <div className="bg-cyan-50 py-10">
        <h1 className="text-xl font-extrabold text-cyan-900 sm:text-xl md:text-xl text-center">
          Saved Artworks
        </h1>
        {artworks && artworks.length === 0 ? (
          <p>No saved artworks</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artworks &&
              artworks.map((artwork) => (
                <ArtworkHeaderImage
                  image={artwork.images[0]}
                  // orientation={artwork.is_lands}
                  key={artwork._id}
                  alt="{artwork.name}"
                />
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ArtworksSaved;
