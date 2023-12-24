import React from 'react';

import {act, fireEvent, renderScreen, screen} from 'test-utils';

import {AppStack} from '@routes';
import {authCredentialsStorage} from '@services';
import {mockUtils, server, userMocked} from '@test';

jest.unmock('@react-navigation/native');

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
  jest
    .spyOn(authCredentialsStorage, 'get')
    .mockResolvedValue(mockUtils.userAuthCredentials);
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
  jest.useRealTimers();
  jest.resetAllMocks();
});

describe('integration: SearchScreen', () => {
  it('should successfully complete the search flow', async () => {
    renderScreen(<AppStack initialRouteName="SearchScreen" />);

    const inputText = screen.getByPlaceholderText(/digite sua busca/i);
    fireEvent.changeText(inputText, 'mar');
    act(() => jest.runAllTimers());

    const user1 = await screen.findByText(userMocked.user1.username);
    expect(user1).toBeTruthy();

    const user2 = await screen.findByText(userMocked.user2.username);
    expect(user2).toBeTruthy();

    fireEvent.press(user1);

    const userFullName = await screen.findByText(userMocked.user1.full_name);
    expect(userFullName).toBeTruthy();

    const backButton = screen.getByTestId('screen-back-button');
    fireEvent.press(backButton);

    const inputTextAfterBack = screen.getByPlaceholderText(/digite sua busca/i);
    fireEvent.changeText(inputTextAfterBack, '');
    act(() => jest.runAllTimers());

    const searchHistoryTitle = screen.getByText(/buscas recentes/i);
    expect(searchHistoryTitle).toBeTruthy();

    const user1AfterBack = screen.queryByText(userMocked.user1.username);
    expect(user1AfterBack).toBeTruthy();

    const user2AfterBack = screen.queryByText(userMocked.user2.username);
    expect(user2AfterBack).toBeFalsy();

    const trashIcon = screen.getByTestId('trash');
    fireEvent.press(trashIcon);

    const user1AfterRemoved = screen.queryByText(userMocked.user1.username);
    expect(user1AfterRemoved).toBeFalsy();
  });
});
