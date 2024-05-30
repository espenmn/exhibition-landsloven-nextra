import Image from 'next/image';
import Link from 'next/link'; 
import { useRouter } from 'next/router';

type MenuItems = {
  [key: string]: {
    title: string;
    href: string;
    ingress?: string;
    image?: string;
    class?: string;
  };
};


const SubBox = ({ items }: { items: MenuItems }) => {
  
  if (!items) {
    return null;
  }
  // Get the current locale so we can display the correct language
  const { locale } = useRouter();

  const subPages = Object.entries(items).map(([key, value], i) => {
    const title = value.title[locale]
    const path = value.href
    const image = value.image
    const alt = value.title


    // Can use "generic" Card component here
    return (
      <div
        key={path}
        className='flex flex-row gap-3 border border-gray-200 bg-white'
      >
      {image && (
        <div className="w-1/2">
          
          <Link
              href={path}
            >
              <Image 
                src={image} 
                alt={title} 
                width={0} 
                height={0} 
                sizes="100vw"
                className="w-full object-cover aspect-[9/7] min-h-[180px]"
            />
          </Link>
        </div>
        )}
        <div className="w-1/2 m-2">
          <Link
            href={path}
          >
            <h2 className='py-1 text-xl  nx-font-bold hover:underline text-red-700 hover:text-red-800'>{title}</h2> 
          </Link>
          <p className="text-s">{value.ingress ? <p className='text-white'>{value.ingress[locale]}</p> : null}</p>
          
          </div>
          </div>
    )
  })

  return (
    <section className='w-full py-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {subPages.map((subpage: any) => (
          subpage
        ))}
      </div>
    </section>
  );
}

export default SubBox;
