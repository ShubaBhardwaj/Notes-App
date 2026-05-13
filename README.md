# 📝 Note Taking App

A beautiful, fully-featured Note Taking mobile application built with React Native and Expo. The app features a stunning, adaptive UI with seamless transitions between Light and Dark modes. 

## ✨ Key Features

- **Create & Manage Notes**: Effortlessly add, edit, and delete your notes.
- **Search Functionality**: A built-in search bar on the home screen allows you to find notes instantly.
- **Dynamic Theming**: First-class support for Light and Dark modes, leveraging the system's `useColorScheme()` to automatically adapt or manually toggle via a button.
- **Responsive Navigation**: A sleek, pill-shaped floating navigation bar allows you to switch between the Home view and the Create Note view.
- **Cross-Platform**: Optimized for both iOS and Android with platform-specific adjustments for keyboards and notches.

---

## 📸 Screenshots & Demos

### 📱 Android
| Home (Light) | Home (Dark) | Note View (Dark) | Create Note (Light) |
|:---:|:---:|:---:|:---:|
| <img src="assets/demo/android_screen_short_home_light.jpeg" width="200" /> | <img src="assets/demo/android_screen_short_home_dark.jpeg" width="200" /> | <img src="assets/demo/android_screen_short_note_view_dark.jpeg" width="200" /> | <img src="assets/demo/android_screen_short_create_note_light.jpeg" width="200" /> |

**▶️ Android Demo Video:** [Watch Video](assets/demo/android_screen_recoding.mp4)

### 🍎 iOS
| Home (Light) | Home (Dark) | Note View (Light) | Create Note (Dark) |
|:---:|:---:|:---:|:---:|
| <img src="assets/demo/ios_screen_short_home_light.png" width="200" /> | <img src="assets/demo/ios_screen_short_home_dark.png" width="200" /> | <img src="assets/demo/ios_screen_short_note_view_light.png" width="200" /> | <img src="assets/demo/ios_screen_short_create_note_dark.png" width="200" /> |

**▶️ iOS Demo Video:** [Watch Video](assets/demo/ios_screen_recoding.mov)

---

## 🧭 Navigation & Views

1. **Home View**: 
   - Displays a customized banner with an `ImageBackground`.
   - Features a Search Bar at the top.
   - Lists all created notes using a `FlatList` with individual `Card` components.
   - Includes a **Delete** button on each card.
   - A **Theme Toggle** button sits at the top right.
2. **Note View**: 
   - Accessible by tapping any note card.
   - Displays the full title and content.
   - Features an **Edit** button in the top right. Tapping it transforms the view into edit mode (changing the text to a `TextInput`) and changes the icon to a "Save" icon. Tapping Save commits your changes.
3. **Create Note View**:
   - Accessible via the floating `+` button in the pill navigation.
   - Provides a clean interface to draft new thoughts.

---

## 🛠️ Technical Details & Components

The application is built using standard React Native components to ensure high performance and a native feel:

- **Styling (`StyleSheet`)**: Uses `StyleSheet.create()` to isolate component styles. All styles are placed logically in the `src/styles/` folder so each component has its respective styling file (e.g., `home.ts` for the `Home` component).
- **`ImageBackground`**: Used to render the beautiful banner image at the top of the Home screen with the text overlay *"Organizing your notes"*.
- **Keyboard Management**: Uses iOS `automaticallyAdjustKeyboardInsets` and Android OS-level window resizing (plus conditionally `KeyboardAvoidingView`) to ensure that typing long notes or searching remains comfortable without the keyboard hiding your text.
- **`Pressable`**: Used heavily for interactive elements like note cards, the floating pill navigation icons, and theme toggles. It allows customized opacity/feedback actions.
- **`TextInput`**: The core input method for searching, creating, and editing notes.
- **`FlatList`**: Ensures smooth scrolling and efficient memory usage when rendering the list of note cards.

### Code Snippet: Theming
The app relies heavily on `useColorScheme` to pick colors from a predefined theme palette:
```tsx
const colorScheme = useColorScheme();
const theme = Colors[colorScheme === "dark" ? "dark" : "light"];
// Passing the theme object to our stylesheet functions
const styles = viewNoteStyles(theme);
```

---

## 📁 Project Structure

```
Notes_Taking/
├── assets/             # Images, fonts, and demo media
│   └── demo/           # Screenshots and demo videos
├── src/
│   ├── app/            # Main entry points and navigation handling
│   │   └── index.tsx   
│   ├── components/     # Reusable UI components (Card, Home, view_notes, create_notes)
│   ├── services/       # Async storage logic / Data fetching
│   ├── styles/         # Dedicated stylesheets for components (home.ts, view_note.ts, etc.)
│   └── utils/          # Helper files, including the Theme/Colors configuration
├── app.json            # Expo configuration
└── package.json        # Dependencies
```

---

## 🚀 How to Clone and Run

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd Notes_Taking
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   # or if you use yarn
   yarn install
   ```

3. **Start the Expo Server**
   ```bash
   npx expo start
   ```

4. **Run on your device/emulator**
   - Press **`a`** in the terminal to open on an Android emulator.
   - Press **`i`** in the terminal to open on an iOS simulator.
   - Or download the **Expo Go** app on your physical smartphone and scan the QR code in your terminal.
