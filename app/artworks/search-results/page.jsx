"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import ArtworkCard from "@/components/ArtworkCard";
import Searchbar from "@/components/Searchbar";
import Spinner from "@/components/Spinner";
export const dynamic = "force-dynamic";
const SearchResultsPage = () => {
  const searchParams = useSearchParams();

  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  const keywords = searchParams.get("keywords");
  const artworkType = searchParams.get("artworkType");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await fetch(
          `/api/artworks/search?keywords=${keywords}&artworkType=${artworkType}`
        );

        if (res.status === 200) {
          const data = await res.json();
          setArtworks(data);
        } else {
          setArtworks([]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [keywords, artworkType]);

  return (
    <>
      <section className="bg-cyan-100 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
          <Searchbar />
        </div>
      </section>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <section className="px-4 py-6">
          <div className="container-xl lg:container m-auto px-4 py-6">
            <Link
              href="/artworks"
              className="flex items-center text-cyan-500 hover:underline mb-3"
            >
              <FaArrowAltCircleLeft className="mr-2 mb-1" /> Back To Artworks
            </Link>
            <h1 className="text-2xl mb-4">Search Results</h1>
            {artworks && artworks.length === 0 ? (
              <p>No search results found</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {artworks.map((artwork) => (
                  <ArtworkCard key={artwork._id} artwork={artwork} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};
export default SearchResultsPage;
