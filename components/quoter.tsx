import Image from 'next/image'

const Quoter = ({  image, alt, quote, name, worktitle }: {  image?: string, alt?: string, tag?: string, quote?: string, name?: string, worktitle?: strig }) => {

  return (
     <div class="p-4">
       <figure class="md:flex max-w-5xl bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
         <Image
           src={image}
           alt={alt}
           width={384}
           height={512}
           sizes="100vw"
           class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover]" 
         />
         <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
           <blockquote>
             <p class="text-lg font-medium dark:text-slate-100">
               “Tailwind CSS is the only framework that I've seen scale
               on large teams. It’s easy to customize, adapts to any design,
               and the build size is tiny.”  / bodytext
               {quote}
             </p>
           </blockquote>
           <figcaption class="font-medium">
             <div class="text-sky-500 dark:text-sky-400">
               Sarah Dayan  // NAME
               {name}
             </div>
             <div class="text-slate-700 dark:text-slate-400">
               Staff Engineer, Algolia  // Title
               {worktitle}
             </div>
           </figcaption>
         </div>
       </figure>
     </div>
  );
};

export default Quoter;
