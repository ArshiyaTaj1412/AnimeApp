import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import DetailScreen from '../src/screens/DetailScreen';
import { Share } from 'react-native';

// Mock Share API
jest.mock('react-native/Libraries/Share/Share', () => ({
  share: jest.fn(() => Promise.resolve({ action: 'sharedAction' })),
}));

// Mock global fetch
global.fetch = jest.fn().mockImplementation(url => {
  if (url.includes('generateToken')) {
    return Promise.resolve({
      json: () => Promise.resolve({ token: 'mockToken' }),
    });
  }

  if (url.includes('getContent')) {
    return Promise.resolve({
      json: () =>
        Promise.resolve({
          content: {
            title: 'Mock Title',
            subTitle: 'Mock Subtitle',
            text: '<p>Mock Text</p>',
            mainImage: 'https://example.com/main.jpg',
            logo: 'https://example.com/logo.png',
          },
        }),
    });
  }

  return Promise.reject(new Error('Unknown fetch call'));
});

describe('DetailScreen', () => {
  const mockContent = {
    title: 'Test Title',
    subTitle: 'Test Subtitle',
    text: '<p>Some HTML content</p>',
    mainImage: 'https://example.com/image.jpg',
    logo: 'https://example.com/logo.png',
  };

  const mockRoute = { params: { content: mockContent } };
  const mockNavigation = { goBack: jest.fn() };

  it('renders title and subtitle correctly', () => {
    const { getByText } = render(
      <DetailScreen
        route={mockRoute as any}
        navigation={mockNavigation as any}
      />,
    );

    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Subtitle')).toBeTruthy();
    expect(getByText('Share Story')).toBeTruthy();
  });

  it('calls Share API on Share Story button press', async () => {
    const { getByText } = render(
      <DetailScreen
        route={mockRoute as any}
        navigation={mockNavigation as any}
      />,
    );

    fireEvent.press(getByText('Share Story'));

    await waitFor(() => {
      expect(Share.share).toHaveBeenCalledWith({
        message: 'Test Title\n\nSome HTML content',
      });
    });
  });

  it('goes back when × button is pressed', () => {
    const { getByText } = render(
      <DetailScreen
        route={mockRoute as any}
        navigation={mockNavigation as any}
      />,
    );

    fireEvent.press(getByText('×'));
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });

  it('fetches new content on REFRESH button press', async () => {
    const { getAllByText, getByText } = render(
      <DetailScreen
        route={{ params: {} } as any}
        navigation={mockNavigation as any}
      />,
    );

    await waitFor(() => getByText('Mock Title'));

    const refreshButtons = getAllByText('REFRESH');
    refreshButtons.forEach(btn => fireEvent.press(btn));

    await waitFor(() => {
      expect(getByText('Mock Subtitle')).toBeTruthy();
    });
  });
});
