import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import fetchMock from 'jest-fetch-mock';
import HomeScreen from '../src/screens/HomeScreen';

const mockNavigate = jest.fn();

const mockNavigation = {
  navigate: mockNavigate,
} as any;

beforeEach(() => {
  fetchMock.resetMocks();
});

test('renders content after fetch', async () => {
  // First fetch: token
  fetchMock.mockResponseOnce(JSON.stringify({ token: 'test-token' }));

  // Second fetch: content
  fetchMock.mockResponseOnce(
    JSON.stringify({
      content: {
        thumbNailImage: 'https://example.com/thumb.jpg',
        logo: 'https://example.com/logo.jpg',
        title: 'Test Title',
        subTitle: 'Test Subtitle',
      },
    }),
  );

  const { getByText, getByTestId } = render(
    <HomeScreen navigation={mockNavigation} />,
  );

  // Wait for title to appear after fetch
  await waitFor(() => {
    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Subtitle')).toBeTruthy();
  });
});
