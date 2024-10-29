import React, { createContext, useContext, useEffect, useState } from 'react';
import questionsData from '../../db/questions.json';
import { GameContextProps, GameProviderProps, Player, Question } from '../shared/interfaces';

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  const nextQuestion = (category?: string) => {
    let filteredQuestions = questions;

    if (category) {
      filteredQuestions = questions.filter(q => q.category === category);
    }

    if (filteredQuestions.length > 0) {
      const nextQ = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
      setCurrentQuestion(nextQ);
      setQuestions(prev => prev.filter(q => q.id !== nextQ.id));
    } else {
      console.warn("Sem perguntas restantes.");
    }
  };

  const addScore = (playerId: number) => {
    setPlayers(prev =>
      prev.map(player => {
        if (player.id === playerId) {
          const newScore = player.score + 1;
          return {
            ...player,
            score: newScore,
            canChooseCategory: newScore === 20 || (newScore === 1 && player.canChooseCategory),
          };
        }
        return player;
      })
    );
  };

  const resetGame = () => {
    setPlayers([]);
    setQuestions(questionsData);
    setCurrentQuestion(null);
    setSelectedCategory(null);
  };

  return (
    <GameContext.Provider value={{ players, currentQuestion, setPlayers, nextQuestion, addScore, resetGame, selectedCategory, setSelectedCategory }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within a GameProvider');
  return context;
};