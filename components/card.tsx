import Image from 'next/image'
// image should have width / height (but we dont know that, so we need to set fill or height 0 (?)



interface CardProps {
  desc?:string;
  imageurl?: string;
  alttext?: string;
}

 
// TO DO: Deafault image or 'check if it exists)

const Card = (props) => {
  const { desc = '', alttext='bilde',  imageurl = '' } = props;
  return (
      <article className="rounded type-card overflow-hidden shadow-lg bg-white dark:bg-slate-200" >
 
          <Image
            src={imageurl}
            alt={alttext}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full object-cover aspect-[9/7] min-h-[100px]"
          />
 
        
        <div class="p-4">
          { desc }  
        
        </div>
      
      </article>
    );
  };
  
  export default Card;
    
    
   
  