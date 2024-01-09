export default function Button(props) {
    const [isOn, setIsOn] = useState();
  
    return (
      <div
        className={isOn?styles.isOn:styles.isOff}
        onClick={() => {
          alert("clicked");
          setIsOn(!isOn);
        }}
      >
        {props.name}  {props.age} vom Christkind 
      </div>
    );
  }
