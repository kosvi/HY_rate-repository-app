import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from '../../components/SignInContainer';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);
      fireEvent.changeText(getByTestId('username'), 'theName');
      fireEvent.changeText(getByTestId('password'), 'thePassword');
      fireEvent.press(getByTestId('submitButton'));

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).not.toHaveBeenCalledTimes(0);
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).not.toHaveBeenCalledTimes(2);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'theName',
          password: 'thePassword',
        });
      });
    });
  });
});