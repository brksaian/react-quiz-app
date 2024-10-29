import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useGame } from '../contexts/GameContext';

export const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { setPlayers, resetGame } = useGame();
  const [numPlayers, setNumPlayers] = useState<number>(2);

  const handleStartGame = () => {
    resetGame();
    const players = Array.from({ length: numPlayers }, (_, index) => ({
      id: index + 1,
      name: `Jogador ${index + 1}`,
      score: 0,
      canChooseCategory: false,
    }));
    setPlayers(players);
    navigation.navigate('GameScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Jogo de Perguntas!</Text>
      <Text>Escolha o número de jogadores:</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={String(numPlayers)}
        onChangeText={(value) => setNumPlayers(Number(value))}
      />
      <Button title="Iniciar Jogo" onPress={handleStartGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderBottomWidth: 1, width: 100, textAlign: 'center', marginBottom: 20 },
});
