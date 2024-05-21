const Parallax = ({ obj }: { obj?: object }) => {
return ( 
  <div> 
  <div
    class="mx-auto h-20 max-w xoverflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg"
    style={{
      backgroundImage: `url(${obj.metadata.imageurl})`,
      height: "666px",
    }} 
    >

      <div class="my-4">
        <div class="bg-white p-4 sm:p-8">
          { <obj.default />} 
        </div>
       </div>
    </div>


    <section class="pt-40 pb-32 relative mx-auto h-20 max-w xoverflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg mt-40">
      <div class="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-50 bg-fixed" 
      style={{
        backgroundImage: `url(${obj.metadata.imageurl})`,
        }} > 
      </div>
       <div class="text-black text-3xl text-center relative p-8">{ <obj.default />} </div>
      </section>
      <section class="h-[500px]" />
    </div>
  );
};

export default Parallax;
  
  
 