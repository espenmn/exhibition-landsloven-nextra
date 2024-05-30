interface SpacerProps {
  height: string;
  width: string;
}

const Spacer: React.FC<SpacerProps> = (props) => {
  const { height = 24, width = 4 } = props;

  return (
    <div className={`h-${String(height)} w-${String(height)}`} > 
 
    </div>
   
    
  );
};

export default Spacer;