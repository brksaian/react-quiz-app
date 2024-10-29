import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { useGame } from '../contexts/GameContext';

export const ResultScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { players, resetGame } = useGame();

  const handleNewGame = () => {
    Alert.alert(
      "Novo Jogo",
      "Você deseja iniciar um novo jogo?",
      [
        { text: "Sim", onPress: () => {
            navigation.navigate('HomeScreen');
          } 
        },
        { text: "Não", style: "cancel" }
      ]
    );
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
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  score: { fontSize: 18, marginBottom: 5 },
});
