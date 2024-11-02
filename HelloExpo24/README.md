# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.




-- -------------

Reference: 
https://docs.expo.dev/get-started/create-a-project/

## File Structure:

app:
- Contains the app's navigation, which is file-based. The file structure of the app directory determines the app's navigation.
- The app has two routes defined by two files: app/(tabs)/index.tsx and app/(tabs)/explore.tsx. The layout file in app/(tabs)/_layout.tsx sets up the tab navigator.

assets
- The assets folder contains adaptive-icon.png used for Android and an icon.png used for iOS as app icons. It also contains splash.png which is an image for the project's splash screen and a favicon.png if the app runs in a browser

components
- Contains React Native components, like ThemedText.tsx, which creates text elements that use the app's color scheme in light and dark modes

constants
- Contains Colors.ts, which contains a list of color values throughout the app.

hooks
- Contains React Hooks, which allows sharing common behavior between components. For eg., useThemeColor() is a hook that returns a color based on the current theme.

scripts
- Contains reset-project.js, which can be run with npm run reset-project. This script will move the app directory to app-example, and create a new app directory with an index.tsx file.

app.json
- Contains configuration options for the project and is called the app config. These options change the behavior of your project while developing, building, submitting, and updating your app.

babel.config.js
- Applies the babel-preset-expo preset that extends the default React Native preset and adds support for decorators, tree-shaking web packages, and loading font icons with optional native dependencies if they're installed. You can also modify this file to add additional Babel plugins or presets.

package.json
- The package.json file contains the project's dependencies, scripts, and metadata. Anytime a new dependency is added to your project, it will be added to this file

tsconfig.json
- Contains the rules that TypeScript will use to enforce type safety throughout the project


## Features:

File-based routing
- The app has two screens: app/(tabs)/index.tsx and app/(tabs)/explore.tsx. The layout file in app/(tabs)/_layout.tsx sets up the tab navigator

Android, iOS, and web support
- You can open this project on Android, iOS, and the web. To open the web version, press w in the terminal after running the project

Images
- For static images, you can use the @2x and @3x suffixes to provide images for different screen densities

Custom fonts
- Open app/_layout.tsx to see how to load custom fonts

Light and dark modes
- This template has light & dark mode support. The useColorScheme() hook lets you inspect user's current color scheme, so that you can adjust UI colors accordingly.

Animations
- The components/HelloWave.tsx component uses the Animated API to create a waving hand animation. 
- On iOS, the components/ParallaxScrollView.tsx creates a parallax effect for the header image

## Reset your project
You can remove the boilerplate code and start fresh with a new project. Run the following command to reset your project:
> npm run reset-project

## Develop, review, and deploy
UI Elements:      https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/
Unit tests:       https://docs.expo.dev/develop/unit-testing/
Native modules:   https://docs.expo.dev/config-plugins/introduction/

