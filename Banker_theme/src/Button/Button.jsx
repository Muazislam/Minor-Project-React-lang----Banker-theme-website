// import style from './Button.module.css'

function Button() {
  const style = {
    color: "white",
    backgroundColor: "hsl(200, 100%, 50%)",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return <button style={style}>Click me</button>;
}

export default Button;
