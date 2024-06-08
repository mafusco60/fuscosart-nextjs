import Image from 'next/image';

const ArtworkHeaderImage = ({ image }) => {
    return (
       
        <section>
        <div className="container-sm m-auto bg-rose-50 py-10 ">
          <div className="grid grid-cols-1">
            <Image
              src={image}
              alt=""
              className="object-contain h-auto w-full"
              width={0}
              height={0}
            sizes='100vw'
            priority={true}
            />
          </div>
        </div>
      </section> 
        
    );
};
export default ArtworkHeaderImage;