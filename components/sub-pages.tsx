
import Image from 'next/image';
import Link from 'next/link';
import { Meta } from 'nextra';
import SubBox from  './subbox';
import Card from  './card';

    

const componentsMap = {
  SubBox: SubBox,
  Card: Card,
};

const SubPages = ({ meta }: { meta: Meta }) => {
  const subPages = Object.entries(meta).map(([key, value], i) => {
    const title = typeof value === 'string' ? value : value.title
    const path = key
    const type = value?.type === 'separator'
     // Use image defined in meta if it exist, use the 'data' below if not (or define a fallbackimage)
    // const fallbackimage = 
    const imageurl = typeof value === 'string' ? value : value.image ||'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNnB4IiBmaWxsPSIjMzMzMzMzIj4yMDB4MjAwPC90ZXh0PiAgIAo8L3N2Zz4='; 
    const desc = typeof value === 'string' ? value : value.desc || ''
    const komponent = typeof value === 'string' ? value : value.komponent || 'SubBox'
      
    // TO DO: Check what width / sizes is correct for image
    // This is stupid, but since we get the links from _meta.json it gets messy. Should be a own config file.
    if (i < 2 || type) return null

    // TO DO: SET OPTION  to change layout (SubBox to something else)

    
    // Dynamically get the component based on the value of myvalue
    const ComponentToRender = componentsMap[komponent];
  
    return (
      // TO DO: Get rid of DIV
      <div>
 
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
    <section className='w-full py-5'>
 
      <div className="xflex grid gap-3 xgrid-cols-2 my-8">
        {subPages.map((subpage: any) => (
          subpage
        ))}
      </div>
    </section>
  );
}

export default SubPages;
