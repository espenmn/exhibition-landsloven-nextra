interface SpacerProps {
  height?: string;
  width?: string;
}

const Spacer: React.FC<SpacerProps> = (props) => {
  const { height = '6', width = '4' } = props;

  return (
    <div className={`h-${height} w-${width}`} />
    
  );
};

export default Spacer;