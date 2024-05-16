const HCard = ({ obj }: { obj?: object }) => {
return (
  <div class="max-w-sm w-full lg:max-w-full lg:flex my-4 max-w rounded shadow-lg" >
      <img class="w-1/3 object-cover hover:object-scale-down" src="https://i0.wp.com/www.visitfrosta.no/wp-content/uploads/2021/02/Tinghaugen-15.jpg" alt="Trell" />
      <div class=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <p class="text-sm text-gray-600 flex items-center">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
            <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>
            Fakta / Fact
          </p>
          <div>
            {obj}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HCard;
  
  
 

