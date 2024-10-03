---
sidebar_position: 6
---

# useAccordionState

## Return object

| Prop | Type | Description |
| --- | --- | --- |
| `getItemState` | (key: ItemKey, \{ initialEntered?: boolean \} => TransitionState | A function that can be use to retrieve item state. |
| `toggle` | (key: ItemKey, toEnter?: boolean ) => void | A function that can be use to toggle item state. |
| `toggleAll` | (toEnter?: boolean ) => void | A function that can be use to toggle all item states at the same time. |
