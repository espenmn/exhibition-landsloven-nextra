const Card = ({ obj }: { obj?: object }) => {
return (
    <article>
      <div class="max-w rounded overflow-hidden shadow-lg my-4">
      <img class="w-full" src="https://i0.wp.com/www.visitfrosta.no/wp-content/uploads/2021/02/Tinghaugen-15.jpg" alt="Trell" />
      <div class="p-4">
            {  obj }

      </div>
    </div>
    </article>
  );
};

export default Card;
  
  
 