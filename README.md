# Expo Job Matching App

A modern, scalable React Native application built with Expo for matching users to jobs based on their profile. The project demonstrates a clean, maintainable architecture using a custom, simplified Feature-Sliced Design, making it easy to scale and extend for larger applications.

---

## 📱 Features

- **Job Listings Screen:**  
  Displays a list of jobs matching the user's profile in an interactive card layout (title, location, hourly rate, etc.).

- **Job Details Screen:**  
  Shows detailed job information (description, required skills) and allows users to accept or reject jobs with immediate feedback.

- **User Profile Screen:**  
  Presents user profile details relevant to job matching, fetched from the API.

- **Action Responses:**  
  Accept/reject jobs with clear success/error feedback.

---

## 🏗️ Project Structure

This project uses a custom, simplified [Feature-Sliced Design](https://feature-sliced.design/) tailored for this app, but easily scalable for larger projects.

```
expo-task/
├── src/
│   ├── app/           # App entry, navigation, and screens (Expo Router)
│   ├── config/        # App-wide providers and store setup
│   ├── entities/      # Business entities (jobs, profile) with model, api, ui, lib
│   ├── features/      # Feature logic (job actions, profile logic)
│   ├── shared/        # Shared UI components, styles, utils, API base
│   └── widgets/       # Composite UI blocks (if needed)
├── __mocks__/         # Test mocks for libraries
├── assets/            # Images, fonts, etc.
├── .expo/             # Expo generated files
├── package.json
├── jest.config.js
├── tsconfig.json
└── README.md
```

- **src/app/**: Navigation, routing, and screen composition (Job List, Job Details, Profile, Settings, etc.)
- **src/entities/**: Core business logic, types, API, and UI for jobs and profile
- **src/features/**: Feature-specific logic (e.g., job accept/reject, profile fetching)
- **src/shared/**: Reusable UI components, hooks, styles, API base, and utilities
- **src/config/**: Store, providers, and configuration
- **src/widgets/**: Composite UI blocks (optional, for scalable apps)
- **__mocks__/**: Test mocks for libraries (e.g., vector icons, images)

> **Note:** This structure is intentionally simplified for this project, but can be expanded for larger, more complex apps. The Feature-Sliced approach helps keep business logic, UI, and features decoupled and maintainable.

---

## ⚙️ Requirements

- **Expo** for streamlined setup and deployment
- **React Native** for cross-platform mobile development
- **Expo Router** for navigation
- **Redux Toolkit** for state management
- **Axios** for HTTP requests
- **Jest** and **React Native Testing Library** for unit and integration testing

---

## 🧪 Testing

- **Unit Tests:**  
  For components and utility functions using Jest and React Native Testing Library.

- **Integration Tests:**  
  For API calls and user actions to ensure reliable data fetching and feedback.

---

## 🚀 Benefits

- **Scalable Architecture:**  
  Feature-Sliced Design enables easy scaling and maintainability.

- **Separation of Concerns:**  
  Clear boundaries between business logic, UI, and API.

- **Robust Testing:**  
  Unit and integration tests ensure reliability and confidence in code changes.

- **Best Practices:**  
  Follows Expo and React Native best practices for performance and maintainability.

- **User Experience:**  
  Responsive UI, clear feedback, and error handling for a seamless user journey.

---

## 📦 Getting Started

1. **Install dependencies:**  
   `npm install`

2. **Run the app:**  
   `npx expo start`

3. **Run tests:**  
   `npm test`



