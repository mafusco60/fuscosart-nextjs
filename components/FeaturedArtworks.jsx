import { fetchArtworks } from "@/utils/requests";
import FeaturedArtworkCard from "./FeaturedArtworkCard";
export const dynamic = "force-dynamic";
const FeaturedArtworks = async () => {
  const artworks = await fetchArtworks({ showFeatured: true });

  return (
    artworks &&
    artworks.length > 0 && (
      <section className="bg-blue-50 px-4 pt-6 pb-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-rose-700 mb-6 text-center">
            Featured Artworks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {artworks &&
              artworks.map((artwork) => (
                <FeaturedArtworkCard artwork={artwork} key={artwork._id} />
              ))}
          </div>
        </div>
      </section>
    )
  );
};

export default FeaturedArtworks;
