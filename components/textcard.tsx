
const TextCard = ({ title, bodytext  }: { title?: string,  bodytext?: string }) => {
  return (
    <div
      class="block rounded-lg bg-yellow-400 p-8 text-black dark:bg-surface-dark dark:text-white max-w rounded  shadow-lg">
      <h3 class="mb-2 text-xl font-medium leading-tight">{title}</h3>
      <p class="mb-4 text-base dark:text-white">
        {bodytext}
      </p>
    </div>
    );
  };
  
  export default TextCard;
  