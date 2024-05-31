import Image from 'next/image'
import Link from 'next/link';

// image should have width / height (but we dont know that, so we need to set fill or height 0 (?)



interface CardProps {
  title: string;
  ingress?:string;
  imageurl?: string;
  alt?: string;
}

 
// TO DO: Deafault image or 'check if it exists)




const Card = (props) => {
  const { path='', title, ingress = '', alt='bilde',  image = '' } = props;
 
  return (
      <article key={path} className="rounded type-card overflow-hidden shadow-lg hover:shadow-md dark:pb-0 dark:bg-ll-blue-950" > 
        <Link href={path} > 
       
          <Image
            src={image}
            alt={alt}
            width={0}
            height={0}
            sizes="50vw"
            className="w-full object-cover aspect-[9/7] min-h-[120px] max-h-[250px]"
          />
 
        <div className="px-4 pt-2 pb-4 dark:px-4 pt-0 pb-0">
          <h1 className="nx-mt-2 text-[1.3em] font-medium leading-tight dark:dark:text-sky-300">{ title }</h1>   
          <p className="text-xl dark:text-white">{ ingress }</p>
        
        </div>

      </Link>
      </article>
    );
  };
  
  export default Card;
    
    
   
  