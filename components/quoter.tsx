import Image from 'next/image'

const Quoter = ({  image, alt, quote, name, worktitle }: {  image?: string, alt?: string, tag?: string, quote?: string, name?: string, worktitle?: strig }) => {

  return (
     <div class="bg-slate-100 flex flex-wrap w-full">
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
             <p class="text-lg font-medium dark:text-slate-100">
               {quote}
             </p>
             
             <div class="text-sky-500 dark:text-sky-400">
               {name}
             </div>
             <div class="text-slate-700 dark:text-slate-400">
               {worktitle}
             </div> 
         </div> 
     </div>
  );
};

export default Quoter;
