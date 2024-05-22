import Image from 'next/image'

// image should have width / height (but we dont know that, so we need to set fill 

const Card = ({ obj, imageurl, alttext }: { obj?: object, imageurl?: string, alttext?: string  }) => {
  return (
      <article>
        <div class="max-w rounded overflow-hidden shadow-lg bg-white">
        <img class="w-full" src={imageurl} alt={alttext} />
        <Image
          src={imageurl}
          alt={alttext}
          fill={true}
        />
        <div class="p-4">
          { obj }
        </div>
      </div>
      </article>
    );
  };
  
  export default Card;
    
    
   
  