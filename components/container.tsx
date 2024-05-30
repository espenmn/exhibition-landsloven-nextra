interface ContainerProps {
  width?: string;
  padding?: string;
  margin?: string;
  stil?: string;
 children?: ReactNode;
}
  

const Container: React.FC<SpacerProps> = (props) => {
  const { width = '833', padding = '0', margin='0', stil='', children } = props;

  return (
    <div className={`w-${width} p-${padding} my-${margin} ${stil} max-w-screen-lg m-auto`}>
        {children} 
    </div> 
  );
};

export default Container;