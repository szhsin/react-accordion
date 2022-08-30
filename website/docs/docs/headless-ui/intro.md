---
sidebar_position: 1
sidebar_label: When to Use
---

# Headless UI

The `Accordion` and `AccordionItem` components are unstyled and render HTML markups that are compliant
with the [Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).
They are built on top of some React Hooks which can be used directly in your code. There are a few reasons that you might want to do it:

- You want to fully control what HTML markups are rendered into DOM.
- The `Accordion` and `AccordionItem` components set some default class selectors on the HTML
  markups, and you don't want or need the selectors.
- You could cut out some functionalities which are not needed in your components, e.g. the accordion item height transition implementation. It will help reduce bundle size after tree-shaking.

:::info

The components are always easier to setup and use, but the hooks provide more freedom for customisation.

:::
