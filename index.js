/**
 * @format
 */
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import 'react-native-webview';
import 'react-native-render-html';

enableScreens();

AppRegistry.registerComponent(appName, () => App);
