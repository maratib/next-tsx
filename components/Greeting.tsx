import { useState } from "react";



const Greeting = () => {
  const [greetings, setGreetings] = useState('Hello Greetings');

  return (

    <h1>{greetings}</h1>
  )
}

export default Greeting;