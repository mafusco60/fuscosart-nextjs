import Image from 'next/image';


const ArtworkImages = ({ images }) => {
    return (
      <section className='bg-rose-50 p-4'>
        <div className='container mx-auto'>
          {images.length === 1 ? (
            <Image
              src={images[0]}
              alt=''
              className='object-cover  mx-auto rounded-xl'
              width={400}
              height={1000}
              priority={true}
            />
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
                  <Image
                    src={image}
                    alt=''
                    className='object-cover  w-full rounded-xl'
                    width={400}
                    height={1000}
                    priority={true}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  };
  
  export default ArtworkImages;