import Searchbar from "@/components/Searchbar";
import Artworks from "@/components/Artworks";

const ArtworksPage = async () => {
  return (
    <>
      <section className="px-4 py-6">
        <div className="bg-cyan-50 py-20">
          <h1 className="text-4xl font-extrabold text-cyan-900 sm:text-5xl md:text-6xl text-center">
            Art Gallery
          </h1>
          <p className="text-lg text-center text-gray-700 mt-4">
            Explore our collection of beautiful artworks
          </p>

          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex 
				flex-col items-center"
          >
            <Searchbar />
          </div>
        </div>
      </section>

      <Artworks />
    </>
  );
};

export default ArtworksPage;
