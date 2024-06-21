import Image from "next/image";

const ArtworkHeaderImage = ({ image }) => {
  return (
    <section>
      <div className="container-sm m-auto bg-cyan-50 py-10 ">
        <div className="grid grid-cols-1">
          <Image
            src={image}
            alt=""
            className="object-contain h-25 w-auto 
              m-auto xl:h-25"
            width={0}
            height={200}
            sizes="100vw"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};
export default ArtworkHeaderImage;
