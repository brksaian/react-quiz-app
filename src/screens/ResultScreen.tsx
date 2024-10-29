import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useGame } from '../contexts/GameContext';

export const ResultScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { players, resetGame } = useGame();

  const handleNewGame = () => {
    resetGame();
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado Final</Text>
      {players.map((player) => (
        <Text key={player.id} style={styles.score}>
          {player.name}: {player.score} pontos
        </Text>
      ))}
      <Button title="Novo Jogo" onPress={handleNewGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  score: { fontSize: 18, marginBottom: 5 },
});
