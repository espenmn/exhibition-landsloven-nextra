import Image from 'next/image'

const Quoter = ({  image, alt, quote, name, worktitle }: {  image?: string, alt?: string, tag?: string, quote?: string, name?: string, worktitle?: string }) => {

  return (
    // Layout 1 if iamge exists
    <div>
    {image ? (
     <div class="bg-slate-100 flex flex-wrap w-full rounded type-card overflow-hidden shadow-lg">

         <figure class="w-1/3 dark:bg-slate-800">
          <Image
            src={image}
            alt={alt}
            width={384}
            height={512}
            class="w-auto h-24 xmd:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover]" 
          />
         </figure>
         <div class="grow w-2/3 p-6 text-center md:text-left space-y-4 bg-white">
             <p class="font-serif text-2xl font-medium dark:text-slate-100">
               {quote}
             </p>
             
             <div className="text-right text-red-700 dark:text-sky-400">
               {name}  
             </div>
             <div class="text-slate-700 dark:text-slate-400">
               {worktitle}
             </div> 
         </div> 
     </div>
     ) : (
      <div class="bg-slate-100 flex flex-wrap w-full">

         <div class="grow p-6 text-center md:text-left space-y-4  bg-red-700 xbg-sky-500 text-white dark:bg-slate-100 rounded-md">
             <p class="text-lg font-medium">
               {quote}
             </p>
             
             <div class="text-right text-sky-100 dark:text-sky-400">
               {name}
             </div>
             <div class="text-right text-sky-50 dark:text-slate-400">
               {worktitle}
             </div> 
         </div> 
     </div>
    )}
    </div>

  );
};

export default Quoter;
