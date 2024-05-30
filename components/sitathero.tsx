import Image from 'next/image';
import Container from 'components/container'

const Hero = ({ title, ingress, footer }: { title?: string, ingress?: string, footer?: string }) => {
  return (
 
      <div className="flex grid bg-orange-50 -mx-6 dm:m-0 p-8 min-h-[32vw]  sm:min-h-[25vw] sm:bg-[url('/images/banner_overlay.png')] bg-contain bg-no-repeat bg-left">
        <Container>
         <div className="flex flex-col justify-center float-right sm:w-1/2 h-auto">
  
            <h1 className='text-red-700 nx-mt-2 text-2xl sm:text-4xl dark:nx-text-slate-100 font-bold'>{title}</h1>
        
            <p className="text-black text-xl sm:text-3xl">{ingress}</p>
            <p className="text-right text-sm sm:text-base my-3"><i>{footer}</i></p> 
            <p>&nbsp;</p> 
           
         </div>
         </Container>
    
    </div>
 
  );
}

export default Hero;