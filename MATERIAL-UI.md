# Material UI, 4 ways to Override UI Styles
- StylesProvider
- ThemeProvider 
- withStyles
- useStyles

Keep yourself DRY, make reusable components of your own to use in future projects.

## StylesProvider
Kind of global style provider
`injectFirst` boolean prop is used to add styles that OVERRIDE existing Material-UI styles.
```javascript
// In app.tsx 
import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./styles.css";

export default function App() {
  return (
    <StylesProvider injectFirst>
      <div className="App">
        <Button>Hook</Button>
      </div>
    </StylesProvider>
  );
}
```
Then the styles in `styles.css` will take precedent over the built-in Material UI styles as long as it's inside the StylesProvider
```css
/* styles.css */
.MuiButton-root {
  background-color: green;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
}
.MuiButton-root:hover {
  background-color: green;
}
.MuiButton-label {
  color: #fff;
}
```

## ThemeProvider
Basic
```javascript

import React from "react";
import Button from "@material-ui/core/Button";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  }
});
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button color="primary">foo</Button>
        <Button color="secondary">bar</Button>
      </div>
    </ThemeProvider>
  );
}
```
We can also style deep child elements with it by writing more code.
```javascript
import React from "react";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.background,
    border: 0,
    color: "white",
    height: 48,
    padding: "20px 10px"
  }
}));

function DeepChild() {
  const classes = useStyles();

  return (
    <button type="button" className={classes.root}>
      Theming
    </button>
  );
}

const theme = {
  background: "linear-gradient(45deg, green 30%, blue 90%)"
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <DeepChild />
      </div>
    </ThemeProvider>
  );
}
```

## withStyles
We can use the withStyles higher-order component to apply our own styles to our components.
```javascript
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    background: "linear-gradient(45deg, green 30%, orange 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  }
};

function App({ classes }) {
  return <Button className={classes.root}>hook</Button>;
}
export default withStyles(styles)(App);
```
## useStyles

```javascript
import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, green 30%, orange 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  }
});

export default function App() {
  const classes = useStyles();
  return <Button className={classes.root}>Hook</Button>;
}
```
 

## References 
[4 Ways to Override Material UI Styles](https://blog.bitsrc.io/4-ways-to-override-material-ui-styles-43aee2348ded)
[Publish your components](https://bit.dev/)