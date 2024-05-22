import Image from 'next/image';
import Link from 'next/link';
import { Meta } from 'nextra';

type MetaMenuItems = {
  [key: string]: {
    title: string;
    href: string;
  };
};

const MainPages = ({ meta }: { meta: Meta }) => {
  const items = meta['bolkene'].items;
  const subPages = Object.entries(items as MetaMenuItems).map(([key, value], i) => {
    const title = value.title
    const path = value.href

    return (
      <div
        key={path}
        className='flex flex-row gap-3 p-4 border border-red-500'
      >
        <Image src={'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNnB4IiBmaWxsPSIjMzMzMzMzIj4yMDB4MjAwPC90ZXh0PiAgIAo8L3N2Zz4='} alt={value.title} width={200} height={200} />
        <Link
          href={path}
          className='nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]'
        >
          {title}
        </Link>
      </div>
    )
  })

  return (
    <section className='w-full py-5'>
      <div className='grid grid-cols-2 gap-3'>
        {subPages.map((subpage: any) => (
          subpage
        ))}
      </div>
    </section>
  );
}

export default MainPages;
