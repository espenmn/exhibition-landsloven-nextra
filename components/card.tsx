import Image from 'next/image'

// image should have width / height (but we dont know that, so we need to set fill or height 0 (?)

const Card = ({ desc, imageurl, alttext }: { desc?: string, imageurl?: string, alttext?: string  }) => {
  return (
      <article class="max-w rounded overflow-hidden shadow-lg bg-white">
 
          <Image
            src={imageurl}
            alt={alttext}
            width={0}
            height={0}
            sizes="100vw"
            class="w-full object-cover aspect-[9/7] max-h-[500px]"
          />
 
        
        <div class="p-4">
          { desc }
        </div>
      
      </article>
    );
  };
  
  export default Card;
    
    
   
  