import { render, screen } from '@testing-library/react';
import { Accordion } from '../../components/Accordion';

test('Accordion should render', () => {
  render(<Accordion>Accordion component</Accordion>);
  expect(screen.getByText('Accordion component')).toBeInTheDocument();
});
