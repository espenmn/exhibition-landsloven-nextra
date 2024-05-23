import Image from 'next/image'
 
const HalfCard = ({ title, bodytext, imageurl, alttext, tag }: { title?: string, bodytext?: string, imageurl?: string, alttext?: string, tag?: string }) => {

  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <Image
            src={imageurl}
            alt={alttext}
            width={0}
            height={0}
            sizes="100vw"
            class="w-half object-cover aspect-[9/7]" 
          />

  
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
        <p class="text-gray-700 text-base">{bodytext}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span> 
      </div>
    </div>
  );
};

export default HalfCard;
  
  
 