import Image from 'next/image';

const ArtworkHeaderImage = ({ image }) => {
    return (
       
        <section>
        <div className="container-xl m-auto">
          <div className="grid grid-cols-1">
            <Image
              src={image}
              alt=""
              className="object-cover h-[1000px] w-full"
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