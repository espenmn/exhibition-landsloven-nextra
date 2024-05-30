
import Image from 'next/image';
import Link from 'next/link';
import { Meta } from 'nextra';

const SubPages = ({ meta }: { meta: Meta }) => {
  const subPages = Object.entries(meta).map(([key, value], i) => {
    const title = typeof value === 'string' ? value : value.title
    const path = key
    const type = value?.type === 'separator'
     // Use image defined in meta if it exist, use the 'data' below if not (or define a fallbackimage)
    // const fallbackimage = 
    const imageurl = typeof value === 'string' ? value : value.image ||'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNnB4IiBmaWxsPSIjMzMzMzMzIj4yMDB4MjAwPC90ZXh0PiAgIAo8L3N2Zz4='; 
    const desc = typeof value === 'string' ? value : value.desc || ''
      
    // TO DO: Check what width / sizes is correct for image
    // This is stupid, but since we get the links from _meta.json it gets messy. Should be a own config file.
    if (i < 2 || type) return null

    return (
      <div
        key={path}
        className='flex flex-row gap-3 border border-gray-200'
      >
        <div className="w-1/2">
        <Link
            href={path}
          >
            <Image 
              src={imageurl} 
              alt={value.title} 
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
    )
  })

  return (
    <section className='w-full py-5'>
 
      <div className="grid gap-3 grid-cols-2 my-8">
        {subPages.map((subpage: any) => (
          subpage
        ))}
      </div>
    </section>
  );
}

export default SubPages;