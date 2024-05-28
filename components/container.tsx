interface ContainerProps {
  width?: string;
 children?: ReactNode;
}
  

const Container: React.FC<SpacerProps> = (props) => {
  const { width = '833', children } = props;

  return (
    <div className={`w-${width} max-w-screen-lg m-auto`}>
        {children} 
    </div> 
  );
};

export default Container;