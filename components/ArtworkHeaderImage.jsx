import Image from "next/image";

const ArtworkHeaderImage = ({ image }) => {
  return (
    <section>
      <div className="container-sm m-auto bg-cyan-50  ">
        {/* <div className="grid grid-cols-1 md:grid-cols-3"> */}
        <Image
          src={image}
          alt="Artwork"
          className="object-contain h-80 w-auto 
              m-auto md:h-80 md:w-100"
          width={0}
          height={0}
          sizes="100vw"
          priority={true}
        />
      </div>
      {/* </div> */}
    </section>
  );
};
export default ArtworkHeaderImage;
