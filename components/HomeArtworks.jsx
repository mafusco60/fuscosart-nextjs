import Link from "next/link";
import ArtworkCard from "@/components/ArtworkCard";
import { fetchArtworks } from "@/utils/requests";

const HomeArtworks = async () => {
  const data = await fetchArtworks();
  const recentArtworks = data.artworks;
  /* .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 3); */
  /* .sort(() => Math.random() - Math.random())
    .slice(0, 3); */

  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-cyan-500 mb-6 text-center">
            Recent Artworks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentArtworks && recentArtworks.length === 0 ? (
              <p>No Artworks Found</p>
            ) : (
              recentArtworks.map((artwork) => (
                <ArtworkCard key={artwork._id} artwork={artwork} />
              ))
            )}
          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/artworks"
          className="block bg-cyan-800 text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Artworks
        </Link>
      </section>
    </>
  );
};
export default HomeArtworks;
