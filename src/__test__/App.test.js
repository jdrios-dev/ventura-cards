import { render, screen } from '@testing-library/react';
import App from '../Screens/App';
import { create } from 'react-test-renderer';

test('renders app screen', () => {
  render(<App />);
});

test('Snapshot App', () => {
  const app = create(<App />);
  expect(app.toJSON()).toMatchSnapshot();
})

