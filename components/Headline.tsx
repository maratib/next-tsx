import { useState } from "react";
import { Button, ButtonGroup, Icon } from '@material-ui/core';
import LoginIcon from '@material-ui/icons/AccountCircle';
import LogoutIcon from '@material-ui/icons/ExitToApp';

export default () => {
  const [greeting, setGreeting] = useState('Hello headlines');
  const handleChange = (event: any) => setGreeting(event.target.value);
  return (
    <HeadlineInput headline={greeting} onChangeHeadLine={handleChange} />
  );
}
// export default Headline;


interface IHeadline {
  headline: string;
  onChangeHeadLine: any;
}
const HeadlineInput = ({ headline, onChangeHeadLine }: IHeadline) => (
  <div>
    <h1>{headline}</h1>
    <input type="text" value={headline} onChange={onChangeHeadLine} />
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
    <br />
    <br />
    <Button startIcon={<LogoutIcon />} color="secondary" variant="contained">
      Logout
    </Button>
    <br />
    <Icon>star</Icon>
    <br />
    <ButtonGroup variant="contained">
      <Button endIcon={<LoginIcon />} color="primary">
        Login
  </Button>
      <Button startIcon={<LogoutIcon />} color="secondary">
        Logout
  </Button>
    </ButtonGroup>
  </div>
);