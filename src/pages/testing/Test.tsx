import React, { useEffect } from "react";
import { useState } from "react";
import "./Test.scss";

const Test = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("times");

  useEffect(() => {
    if (count === 1) {
      nameChange();
    } else {
      setName("times");
    }
  }, [count]);

  const nameChange = () => {
    setName("time");
  };

  return (
    <div className="main">
      <h1>
        you have clicked {count} {name}
      </h1>
      <button onClick={() => setCount(count + 1)}>plus one</button>
    </div>
  );
};

export default Test;
