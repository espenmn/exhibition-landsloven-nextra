const SmallCard = ({ obj, image, alt, tag }: { obj?: object, image?: string, alt?: string, tag?: string }) => {

  return (
     <div class="max-w-sm rounded overflow-hidden shadow-lg smallcard">
        <img class="w-full object-cover aspect-[9/7]" src={image} alt={alt} />
      <div class="px-6 py-4">
        {  obj }
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span> 
      </div>
    </div>
  );
};

export default SmallCard;
  
  
 