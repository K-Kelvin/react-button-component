# React Button Component
I made this reusable component as a result of one of the challenges I got from [devchallenges.io](https://devchallenges.io)

The live version and documentation of this component can be found [here](https://button-component-kelvin.netlify.app)

### Dependencies
```json
{
    "prop-types": "^15.7.2",
    "react": "^17.0.0",
    "react-dom": "^17.0.0",
    "styled-components": "^5.3.0"
}
```

To use this component, clone this repository and copy the __Button__ folder under [src/components](./src/components)

Basic usage
```jsx
import React from "react";
import Button from "components/Button";

const App = () => {
    return (
        <div>
            <Button>Default<Button/>
        </div>
    )
}
```

### Props
> color: <br>
> options include "default", "primary", "secondary", "danger"

```jsx
const App = () => {
  return (
    <div>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="danger">Danger</Button>
    </div>
  );
};
```

> variant: <br>
> options include "default", "outline", "text"

<br>

> size: <br>
> options include "sm", "md", "lg"
> the default is "md"

<br>

> startIcon | endIcon<br>
> options include "local_grocery_store", "home", "arrow_left", "arrow_right", "thumbs_up"<br><br>
> One can also provide their own icon, for example;

```jsx
import React from "react";
import Button from "components/Button";
import { HomeIcon } from "components/Button/icons";

const App = () => {
    return (
        <div>
            <Button startIcon={<HomeIcon />}>
                Default
            <Button/>
        </div>
    )
}
```
