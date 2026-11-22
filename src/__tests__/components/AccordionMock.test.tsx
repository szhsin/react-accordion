import { render } from '../utils.js';
import { Accordion, AccordionProps, useAccordionProvider } from '../../index.js';

vi.mock('../../hooks/useAccordionProvider');

test('Accordion should forward props to useAccordionProvider', () => {
  const props: AccordionProps = {
    allowMultiple: true,
    initialEntered: true,
    mountOnEnter: false,
    unmountOnExit: false,
    transition: true,
    transitionTimeout: 300,
    onStateChange: vi.fn()
  };
  render(<Accordion {...props}>Accordion</Accordion>);
  expect(useAccordionProvider).toHaveBeenCalledWith(props);
});
