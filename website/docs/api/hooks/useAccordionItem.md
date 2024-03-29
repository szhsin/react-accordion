---
sidebar_position: 3
---

# useAccordionItem

## Parameter object

| Prop | Type | Description |
| --- | --- | --- |
| `state` | TransitionState | The item `state` returned from [useAccordionItemEffect](./useAccordionItemEffect). |
| `toggle` | (toEnter?: boolean) => void | The `toggle` function returned from [useAccordionItemEffect](./useAccordionItemEffect). |
| `disabled` | boolean | Whether the accordion item is disabled. |

## Return object

| Prop | Type | Description |
| --- | --- | --- |
| `buttonProps` | object | An object to be spread to the item button element. |
| `panelProps` | object | An object to be spread to the item panel element. |
