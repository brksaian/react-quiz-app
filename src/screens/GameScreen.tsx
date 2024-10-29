import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { useGame } from '../contexts/GameContext';

export const GameScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { players, currentQuestion, nextQuestion, addScore, selectedCategory, setSelectedCategory } = useGame();
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [categoryChosen, setCategoryChosen] = useState(false);

  useEffect(() => {
    nextQuestion();
  }, []);

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      addScore(players[currentPlayerIndex].id);
    }
    const nextPlayerIndex = (currentPlayerIndex + 1) % players.length;
    setCurrentPlayerIndex(nextPlayerIndex);

    if (nextPlayerIndex === 0) {
      nextQuestion(categoryChosen && selectedCategory ? selectedCategory : undefined);
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCategoryChosen(true);
    nextQuestion(category);
  };

  const handleNextTurn = () => {
    setCategoryChosen(false);
    nextQuestion();
  };

  const handleEndGame = () => {
    Alert.alert(
      "Fim do Jogo",
      "Deseja iniciar um novo jogo?",
      [
        { text: "Sim", onPress: () => navigation.navigate('HomeScreen') },
        { text: "Não", style: "cancel" }
      ]
    );
  };

  const currentPlayer = players[currentPlayerIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo de Perguntas</Text>
      
      {currentPlayer.score >= 20 || currentPlayer.score === 0 ? (
        <View style={styles.categorySelection}>
          <Text style={styles.categoryTitle}>Escolha uma Categoria:</Text>
          <View style={styles.categoryList}>
            {['Artes', 'Geografia', 'Esporte', 'Entretenimento', 'História', 'Ciências'].map(category => (
              <TouchableOpacity 
                key={category} 
                style={styles.categoryButton} 
                onPress={() => handleCategorySelect(category)}
              >
                <Text style={styles.categoryButtonText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : null}

      {currentQuestion ? (
        <>
          <View style={styles.questionContainer}>
            <Text style={styles.question}>Pergunta:</Text>
            <Text style={styles.questionText}>{currentQuestion.question}</Text>
          </View>
          <Text style={styles.category}>Categoria: {currentQuestion.category}</Text>
          <Text style={styles.player}>Jogador Atual: {currentPlayer.name}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.answerButton} onPress={() => handleAnswer(true)}>
              <Text style={styles.buttonText}>Responder Correto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.answerButton} onPress={() => handleAnswer(false)}>
              <Text style={styles.buttonText}>Responder Incorreto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={handleNextTurn}>
              <Text style={styles.buttonText}>Trocar Pergunta</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Text style={styles.loadingText}>Carregando pergunta...</Text>
      )}

      <TouchableOpacity style={styles.resultsButton} onPress={handleEndGame}>
        <Text style={styles.buttonText}>Ver Resultados</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  categorySelection: { marginBottom: 20, width: '100%', alignItems: 'center' },
  categoryTitle: { fontSize: 18, fontWeight: '600', color: '#555', marginBottom: 10 },
  categoryList: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  categoryButton: { 
    backgroundColor: '#4c6ef5', 
    paddingVertical: 10, 
    paddingHorizontal: 15, 
    borderRadius: 5, 
    margin: 5 
  },
  categoryButtonText: { color: '#fff', fontWeight: '500' },
  questionContainer: { alignItems: 'center', marginVertical: 20 },
  question: { fontSize: 20, fontWeight: '600', color: '#333' },
  questionText: { fontSize: 18, color: '#555', textAlign: 'center', marginTop: 10 },
  category: { fontSize: 16, color: '#666', marginTop: 5 },
  player: { fontSize: 18, fontWeight: '600', color: '#444', marginVertical: 10 },
  buttonsContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 20 },
  answerButton: { 
    backgroundColor: '#37b24d', 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 5, 
    marginHorizontal: 5 
  },
  nextButton: { 
    backgroundColor: '#ff922b', 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 5, 
    marginHorizontal: 5 
  },
  buttonText: { color: '#fff', fontWeight: '600' },
  resultsButton: { 
    backgroundColor: '#1c7ed6', 
    paddingVertical: 12, 
    paddingHorizontal: 25, 
    borderRadius: 5, 
    marginTop: 30 
  },
  loadingText: { fontSize: 18, color: '#888', marginTop: 20 }
});
