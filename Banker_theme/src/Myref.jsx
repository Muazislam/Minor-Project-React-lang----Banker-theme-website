import { useRef } from "react";

export const Myref = () => {
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");

  const register = () => {
    console.log(name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
  };
  return (
    <div>
      <input type="text" placeholder="Name" ref={name}></input>
      <input type="email" placeholder="email" ref={email}></input>
      <input type="password" placeholder="password" ref={password}></input>
      <button onClick={register}>Register</button>
    </div>
  );
};
