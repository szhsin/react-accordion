---
sidebar_position: 1
---

# Accordion

| Prop | Type | Description |
| --- | --- | --- |
| `allowMultiple` | boolean | Allow multiple accordion items to expand at once. |
| `initialEntered` | boolean | Make all accordion items expanded when initially mounted. |
| `mountOnEnter` | boolean | Lazily mount `children` of accordion items until they are expanded. Use this option if you don't need to server-side render accordion item contents. |
| `unmountOnExit` | boolean | Unmount `children` of accordion items after they are collapsed. |
| `transition` | [View on GitHub](https://github.com/szhsin/react-accordion/blob/7eddacda0928b23bde05ad2299d9b5e27efd4995/types/utils/constants.d.ts#L16) | Enable or disable transition. Accept a single boolean value or each individual transition stage in an object. |
| `transitionTimeout` | [View on GitHub](https://github.com/szhsin/react-accordion/blob/7eddacda0928b23bde05ad2299d9b5e27efd4995/types/utils/constants.d.ts#L32) | Set transition duration. Accept a single number or individual "enter" or "exit" stage in an object. |
| `onStateChange` | (event: { key: K; current: TransitionState }) => void | Event to notify state changes in any accordion items. |
