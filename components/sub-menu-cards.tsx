import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import SubBox from  './subbox';
import Card from  './card'; 
 
  

// const componentsMap = {
//   SubBox: SubBox,
//   Card: Card,
//   SmallCard, SmallCard,
//   HCard, HCard
// };


type MenuItems = {
  [key: string]: {
    title: string;
    href: string;
    ingress?: string;
    image?: string;
    class?: string;
  };
};

const SubMenuCards = ({ items, columns }: { items: MenuItems, columns?: string }) => {

  const maxcolumns = '3';

  if (!items) {
    return null;
  }
  // Get the current locale so we can display the correct language
  const { locale } = useRouter();

  const subPages = Object.entries(items).map(([key, value], i) => {
    const title = value.title[locale]
    const path = value.href
    const image =  value.image ? value.image : '/images/dummy_lands_b.jpg';
    const ingress = value.ingress ? value.ingress[locale] : undefined

    // Can use "generic" Card component here
    return (
      
      <Card
          image={image}
          alt={title}
          title={title}
          ingress={ingress}
          path={path}
        /> 
    )
  })

  return (
    <section className='w-full py-5'>
      <div className={`flex grid grid-cols-1 md:grid-cols-${columns} gap-5`}>
        {subPages.map((subpage: any) => (
          subpage
        ))}
      </div>
    </section>
  );
}

export default SubMenuCards;
