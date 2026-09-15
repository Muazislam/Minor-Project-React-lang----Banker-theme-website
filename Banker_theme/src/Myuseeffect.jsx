import { useEffect, useEffectEvent, useState } from "react";

const Myuseeffect = () => {
  const [name, setName] = useState("Ali");
  const showName = useEffectEvent(() => {
    console.log("Name", name);
  });
  useEffect(() => {
    const timer = setInterval(() => {
      showName();
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setName("Ahmad")}>Change Name</button>
    </div>
  );
};
export default Myuseeffect;
