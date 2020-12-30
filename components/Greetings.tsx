import React from "react";
import { Button } from "@material-ui/core";
import LoginIcon from '@material-ui/icons/AccountCircle';
import { useState } from "react";



const Greeting = () => {
  const [greetings] = useState('Hello Greetings');

  return (
    <div>
      <h1>{greetings}</h1>
      <br />
      <br />
      <Button color="primary" variant="contained">
        Click Me
      </Button>
      <br />
      <br />
      <Button startIcon={<LoginIcon />} color="primary" variant="contained">
        Login
      </Button>
    </div>
  )
}

export default Greeting;