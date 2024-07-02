"use client";

"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import Spinner from "@/components/Spinner";
import ArtworkHeaderImage from "@/components/ArtworkHeaderImage";
import { useParams } from "react-router-dom";
export const dynamic = "force-dynamic";

const SavedArtworksPage = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedArtworks = async () => {
      try {
        const res = await fetch("/api/bookmarks");

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
  }, []);

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <section className="">
      <div className="bg-cyan-50 py-10">
        <h1 className="text-xl font-extrabold text-cyan-900 sm:text-xl md:text-xl text-center">
          Saved Artworks
        </h1>
        {artworks.length === 0 ? (
          <p>No saved artworks</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artworks.map((artwork) => (
              <ArtworkHeaderImage
                image={artwork.images[0]}
                // orientation={artwork.is_lands}
                key={artwork._id}
                alt="artwork image"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SavedArtworksPage;
