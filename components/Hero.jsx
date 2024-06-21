import Searchbar from "@/components/Searchbar";

const Hero = () => {
  return (
    <section className="bg-cyan-800 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Find The Perfect Artwork
          </h1>
          <p className="my-4 text-xl text-white">
            Discover the perfect art that enhances your life.
          </p>
        </div>
        <Searchbar />
      </div>
    </section>
  );
};
export default Hero;
