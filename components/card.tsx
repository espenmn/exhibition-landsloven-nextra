const Card = ({ obj, imageurl, alttext }: { obj?: object, imageurl?: string, alttext?: string  }) => {
  return (
      <article>
        <div class="max-w rounded overflow-hidden shadow-lg bg-white">
        <img class="w-full" src={imageurl} alt={alttext} />
        <div class="p-4">
              {  obj }
  
        </div>
      </div>
      </article>
    );
  };
  
  export default Card;
    
    
   
 