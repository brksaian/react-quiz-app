// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { GameProvider } from './src/contexts/GameContext';
import { HomeScreen } from './src/screens/HomeScreen';
import { GameScreen } from './src/screens/GameScreen';
import { ResultScreen } from './src/screens/ResultScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <GameProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Início' }} />
            <Stack.Screen name="GameScreen" component={GameScreen} options={{ title: 'Jogo' }} />
            <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ title: 'Resultado' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </GameProvider>
    </ThemeProvider>
  );
}
