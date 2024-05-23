import Image from 'next/image';
import Link from 'next/link';
//probably dont need meta
// import { Meta } from 'nextra';

// NULL CHECK HERE ???
//path string or url

const SubBox= ({ title, desc, imageurl, path }: { title?: string, desc?: string, imageurl?: string, path?: string  }) => {
  return (
      <div
        key={path}
        className='flex flex-row gap-3 border border-gray-200 bg-white'
      >
        <div className="w-1/2">
        <Link
            href={path}
          >
            <Image 
              src={imageurl} 
              alt={title} 
              width={0} 
              height={0} 
              class="w-full object-cover aspect-[1/1] "
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        </div>
        <div className="w-1/2 m-2">
          <Link
            href={path}
          >
            <h2 className='py-1 text-xl  nx-font-bold hover:underline text-red-700 hover:text-red-800'>{title}</h2> 
          </Link>
          <p className="text-s">{desc}</p>
          </div>
      </div>
    );
  };

export default SubBox;
