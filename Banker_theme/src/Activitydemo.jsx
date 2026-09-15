import { Activity, useState } from "react";

const ActivityDemo = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>showButton</button>
      <Activity mode={show ? "show" : "hidden"}>
        <h1>hellpo</h1>
        <p>Weldkjflsjdf</p>
      </Activity>
    </div>
  );
};

export default ActivityDemo;
