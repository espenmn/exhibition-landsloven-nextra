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
  const { path, title, ingress = '', alttext='bilde',  image = '' } = props;
 
  return (
      <article className="rounded type-card overflow-hidden shadow-lg bg-white dark:bg-slate-200" >
        <Link href={path} > 

 
          <Image
            src={image}
            alt={alttext}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full object-cover aspect-[9/7] min-h-[100px]"
          />
 
        <div className="p-4">
          <h1 className="nx-mt-2 nx-text-3xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100">{ title }</h1>   
          <p className="text-xl dark:text-slate-100">{ ingress }</p>
        
        </div>

      </Link>
      </article>
    );
  };
  
  export default Card;
    
    
   
  