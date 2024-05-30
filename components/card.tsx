import Image from 'next/image'
// image should have width / height (but we dont know that, so we need to set fill or height 0 (?)



interface CardProps {
  obj?: object;
  desc?:string;
  imageurl?: string;
  alttext?: string;
}

 
// TO DO: Deafault image or 'check if it exists)

const Card = (props) => {
  const { obj, desc = '', alttext='bilde',  imageurl = '/obj.imageurl' } = props;
  const title = obj.title
 
  return (
      <article className="rounded type-card overflow-hidden shadow-lg bg-white dark:bg-slate-200" >
 
          <Image
            src='/image.jpg'
            alt={alttext}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full object-cover aspect-[9/7] min-h-[100px]"
          />
 
        
        <div class="p-4">
    
        {  title }

        
        </div>
      
      </article>
    );
  };
  
  export default Card;
    
    
   
  