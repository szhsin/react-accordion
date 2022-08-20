import { render } from '../utils';
import { Accordion, AccordionProps } from '../../components/Accordion';
import { useAccordionProvider } from '../../hooks/useAccordionProvider';

jest.mock('../../hooks/useAccordionProvider');

test('Accordion should render', () => {
  const props: AccordionProps = {
    allowMultiple: true,
    initialEntered: true,
    mountOnEnter: false,
    unmountOnExit: false,
    transition: true,
    transitionTimeout: 300,
    onStateChange: jest.fn()
  };
  const mockRef = jest.fn();
  render(
    <Accordion ref={mockRef} {...props}>
      Accordion
    </Accordion>
  );
  expect(useAccordionProvider).toHaveBeenCalledWith(props);
  expect(mockRef).toHaveBeenCalled();
});
