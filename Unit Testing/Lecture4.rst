🧩 What Is Layered Architecture in React Native?

Layered architecture (also known as clean architecture or n-tier architecture) organizes your app by logical layers of responsibility, not by feature or file type.

Each layer has a specific job and depends only on the layer below it — never on the ones above.
This makes your code modular, testable, and easy to maintain.

🏗️ 1. Typical Layers in a React Native App

A common structure has 3 or 4 layers:

src/
 ├── presentation/     # UI layer (React components, screens)
 ├── domain/           # Business logic (use cases, entities)
 ├── data/             # Data handling (API, storage, repositories)
 └── core/             # Common utilities, constants, shared logic


Let’s break them down 👇

🖼️ 2. The Layers Explained
a. Presentation Layer (UI)

Responsible for what the user sees and interacts with.

Contains React Native components, screens, and navigation.

Uses data provided by the domain layer.

Should contain minimal logic — mostly UI behavior.

📂 Example:

src/presentation/
 ├── screens/
 │   ├── LoginScreen.js
 │   └── ProfileScreen.js
 ├── components/
 │   ├── Button.js
 │   └── InputField.js
 └── navigation/
     └── AppNavigator.js

b. Domain Layer (Business Logic)

Contains core application logic, independent of UI and data sources.

Handles rules, decisions, and workflows.

Often includes:

Use cases or services (e.g., loginUser, fetchProfile)

Entities or models (e.g., User, Product)

Pure JavaScript — no React Native or external libraries ideally.

📂 Example:

src/domain/
 ├── entities/
 │   └── User.js
 ├── usecases/
 │   └── loginUser.js

c. Data Layer

Responsible for data sources (API, AsyncStorage, SQLite, Firebase, etc.)

Converts raw data from APIs into entities that the domain layer understands.

Usually includes:

Repositories (abstract interfaces for data access)

API services

Local storage

📂 Example:

src/data/
 ├── repositories/
 │   └── userRepository.js
 ├── services/
 │   └── apiClient.js
 └── sources/
     ├── remote/
     │   └── userApi.js
     └── local/
         └── userStorage.js

d. Core Layer (Shared/Infrastructure)

Contains reusable, shared pieces of logic used across layers:

Constants

Helpers

Types

Theme

Error handling utilities

📂 Example:

src/core/
 ├── constants/
 │   └── colors.js
 ├── utils/
 │   └── formatDate.js
 └── config/
     └── env.js

🔗 3. Layer Dependencies

In a clean layered design:

presentation → domain → data → core


The Presentation layer depends on the Domain layer (calls use cases).

The Domain layer depends on Data layer (through interfaces).

The Data layer uses Core utilities for shared functionality.

👉 None of the inner layers should import anything from outer layers — this keeps your codebase decoupled and testable.

🧪 4. Testing in a Layered Architecture

Because each layer is isolated, testing becomes simpler:

Unit Tests:

Test pure functions and use cases in the domain layer easily.

Integration Tests:

Test data fetching or repository logic in the data layer.

UI Tests:

Use Jest + React Native Testing Library for presentation layer tests.

📂 Example test layout:

src/
 ├── domain/
 │   └── __tests__/
 │       └── loginUser.test.js
 ├── data/
 │   └── __tests__/
 │       └── userRepository.test.js
 └── presentation/
     └── __tests__/
         └── LoginScreen.test.js

🎯 5. Benefits of Layered Architecture
Benefit	Description
Separation of concerns	Each layer handles one responsibility
Testability	Business logic and data logic can be tested independently
Scalability	Easy to add new features or replace layers (e.g., switch API)
Reusability	Domain layer can be reused across platforms (e.g., web, mobile)
Maintainability	Cleaner, more understandable structure
⚡ Summary Table
Layer	Purpose	Example Files
Presentation	UI and screens	LoginScreen.js, AppNavigator.js
Domain	Business logic	loginUser.js, User.js
Data	API, storage, repositories	userApi.js, userRepository.js
Core	Shared utilities	colors.js, config.js