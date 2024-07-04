import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
export const dynamic = "force-dynamic";

const ArtworkImages = ({ images }) => {
  return (
    <Gallery>
      <section className="bg-blue-50 p-4">
        <div className="container mx-auto">
          {images && images.length === 1 ? (
            <Item
              original={images[0]}
              thumbnail={images[0]}
              width="500"
              height="600"
            >
              {({ ref, open }) => (
                <Image
                  ref={ref}
                  onClick={open}
                  src={images[0]}
                  alt="artwork image"
                  className="object-cover h-[400px] mx-auto rounded-xl"
                  width="500"
                  height="600"
                  priority={true}
                />
              )}
            </Item>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {images &&
                images.map((image, index) => (
                  <div
                    key={index}
                    className={`
                  ${
                    images && images.length === 3 && index === 2
                      ? "col-span-2"
                      : "col-span-1"
                  }
                `}
                  >
                    <Item
                      original={image}
                      thumbnail={image}
                      width="500"
                      height="600"
                    >
                      {({ ref, open }) => (
                        <Image
                          ref={ref}
                          onClick={open}
                          src={image}
                          alt="image"
                          className="object-cover  rounded-xl"
                          width="500"
                          height="600"
                          sizes="100vw"
                          priority={true}
                        />
                      )}
                    </Item>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>
    </Gallery>
  );
};
export default ArtworkImages;
