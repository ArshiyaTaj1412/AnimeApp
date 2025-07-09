# 📱 Random Content Viewer App (React Native)

A dynamic mobile application built with **React Native (CLI)** that fetches and displays random content using external APIs. Designed with clean architecture, strong error handling, and a responsive UI.

---

## ✨ Features

- Fetches  content (text, images, videos) from external API
- Handles different content types dynamically
- Displays appropriate fallbacks for loading, errors, and empty data
- Smooth navigation between screens
- Handles no network connectivity and API failures gracefully
- Clean and responsive UI
- Modular and maintainable codebase
- Unit tests included

---

## 🔧 Tech Stack

- **React Native CLI**
- **JavaScript / TypeScript**
- **React Navigation**
- **Axios** (API calls)
- **Jest** (Testing)
- **React Native Testing Library**

---

## 📁 Project Structure

```
├── src
│   ├── assets            # Images, icons, etc.
│   ├── components        # Reusable UI components
│   ├── navigation        # App navigation setup
│   ├── screens           # Application screens
│   ├── services          # API communication logic
│   ├── utils             # Helper functions, constants
│   └── hooks             # Custom hooks
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- Android Studio or Xcode (depending on your platform)
- React Native CLI (not Expo)

### Installation

```bash
git clone https://github.com/arshiya-taj/random-content-viewer.git
cd random-content-viewer
npm install
```

### Running the App

#### Android:

```bash
npx react-native run-android
```

#### iOS:

```bash
npx react-native run-ios
```

> Note: Make sure your emulator/simulator is running or your device is connected.

---

## 🧪 Running Tests

```bash
npm test
```

- Tests cover component rendering, API handling, and fallback logic.
- Uses Jest and React Native Testing Library.

---

## 📷 Screenshots

### 🏠 Home Screen
![Home Screen](./assets/screenshots/home.png)

### 📄 Details Screen
![Details Screen](./assets/screenshots/details.png)

---

## 🎥 Demo Video

[Watch Full App Demo on Google Drive](https://drive.google.com/file/d/1EyTK8U66-H9gUratX7YjnhxWtfPoI2ed/view?usp=sharing)


---

## 📌 Learnings & Highlights

- Built from scratch without using Expo
- Emphasis on clean code and reusable components
- Graceful error and exception handling
- Thoughtful UX even under unpredictable API responses
- Minimal external dependencies for better control and performance

---

## 🧑‍💻 Author

**Arshiya Taj**  
📧 [arshiyataj1412@gmail.com](mailto:arshiyataj1412@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/arshiya-taj-72480b2b9/)  

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
