Packages to be installed to create empty expo typescript template

``` bash 
npx create-expo-app@latest --template
```
```bash
npx expo customize metro.config.js 
```
Execute the code

```bash
npx expo start
```

Stack feature packages to be installed
```bash
npm install @react-navigation/native-stack
```
```bash
npm install @react-navigation/native
```



dependant package for react-navigation for expo
```bash
npm install @react-navigation/drawer
```
```bash
npx expo install react-native-screens react-native-safe-area-context
``` 
dependant package for react-navigation for bare React Native project

```bash
npm install react-native-screens react-native-safe-area-context
``` 

Importent for drawer congiguration.

```bash
npx expo install react-native-gesture-handler react-native-reanimated
``` 

for firebase install 

```bash
npx expo install firebase
```

```bash
npm i @react-native-async-storage/async-storage
```
# React navigation documentaion  
https://reactnavigation.org/docs/getting-started

current output

![image](https://github.com/user-attachments/assets/997e04a9-4351-4f34-90da-689d82d57ce5)

![image](https://github.com/user-attachments/assets/1f828db7-6f63-4f8b-aafd-2eaa2d237061)

![image](https://github.com/user-attachments/assets/d9a80545-4589-403e-8cb5-a59ddfc1b5ce)

![image](https://github.com/user-attachments/assets/bdf8a3f1-8bd3-4dde-bdf8-06cbae9d803a)

![image](https://github.com/user-attachments/assets/ef046acd-4a5f-4967-9ffd-cc43cf3e680a)

![image](https://github.com/user-attachments/assets/0981a574-eec7-430d-8283-95e2c4b6cb7f)



# React Native Touchables

This document provides an overview of the touchable components available in React Native: `TouchableOpacity`, `TouchableHighlight`, and `TouchableWithoutFeedback`.

## 1. TouchableOpacity

- **Purpose**: Captures touch events and gives visual feedback by dimming the component when pressed.
  
- **Usage**: Best used when you want to indicate that an item is touchable with a subtle fade effect.
  
- **Key Feature**: The `activeOpacity` prop allows you to control the opacity when the component is pressed.

### Example

```jsx
<TouchableOpacity activeOpacity={0.7} onPress={() => { /* handle press */ }}>
  <Text>Press Me</Text>
</TouchableOpacity>
```

## 2. TouchableHighlight

- **Purpose**: Similar to `TouchableOpacity`, but it provides a highlight effect when pressed.
  
- **Usage**: Best used for items where you want to emphasize the touch action by changing the background color.
  
- **Key Feature**: The `underlayColor` prop allows you to set the color that shows when the component is pressed.

### Example

```jsx
<TouchableHighlight underlayColor="#DDDDDD" onPress={() => { /* handle press */ }}>
  <Text>Press Me</Text>
</TouchableHighlight>
```
## 3. TouchableWithoutFeedback

- **Purpose**: Captures touch events without providing any visual feedback.
  
- **Usage**: Best used for cases where you want to detect touches but don’t want to change the appearance of the component.
  
- **Key Feature**: It does not have any props for visual feedback, making it suitable for non-interactive areas or when you want to dismiss a keyboard.

### Example

```jsx
<TouchableWithoutFeedback onPress={() => { /* handle press */ }}>
  <View>
    <Text>Press Me (No Feedback)</Text>
  </View>
</TouchableWithoutFeedback>
```
