# React-Accordion

> An unstyled, accessible accordion library for building React apps and design systems.

**[Examples and Docs](https://szhsin.github.io/react-accordion/)**

[![NPM](https://img.shields.io/npm/v/@szhsin/react-accordion.svg)](https://www.npmjs.com/package/@szhsin/react-accordion)
[![NPM](https://img.shields.io/bundlephobia/minzip/@szhsin/react-accordion)](https://bundlephobia.com/package/@szhsin/react-accordion)

## Features

- Unstyled React accordion components
- Headless UI React hooks
- WAI-ARIA compliant
- Keyborad navigable
- Support animation
- Can be controlled or uncontrolled
- [Level 3 support](https://github.com/reactwg/react-18/discussions/70) of React 18 concurrent rendering
- Tree-shakable and bundle size optimised
- Support server-side rendering
- Strongly typed API with TypeScript

![react accordion](https://user-images.githubusercontent.com/41896553/188104820-5a722165-3727-458f-9dd2-53d886386459.gif)

## Install

with npm

```bash
npm install @szhsin/react-accordion
```

or with Yarn

```bash
yarn add @szhsin/react-accordion
```

## Usage

```jsx
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

export default function Example() {
  return (
    <Accordion>
      <AccordionItem header="What is Lorem Ipsum?">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </AccordionItem>

      <AccordionItem header="Where does it come from?">
        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
        vitae, accumsan auctor mi.
      </AccordionItem>

      <AccordionItem header="Why do we use it?">
        Suspendisse massa risus, pretium id interdum in, dictum sit
        amet ante. Fusce vulputate purus sed tempus feugiat.
      </AccordionItem>
    </Accordion>
  );
}
```

**[Edit on CodeSandbox](https://codesandbox.io/s/react-accordion-css-module-eqvnzg)**<br>  
**[Visit more examples and docs](https://szhsin.github.io/react-accordion/)**<br><br>

## License

[MIT](https://github.com/szhsin/react-accordion/blob/master/LICENSE) Licensed.
