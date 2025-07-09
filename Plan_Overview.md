# Plan & Overview Document

## Project Overview

This React Native application fetches and displays content from a secure API. The main features include a home screen that lists content items and a detail screen that displays full information for a selected item. The app handles authentication using a token-based API, supports navigation between screens, and includes unit testing.

## Features Implemented

- Token generation using a POST request with the user’s email
- Secure content fetching using the generated Bearer token
- Home Screen displaying content cards in a scrollable list
- Detail Screen showing detailed view including:
  - Title, subtitle, image, and cleaned-up text
  - Pull-to-refresh and share functionality
- Navigation using React Navigation
- Error handling with loading indicators and try-catch blocks
- Unit tests for major screens using Jest and Testing Library

## Planning and Approach

1. **Understanding Requirements**: Reviewed the API documentation and expected app behavior from the video demo.
2. **API Integration**: Implemented secure token-based authentication and content fetching.
3. **Screen Structure**: Designed a clean layout for both Home and Detail screens.
4. **Component Design**: Used reusable and modular components where applicable.
5. **Navigation Setup**: Used stack-based navigation for screen transitions.
6. **Testing Setup**: Configured Jest and wrote unit test cases for both screens.
7. **Code Style**: Maintained consistent code styling and meaningful naming conventions.

## Testing

- `__tests__/HomeScreen.test.tsx`: Tests home screen rendering and content.
- `__tests__/DetailScreen.test.tsx`: Tests detail screen with mock data and interactions.
- Used `jest-fetch-mock` to mock network requests for predictable test behavior.

## Tools and Dependencies

- React Native (using CLI, not Expo)
- TypeScript
- React Navigation
- Jest and React Native Testing Library
- Minimal external dependencies

## Notes

- The app is built using React Native CLI as per the requirement (Expo not used).
- Codebase follows simple, readable, and maintainable structure.
- Focused on clarity, modularization, and test coverage.
- All tasks and features demonstrated in the video have been implemented.
