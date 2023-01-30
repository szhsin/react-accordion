---
sidebar_position: 2
---

# AccordionItem

| Prop | Type | Description |
| --- | --- | --- |
| `itemKey` | string \| number | Set an explicit key which can be used to expand or close item. |
| `initialEntered` | boolean | Make the accordion item expanded when initially mounted. This prop takes precedence over the `initialEntered` prop of `Accordion` component. |
| `disabled` | boolean | If true, disable the accordion item and exclude it from keyboard navigation. |
| `header` | node \| function | Set item header. Support a function form which will receive item states. |
| `children` | node \| function | Set item content. Support a function form which will receive item states. |
| `headingTag` | string | Set heading tag; value can be `h1` to `h6`. |
| `headingProps` | object | Set props and attributes on the heading element. |
| `buttonProps` | object | Set props and attributes on the button element. |
| `contentProps` | object | Set props and attributes on the content element. |
| `panelProps` | object | Set props and attributes on the panel element. |
