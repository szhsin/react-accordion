import { Ref } from 'react';
import { screen, fireEvent, act } from '@testing-library/react';
import { render } from '../utils';
import { Accordion, AccordionProps, AccordionItem, AccordionItemProps, ItemState } from '../../';

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
    <AccordionItem {...item1Props} header={item1Props?.header || 'header 1'} ref={item1Ref}>
      {item1Props?.children || 'item 1'}
    </AccordionItem>
    <AccordionItem {...item2Props} header={item2Props?.header || 'header 2'}>
      {item2Props?.children || 'item 2'}
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

describe('className function', () => {
  const className = jest.fn();
  test.each([
    [{ className }],
    [{ headingProps: { className } }],
    [{ buttonProps: { className } }],
    [{ contentProps: { className } }],
    [{ panelProps: { className } }]
  ])('should receive modifier params %#', (item1Props: AccordionItemProps) => {
    render(
      getAccordion({
        item1Props
      })
    );
    const params = { expanded: false, status: 'exited' };
    expect(className).toHaveBeenNthCalledWith(1, params);
    expect(className).toHaveBeenLastCalledWith(params);
    fireEvent.click(screen.getByRole('button', { name: 'header 1' }));
    expect(className).toHaveBeenLastCalledWith({ expanded: true, status: 'entered' });
  });
});

describe('Header render prop', () => {
  const getRenderPropParam = (state: Partial<ItemState['state']>) => ({
    state: expect.objectContaining(state) as ItemState['state'],
    toggle: expect.any(Function) as ItemState['toggle']
  });

  let toggle!: ItemState['toggle'];
  const header = jest.fn().mockImplementation(({ toggle: _toggle }: ItemState) => {
    toggle = _toggle;
    return 'custom header';
  });

  test.each([
    {
      props: {},
      item1Props: { header },
      expectedState1: {
        status: 'exited',
        isEnter: false,
        isMounted: true,
        isResolved: true
      },
      expectedState2: { status: 'entered' }
    },
    {
      props: {},
      item1Props: { header, initialEntered: true },
      expectedState1: {
        status: 'entered',
        isEnter: true,
        isMounted: true,
        isResolved: true
      },
      expectedState2: { status: 'exited' }
    },
    {
      props: { initialEntered: true },
      item1Props: { header },
      expectedState1: {
        status: 'entered',
        isEnter: true,
        isMounted: true,
        isResolved: true
      },
      expectedState2: { status: 'exited' }
    },
    {
      props: { initialEntered: true },
      item1Props: { header, initialEntered: false },
      expectedState1: {
        status: 'exited',
        isEnter: false,
        isMounted: true,
        isResolved: true
      },
      expectedState2: { status: 'entered' }
    },
    {
      props: { mountOnEnter: true },
      item1Props: { header },
      expectedState1: {
        status: 'unmounted',
        isEnter: false,
        isMounted: false,
        isResolved: true
      },
      expectedState2: { status: 'entered' }
    }
  ] as const)('scenario %#', ({ props, item1Props, expectedState1, expectedState2 }) => {
    render(
      getAccordion({
        props,
        item1Props
      })
    );
    screen.getByRole('button', { name: 'custom header' });
    const params = getRenderPropParam(expectedState1);
    expect(header).toHaveBeenNthCalledWith(1, params);
    expect(header).toHaveBeenLastCalledWith(params);

    const prevToggle = toggle;
    act(() => {
      toggle();
    });
    expect(header).toHaveBeenLastCalledWith(getRenderPropParam(expectedState2));
    expect(toggle).toBe(prevToggle);
  });
});

test('AccordionItem should set wai-aria props', () => {
  const onClick = jest.fn();
  render(
    getAccordion({
      item1Props: {
        buttonProps: { 'data-testid': 'button', onClick },
        panelProps: { 'data-testid': 'panel' }
      }
    })
  );

  const button = screen.getByTestId('button');
  const panel = screen.getByTestId('panel');
  expect(button).toHaveAttribute('aria-controls', panel.id);
  expect(button).toHaveAttribute('aria-expanded', 'false');
  expect(panel).toHaveAttribute('aria-labelledby', button.id);
  expect(panel).toHaveAttribute('role', 'region');

  fireEvent.click(button);
  expect(button).toHaveAttribute('aria-expanded', 'true');
  expect(onClick).toHaveBeenCalled();
});

test('AccordionItem should lazily mount content when mountOnEnter is true', () => {
  render(
    getAccordion({
      props: { mountOnEnter: true },
      item1Props: {
        'data-testid': 'item',
        contentProps: { 'data-testid': 'content' }
      }
    })
  );

  expect(screen.getByTestId('item')).toHaveClass('szh-accordion__item--status-unmounted');
  expect(screen.queryByTestId('content')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'header 1' }));
  expect(screen.getByTestId('item')).toHaveClass('szh-accordion__item--status-entered');
  expect(screen.getByTestId('content')).toBeInTheDocument();
});

test('AccordionItem should not render when the state of other items is updated', () => {
  const children1 = jest.fn();
  const children2 = jest.fn();
  render(
    getAccordion({
      props: { allowMultiple: true },
      item1Props: {
        children: children1
      },
      item2Props: {
        children: children2
      }
    })
  );

  expect(children1).toHaveBeenCalled();
  expect(children2).toHaveBeenCalled();

  jest.clearAllMocks();
  fireEvent.click(screen.getByRole('button', { name: 'header 1' }));
  expect(children1).toHaveBeenCalled();
  expect(children2).not.toHaveBeenCalled();

  jest.clearAllMocks();
  fireEvent.click(screen.getByRole('button', { name: 'header 2' }));
  expect(children1).not.toHaveBeenCalled();
  expect(children2).toHaveBeenCalled();
});
