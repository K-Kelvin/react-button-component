# React Button Component

I made this reusable component as one of the challenges in [devchallenges.io](https://devchallenges.io)

The live version and documentation of this component can be found [here](https://button-component.netlify.app)

### Dependencies

react
styled-components
prop-types

To use this component, clone this repository and copy the Button folder under src/components

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
> The default is "default"

```jsx
const App = () => {
  return (
    <div>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="secondary">Danger</Button>
    </div>
  );
};
```

> variant: <br>
> options include "outline", "text"

> size: <br>
> options include "sm", "md", "lg"

> startIcon | endIcon<br>
> options include "local_grocery_store", "home", "arrow_left", "arrow_right", "thumbs_up"<br><br>
> One can also provide their own icon example;

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
