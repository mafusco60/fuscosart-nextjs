import Image from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';



const ArtworkThumbnails = ({ images }) => {
    return (
      <Gallery>
      <section className='bg-rose-50 p-4'>
        <div className='container mx-auto'>
          {images.length === 1 ? (
            <Item original={images[0]}
            thumbnail={images[0]}
            width='150'
            height='200'
            >
              {({ref, open}) => (
                <Image
              ref={ref}
              onClick={open}
              src={images[0]}
              alt=''
              className='object-cover  mx-auto rounded-xl'
              width={150}
              height={200}
              priority={true}
            />
              )}
            </Item>
            
          ) : (
            <div className={`grid grid-cols-2 gap-4`}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`${
                    images.length === 3 && index === 2
                      ? 'col-span-1'
                      : 'col-span-1'
                  }`}
                >
                  <Item original={image}
                thumbnail={image}
                width='150'
                height='200'
            >
              {({ref, open}) => (
                <Image
                ref={ref}
                onClick={open}
                src={image}
                alt=''
                className='object-contain  w-full rounded-xl'
                width={150}
                height={200}
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
  
  export default ArtworkThumbnails;