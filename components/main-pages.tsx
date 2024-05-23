import Image from 'next/image';
import Link from 'next/link';
import { Meta } from 'nextra';

import SubBox from  './subbox';
import Card from  './card';
import SmallCard from  './smallcard';
import HCard from  './hcard';
 
const componentsMap = {
  SubBox: SubBox,
  Card: Card,
  SmallCard, SmallCard,
  HCard, HCard
};

type MetaMenuItems = {
  [key: string]: {
    title: string;
    href: string;
    desc: string;
    imageurl: string;
    alttext: string;
    klass: string;
  };
};


 

const MainPages = ({ meta }: { meta: Meta }) => {
  const items = meta['bolkene'].items;
  const subPages = Object.entries(items as MetaMenuItems).map(([key, value], i) => {
    const title = value.title
    const path = value.href
    const type = value?.type === 'separator'
     // Use image defined in meta if it exist, use the 'data' below if not (or define a fallbackimage)
    // const fallbackimage = 
    const imageurl = typeof value === 'string' ? value : value.image ||'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNnB4IiBmaWxsPSIjMzMzMzMzIj4yMDB4MjAwPC90ZXh0PiAgIAo8L3N2Zz4='; 
    const desc = typeof value === 'string' ? value : value.desc || ''
    const klass = typeof value === 'string' ? value : value.klass || 'w-1/3'
    const komponent = typeof value === 'string' ? value : value.komponent || 'SubBox'
    const ComponentToRender = componentsMap[komponent];

    // Some logic here ?
    const klasse = klass + ' p-2'

    return (
      // TO DO: Get rid of DIV
      <div className={klasse} > 
 
      {ComponentToRender ? (
        <ComponentToRender
          title={title}
          path={path}
          desc={desc}
          imageurl={imageurl}
          alttext={title}  
        />
      ) : (
        <div>Not found</div>
      )}
    </div>
 
    )
  })

  return (
    <section className='py-5 -m-2'>
      <div className='flex flex-wrap'>
        {subPages.map((subpage: any) => (
          subpage
        ))}
      </div>
    </section>
  );
}

export default MainPages;