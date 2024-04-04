import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App component', () => {
  test('renders initial inputs and button', () => {
    const { getByLabelText, getByText } = render(<App />);
    const initialXInput = getByLabelText('Enter initial X position:');
    const initialYInput = getByLabelText('Enter initial Y position:');
    const initialDirectionSelect = getByLabelText('Enter initial direction:');
    const commandInput = getByLabelText('Enter commands:');
    const startButton = getByText('START');

    expect(initialXInput).toBeInTheDocument();
    expect(initialYInput).toBeInTheDocument();
    expect(initialDirectionSelect).toBeInTheDocument();
    expect(commandInput).toBeInTheDocument();
    expect(startButton).toBeInTheDocument();
  });

  test('updates state on input change', () => {
    const { getByLabelText } = render(<App />);
    const initialXInput = getByLabelText('Enter initial X position:');
    const initialYInput = getByLabelText('Enter initial Y position:');
    const initialDirectionSelect = getByLabelText('Enter initial direction:');
    const commandInput = getByLabelText('Enter commands:');

    fireEvent.change(initialXInput, { target: { value: '5' } });
    fireEvent.change(initialYInput, { target: { value: '10' } });
    fireEvent.change(initialDirectionSelect, { target: { value: 'WEST' } });
    fireEvent.change(commandInput, { target: { value: 'FFRBL' } });

    expect(initialXInput.value).toBe('5');
    expect(initialYInput.value).toBe('10');
    expect(initialDirectionSelect.value).toBe('WEST');
    expect(commandInput.value).toBe('FFRBL');
  });

  test('performs rover movement on button click', () => {
    const { getByLabelText, getByText } = render(<App />);
    const initialXInput = getByLabelText('Enter initial X position:');
    const initialYInput = getByLabelText('Enter initial Y position:');
    const initialDirectionSelect = getByLabelText('Enter initial direction:');
    const commandInput = getByLabelText('Enter commands:');
    const startButton = getByText('START');

    fireEvent.change(initialXInput, { target: { value: '0' } });
    fireEvent.change(initialYInput, { target: { value: '0' } });
    fireEvent.change(initialDirectionSelect, { target: { value: 'NORTH' } });
    fireEvent.change(commandInput, { target: { value: 'FFRBL' } });

    fireEvent.click(startButton);

  });
});
