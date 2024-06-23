import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

const ArtworkImages = ({ images }) => {
  return (
    <Gallery>
      <section className="bg-blue-50 p-4">
        <div className="container mx-auto">
          {images.length === 1 ? (
            <Item
              original={images[0]}
              thumbnail={images[0]}
              width="1000"
              height="600"
            >
              {({ ref, open }) => (
                <Image
                  ref={ref}
                  onClick={open}
                  src={images[0]}
                  alt=""
                  className="object-cover h-[400px] mx-auto rounded-xl"
                  width={1800}
                  height={400}
                  priority={true}
                />
              )}
            </Item>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`
                  ${
                    images.length === 3 && index === 2
                      ? "col-span-2"
                      : "col-span-1"
                  }
                `}
                >
                  <Item
                    original={image}
                    thumbnail={image}
                    width="1000"
                    height="600"
                  >
                    {({ ref, open }) => (
                      <Image
                        ref={ref}
                        onClick={open}
                        src={image}
                        alt=""
                        className="object-cover h-[400px] w-full rounded-xl"
                        width={0}
                        height={0}
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

/* import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

const ArtworkImages = ({ images }) => {
  return (
    <Gallery>
      <section className="bg-cyan-50 p-4">
        <div className="container mx-auto"> */
{
  /*  {images.length === 1 ? (
            <Item original={images[0]}
            thumbnail={images[0]}
            width='800'
            height='1000'
            >
              {({ref, open}) => (
                <Image
              ref={ref}
              onClick={open}
              src={images[0]}
              alt=''
              className='object-cover  mx-auto rounded-xl'
              width={400}
              height={1000}
              priority={true}
            />
              )}
            </Item>
            
          ) : */
}
{
  /* <div className="text-center ">
            <div className={`grid grid-cols-3 gap-4`}>
              {images.map((image, index) => (
                <div
                  key={index} */
}
/* className={`${
                    images.length === 3 && index === 2
                      ? 'col-span-1'
                      : 'col-span-1'
                  }`} */
/*  >
                  <Item
                    original={image}
                    thumbnail={image}
                    width="800"
                    height="1000"
                  >
                    {({ ref, open }) => (
                      <Image
                        ref={ref}
                        onClick={open}
                        src={image}
                        alt=""
                        className="object-contain  w-full rounded-xl"
                        width={400}
                        height={1000}
                        priority={true}
                      />
                    )}
                  </Item>
                </div>
              ))}
            </div>
            {/*  )} */
/*  </div>
        </div>
      </section>
    </Gallery>
  );
};

export default ArtworkImages;
 */
