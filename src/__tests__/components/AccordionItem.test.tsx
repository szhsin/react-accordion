import { Ref } from 'react';
import { screen } from '@testing-library/react';
import { render } from '../utils';
import { Accordion, AccordionProps, AccordionItem, AccordionItemProps } from '../../';

const getAccordion = ({
  props,
  item1Ref,
  item1Props,
  item2Props
}: {
  props?: AccordionProps;
  item1Ref?: Ref<HTMLDivElement>;
  item1Props?: AccordionItemProps;
  item2Props?: AccordionItemProps;
}) => (
  <Accordion {...props}>
    <AccordionItem header="header 1" {...item1Props} ref={item1Ref}>
      item 1
    </AccordionItem>
    <AccordionItem header="header 2" {...item2Props}>
      item 2
    </AccordionItem>
    <AccordionItem header="header 3">item 3</AccordionItem>
  </Accordion>
);

describe('AccordionItem', () => {
  test('should throw when rendered without provider', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation();
    expect(() => {
      render(<AccordionItem header="header">item</AccordionItem>);
    }).toThrow();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  test('should forward props and ref to item', () => {
    const ref = jest.fn();
    render(
      getAccordion({ item1Props: { 'data-testid': 'item1', className: 'item-1' }, item1Ref: ref })
    );
    expect(screen.getByTestId('item1')).toHaveClass(
      'szh-accordion__item szh-accordion__item--status-exited item-1'
    );
    expect(ref).toHaveBeenCalled();
  });

  test('should forward props and ref to heading', () => {
    const ref = jest.fn();
    render(
      getAccordion({
        item1Props: {
          headingProps: {
            ref,
            'data-testid': 'heading1',
            className: 'heading-1',
            style: { color: 'green' }
          }
        }
      })
    );
    const heading = screen.getByRole('heading', { name: 'header 1', level: 3 });
    expect(heading).toHaveClass('szh-accordion__item-heading heading-1');
    expect(heading).toHaveAttribute('data-testid', 'heading1');
    expect(heading).toHaveStyle({ color: 'green', margin: 0 });
    expect(ref).toHaveBeenCalled();
  });

  test('should forward props and ref to button', () => {
    const ref = jest.fn();
    render(
      getAccordion({
        item1Props: {
          buttonProps: {
            ref,
            'data-testid': 'button1',
            className: 'button-1',
            style: { color: 'blue' }
          }
        }
      })
    );
    const button = screen.getByRole('button', { name: 'header 1' });
    expect(button).toHaveClass('szh-accordion__item-btn button-1');
    expect(button).toHaveAttribute('data-testid', 'button1');
    expect(button).toHaveStyle({ color: 'blue' });
    expect(button).toHaveTextContent('header 1');
    expect(ref).toHaveBeenCalled();
  });

  test('should forward props and ref to content', () => {
    const ref = jest.fn();
    render(
      getAccordion({
        item2Props: {
          contentProps: {
            ref,
            'data-testid': 'content2',
            className: 'content-2',
            style: { color: 'green' }
          }
        }
      })
    );
    const content = screen.getByTestId('content2');
    expect(content).toHaveClass('szh-accordion__item-content content-2');
    expect(content).toHaveStyle({ color: 'green' });
    expect(ref).toHaveBeenCalled();
  });

  test('should forward props and ref to panel', () => {
    const ref = jest.fn();
    render(
      getAccordion({
        item2Props: {
          panelProps: {
            ref,
            'data-testid': 'panel2',
            className: 'panel-2',
            style: { color: 'green' }
          }
        }
      })
    );
    const panel = screen.getByTestId('panel2');
    expect(panel).toHaveClass('szh-accordion__item-panel panel-2');
    expect(panel).toHaveStyle({ color: 'green' });
    expect(panel).toHaveTextContent('item 2');
    expect(ref).toHaveBeenCalled();
  });
});
