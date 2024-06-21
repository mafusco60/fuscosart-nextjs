"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchArtwork } from "@/utils/requests";
import ArtworkHeaderImage from "@/components/ArtworkHeaderImage";
import ArtworkDetails from "@/components/ArtworkDetails";
import ArtworkImages from "@/components/ArtworkImages";
import BookmarkButton from "@/components/BookmarkButton";
import ArtworkContactForm from "@/components/ArtworkContactForm";
import ShareButtons from "@/components/ShareButtons";
import Spinner from "@/components/Spinner";
import { FaArrowAltCircleLeft, FaArrowCircleLeft } from "react-icons/fa";

const ArtworkPage = () => {
  const { id } = useParams();

  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworkData = async () => {
      if (!id) return;
      try {
        const artwork = await fetchArtwork(id);
        setArtwork(artwork);
      } catch (error) {
        console.error("Error fetching artwork:", error);
      } finally {
        setLoading(false);
      }
    };

    if (artwork === null) {
      fetchArtworkData();
    }
  }, [id, artwork]);

  if (!artwork && !loading) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Artwork Not Found
      </h1>
    );
  }

  return (
    <>
      {loading && <Spinner loading={loading} />}
      {!loading && artwork && (
        <>
          <ArtworkHeaderImage image={artwork.images[0]} />

          <section>
            <div className="container m-auto py-6 px-6">
              <Link
                href="/artworks"
                className="text-cyan-500 
                hover:text-cyan-600 flex items-center"
              >
                <FaArrowAltCircleLeft className="mr-2" />
                Back to Artworks
              </Link>
            </div>
          </section>

          <section className="bg-cyan-50">
            <div className="container m-auto py-10 px-6">
              <div
                className="grid grid-cols-1 md:grid-cols-65/35 
              w-full gap-6"
              >
                <ArtworkDetails artwork={artwork} />

                <aside className="space-y-4">
                  <BookmarkButton artwork={artwork} />
                  <ShareButtons artwork={artwork} />
                  <ArtworkContactForm artwork={artwork} />
                </aside>

                <ArtworkImages images={artwork.images} />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default ArtworkPage;
