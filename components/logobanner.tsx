
import Image from 'next/image'


const LogoBanner = ({ imageurl, alttext, title, desc }: { obj?: object, imageurl?: string, alttext?: string,  title?: string, desc?: string  }) => {
return (
    <div class="my-4 flex flex-wrap justify-items-stretch divide-x divide-none sm:divide-solid lg:divide-solid divide-black divide-x-1">
        <div class="text-left flex-1">
            <h1 class="my-2 font-sans font-black text-2xl sm:text-xl lg:text-4xl text-left">{title}</h1>
            <p class="my-2">{desc}</p>
        </div>
        <div class="xgrow-0 sm:pl-5">
            <Image 
                      src={imageurl} 
                      alt='{alttext}' 
                      width={300} 
                      height={300} 
                      class="w-full object-cover aspect-[1/1]" 
                  />
         
        </div>
    </div>
        
         
   );
};
        
 
  

export default LogoBanner;