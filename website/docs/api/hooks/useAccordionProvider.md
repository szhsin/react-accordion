---
sidebar_position: 5
---

# useAccordionProvider

## Parameter object

| Prop | Type | Description |
| --- | --- | --- |
| `allowMultiple` | boolean | Allow multiple accordion items to expand at once. |
| `initialEntered` | boolean | Make all accordion items expanded when initially mounted. |
| `mountOnEnter` | boolean | Lazily mount `children` of accordion items until they are expanded. Use this option if you don't need to server-side render accordion item contents. |
| `unmountOnExit` | boolean | Unmount `children` of accordion items after they are collapsed. |
| `transition` | [View on GitHub](https://github.com/szhsin/react-accordion/blob/7eddacda0928b23bde05ad2299d9b5e27efd4995/types/utils/constants.d.ts#L16) | Enable or disable transition. Accept a single boolean value or each individual transition stage in an object. |
| `transitionTimeout` | [View on GitHub](https://github.com/szhsin/react-accordion/blob/7eddacda0928b23bde05ad2299d9b5e27efd4995/types/utils/constants.d.ts#L32) | Set transition duration. Accept a single number or individual "enter" or "exit" stage in an object. |
| `onStateChange` | (event: { key: ItemKey; current: TransitionState }) => void | Event to notify state changes in any accordion items. |

## Return object

| Prop | Type | Description |
| --- | --- | --- |
| `toggle` | (key: ItemKey, toEnter?: boolean) => void | A function to toggle item state by providing an item key. |

:::caution NOTE

The return object contains some other properties which are considered implementation details and should not be used externally.

:::
