import Image from 'next/image'

// image should have width / height (but we dont know that, so we need to set fill or height 0 (?)

const Card = ({ obj, imageurl, alttext }: { obj?: object, imageurl?: string, alttext?: string  }) => {
  return (
      <article>
        <div class="max-w rounded overflow-hidden shadow-lg bg-white">
 
          <Image
            src={imageurl}
            alt={alttext}
            width={0}
            height={0}
            sizes="100vw"
            class="w-full object-cover aspect-[9/7]"
          />
 
        
        <div class="p-4">
          { obj }
        </div>
      </div>
      </article>
    );
  };
  
  export default Card;
    
    
   
  