import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './src/theme';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


