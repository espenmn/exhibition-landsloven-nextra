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
  const { path='', title, ingress = '', alt='',  image = '' } = props;
  
  return (
      <article key={path} className="rounded type-card overflow-hidden mb-1 sm:my-0 shadow-lg hover:shadow-md dark:pb-0 dark:bg-ll-blue-950" > 
        <Link href={path} > 
       
          <Image
            src={image}
            alt={alt ? alt : title}
            width={0}
            height={0}
            sizes="50vw"
            className="w-full object-cover aspect-[9/7] min-h-[120px] max-h-[250px]"
          />
        </Link>
 
        <div className="px-4 pt-2 pb-4 dark:px-4 pt-0 pb-0">
        <Link href={path} > 
          <h1 className="nx-mt-2 font-serif text-[1.3em] font-medium leading-tight text-sky-700 dark:dark:text-sky-300 hover:underline">{ title }</h1>   
        </Link>
          <p className="text-xl dark:text-whiten leading-tight">{ ingress }</p> 
          <p className=" text-right">
            <Link className="pt-1 underline text-sky-800 font-small text-base" href={path} >Les mer</Link>    
          </p>    
        </div>
      </article>
    );
  };
  
  export default Card;
    
    
   
  