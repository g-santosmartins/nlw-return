import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View } from 'react-native';

// internal imports
import { theme } from './src/theme';
import { Widget } from './src/components/Widget'
// fonts
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';


export default function App() {

  // applyng fonts
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  })
  
  if(!fontLoaded) {
    return <AppLoading/>
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}>
      <Widget />
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent
      />
    </View>
  );
}


