import React, { useState, useEffect } from "react";

const Greeting = (props) => {
  const [greeting, setGreeting] = useState(props.name);
  useEffect(() => {
    setTimeout(() => {
      setGreeting(props.name2);
    }, 3000);
  },[]);
  
  return <h1>Hola {greeting}</h1>;
};
export default Greeting;
