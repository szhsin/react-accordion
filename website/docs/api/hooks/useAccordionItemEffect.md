---
sidebar_position: 2
---

# useAccordionItemEffect

## Parameter object

| Prop | Type | Description |
| --- | --- | --- |
| `itemKey` | string \| number | An explicit key which can be used to expand or close item. |
| `initialEntered` | boolean | Make the accordion item expanded when initially mounted. This prop takes precedence over the `initialEntered` prop of `Accordion` component. |

## Return object

| Prop | Type | Description |
| --- | --- | --- |
| `itemRef` | object | A React `ref` object to be attached to the item element. |
| `state` | TransitionState | The item state. |
| `toggle` | (toEnter?: boolean) => void | A function to toggle the item state. |

:::caution NOTE

As its name suggests, this hook is not pure and should be used only once in each accordion item.

:::
