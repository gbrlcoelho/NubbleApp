import React from 'react';

import {describe, expect, it, jest} from '@jest/globals';
import {fireEvent, render, screen} from 'test-utils';

import {IconProps, PasswordInput} from '@components';

describe('PasswordInput', () => {
  it('should starts with hidden password', () => {
    const mockedOnChange = jest.fn();
    render(
      <PasswordInput
        label="Password"
        placeholder="password"
        value="123456"
        onChange={mockedOnChange}
      />,
    );

    const inputElement = screen.getByPlaceholderText(/password/);

    expect(inputElement.props.secureTextEntry).toBeTruthy();
  });

  it('should toggle password visibility when pressing the eye icon', () => {
    const mockedOnChange = jest.fn();
    render(
      <PasswordInput
        label="Password"
        placeholder="password"
        value="123456"
        onChange={mockedOnChange}
      />,
    );

    const eyeIcon: IconProps['name'] = 'eyeOn';
    fireEvent.press(screen.getByTestId(eyeIcon));

    const eyeOffIcon: IconProps['name'] = 'eyeOff';
    const eyeOffIconElement = screen.getByTestId(eyeOffIcon);

    const inputElement = screen.getByPlaceholderText(/password/);

    expect(inputElement.props.secureTextEntry).toBeFalsy();
    expect(eyeOffIconElement).toBeTruthy();
  });
});
