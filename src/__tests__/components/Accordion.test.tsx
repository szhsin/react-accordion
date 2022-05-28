import { render, screen } from '@testing-library/react';
import { Accordion } from '../../components/Accordion';

test('Accordion should render', () => {
  render(<Accordion message="hello" />);
  expect(screen.getByText('Accordion component hello')).toBeInTheDocument();
});
