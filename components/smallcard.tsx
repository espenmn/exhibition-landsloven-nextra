import Image from 'next/image'

const SmallCard = ({ desc, imageurl, alttext, tag }: { desc?: object, imageurl?: string, alttext?: string, tag?: string }) => {

  //TO DO: Make check if 'obj' exists, if not use 'desc' from meta

  return (
     <div class="max-w-sm rounded overflow-hidden shadow-lg smallcard bg-white">
        <Image
            src={imageurl}
            alt={alttext}
            width={0}
            height={0}
            sizes="100vw"
            class="w-full object-cover aspect-[9/7]" 
          />

 
      <div class="px-6 py-4">
        {  desc }
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span> 
      </div>
    </div>
  );
};

export default SmallCard;
  
  
 