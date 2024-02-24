# Youtube channel: Codevolution

**Reference:** https://www.youtube.com/watch?v=hzzCveeczSQ&list=PLC3y8-rFHvwhiQJD1di4eRVN30WWCXkg1\
**Source code**: https://github.com/gopinav/React-Native-Tutorials


One stop shop for React:\
```	Fundamental & Advanced topics		Storybook
	Hooks								Query
	Typescripts							Table
	Redux								Formik
	Router								Hook form
	Testing								Render
	Material UI							React native
	Styled components
```	
## What is React Native?
* It is an open-source framework maintained by Meta(Facebook) for building cross-platform apps (i.e. native Android and iOS apps) using React.
* Leveraging JS, you can access platform-specific API's (like Camera and push notifications) 
* Employing React components to define the appearance and behaiour of your UI
* React itself is a library for building UI:
	* react-dom 	: for Web Apps
	* react-native	: for native Mobile Apps	
* iOS requires Swift/Objective-C
* Android requires Java/Kotlin
* With React native, you can create an app that works seamlessly on both platforms.
	
### Companies?
* Microsoft
* Meta
* Tesla
* Pinterest
* Discord

### Prerequisites:
* JS, 
* React fundamentals
	

-------------------------------------------	
## React Native Tutorial 3 - Hello World

> **_Create Your Project:_**\
> \> npx create-expo-app@latest HelloWorld
>
>>	**_Run your project:_** \
>>	\> npm run android\
>>	\> npm run ios\
>>	\> npm run web
	
### Folder structure:
```	
HelloWorld
	+ assets		: Contains various resources(images, videos)
	+ node_modules	: Has all project dependencies and is automatically Git ignored
	+ App.js		: Default screen of the project. Acts as a root file, that loads when development server is started with npm start command
	+ app.json		: Configuration options for project
	+ package.json	: Contain metadata(name,version,main), scripts(start,android,ios,web) and dependencies(expo,react,react-native)
	+ package-lock.json
	+ babel.config.js	: Babel configuration/presets file
	+ .gitignore
```	
```
> cd HelloWorld/
> npm start
```
	
## CORE COMPONENTS :
	In Android and iOS development, we employ a fundamental building block called a "view" for UI
	A view is a small rectangular element on the screen that can display text, images, or respond to user input
	Android - views are written in Kotlin or Java
	iOS - views are written in Swift or Objective-C
	React Native - views using JavaScript through React components
	At runtime, React Native generates the corresponding Android and iOS views for these components.

	React Native offers a collection of essential pre-built components known as "Core components," which are readily available for building your native app's UI.

| REACT NATIVE UI COMPONENT	| ANDROID VIEW	| IOS VIEW	| WEB ANALOG |
| --- | --- | --- | --- |
| \<View>		| \<ViewGroup> | \<UIView>		| A non-scrolling \<div> |
| \<Text>		| \<TextView>  | \<UITextView>	| \<p> |
| \<Image>		| \<ImageView> | \<UIImageView>	| \<img> |
| \<ScrollView> | \<ScrollView>| \<UIScrollView>| \<div> |
| \<TextInput>	| \<EditText>  | \<UITextField>	| \<input type="text"> |

**\<View> Component:**	
* The View component is a fundamental core component in React Native that serves as a building block for creating UI.
* It functions as a container that supports layout using flexbox, styling, touch handling and accessibility controls.
* In Web development terms, the View component can be compares to the \<div>.
* The View component is typically nested inside other views and can have 0 or more children of any type.

**\<Text> Component:**
* Component for displaying text.
* It supports nesting, styling and touch-handling.
* Depending on target platform, ReactNative will translate \<Text> to:
	* \<TextView>(for Android) 
	* \<UITextView>(for iOS) 
	* 'p'(Web).
	
**\<Image> Component:**
* It enables us to display various types of images, including:
	* Static images
	* Network images
	* Images from the local disk, such as the camera roll
	
* ReactNative seamlessly translates the Image component to platform-specific counterparts:
	* ImageView for Android
	* UIImageView for iOS
	* 'img' for the Web
	
**\<ScrollView> Component:**
* It wraps the platform-specific scrolling functionality.
* It requires bounded height to function properly.
```
	<Image style={{width:300, height:300}} source={logoImg}></Image>
	<Image style={{width:150, height:150}} source={{uri:"https://picsum.photos/300"}}></Image>
```
	
**\<Button> Component:**
	It allows user to trigger actions
		<Button title="Press" onPress={ ()=>{console.log("Button pressed")} } color='green' />

**\<Pressable> Component:**
* It is a wrapper component that detects stages of press interactions on its defined children.
* You can create a custom button using Pressable component.
	* onPressIn		: Is called when a press in activated
    * onLongPress	: Is called when a press is held for over 500ms
    * *onPressOut	: Is called when a press gesture is deactivated

**\<Modal> Component:**
* It is a screen that overlays the appcontent to provide important info / prompt user for decision.
* Since they are purposefully interruptive make sure you use them only when necessary.





